$(document).ready(function () {
    // 1. Initialisation de DataTables
    $('#catalogueTable').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/fr-FR.json'
        },
        pageLength: 5
    });

    // Fonction pour initialiser Select2
    function initSelect2() {
        $('#categorie, #voiture').select2({
            theme: 'bootstrap-5',
            width: '100%',
            placeholder: '-- Sélectionner --'
        });
    }

    // Initialisation initiale
    initSelect2();

    // Sauvegarder toutes les options de voitures d'origine sous forme de tableau d'éléments DOM
    var optionsVoitures = $('#voiture option').toArray();

    // 2. Gestion des listes dépendantes (Catégorie -> Voiture)
    $('#categorie').on('change', function () {
        var categorieChoisie = $(this).val();

        // Étape cruciale : détruire Select2 avant de modifier les options du select
        $('#voiture').select2('destroy');

        // Vider le select et remettre l'option par défaut
        $('#voiture').empty();
        $('#voiture').append('<option value="">-- Sélectionner --</option>');

        // Filtrer et rajouter les options correspondantes
        optionsVoitures.forEach(function (opt) {
            var cat = $(opt).data('categorie');
            if (categorieChoisie === "" || cat === categorieChoisie) {
                $('#voiture').append(opt);
            }
        });

        // Réinitialiser Select2 pour qu'il prenne en compte les nouvelles options
        initSelect2();

        // Réinitialiser le prix et recalculer
        document.getElementById("prixTotal").value = "";
        calculerPrix();
    });

    // Écouter les changements sur la voiture ou les dates pour recalculer
    $('#voiture, #dateDebut, #dateFin').on('change', function () {
        calculerPrix();
    });
});

// 3. Fonction de calcul du prix
function calculerPrix() {
    var voiture = document.getElementById("voiture").value;
    var dateDebut = document.getElementById("dateDebut").value;
    var dateFin = document.getElementById("dateFin").value;
    var prixTotal = document.getElementById("prixTotal");
    var message = document.getElementById("message");

    message.textContent = "";

    // Vérifier si tous les champs nécessaires sont remplis
    if (voiture === "" || dateDebut === "" || dateFin === "") {
        prixTotal.value = "";
        return;
    }

    var debut = new Date(dateDebut);
    var fin = new Date(dateFin);

    // Vérifier la validité des dates
    if (fin < debut) {
        message.textContent = "La date de fin doit être supérieure ou égale à la date de début.";
        prixTotal.value = "";
        return;
    }

    // Calcul du nombre de jours
    var difference = fin - debut;
    var nombreJours = difference / (1000 * 60 * 60 * 24);

    if (nombreJours === 0) {
        nombreJours = 1;
    }

    // Calcul du total (la valeur de l'option correspond directement au prix journalier)
    var prixJournalier = Number(voiture);
    var total = nombreJours * prixJournalier;

    prixTotal.value = total + " DT";
}