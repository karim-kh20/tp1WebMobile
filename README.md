# Mini-projet : Site web d'une agence de location de voitures (Auto Rent)

Ce projet a été réalisé dans le cadre des Travaux Pratiques de **Développement Web** (ENET'Com). Il s'agit d'un site web évolutif pour une agence de location de voitures, développé progressivement de l'HTML/CSS statique jusqu'à l'intégration de bibliothèques tierces, de données CSV et d'assistances par IA.

---

## 🚀 Fonctionnalités et Parties du Projet

- **Partie 1 :** Structure HTML5 sémantique, mise en forme CSS3 (flexbox) et logique JavaScript pure (calcul de prix et validation de formulaires)[cite: 3, 5, 13].
- **Partie 2 :** Modernisation et design responsive avec **Bootstrap 5** (système de grille, cards et carrousel d'images)[cite: 3, 25, 26].
- **Partie 3 :** Intégration de bibliothèques JavaScript externes :
  - **Select2** : Listes déroulantes interactives avec recherche et thème Bootstrap 5[cite: 3, 26, 27].
  - **DataTables** : Tableau dynamique avec recherche, tri et pagination[cite: 3, 27].
  - **Listes dépendantes** : Filtrage dynamique des véhicules selon la catégorie choisie[cite: 27].
- **Partie 4 :** Extension avancée :
  - Chargement d'un catalogue de **50 véhicules** depuis un fichier de données structuré (`data/vehicles.csv`)[cite: 28, 30].
  - Page de **Contact** avec formulaire et validation JavaScript[cite: 28, 30].
  - Génération d'un **Devis** dynamique avec mise en page dédiée à l'impression (`window.print()` et `@media print`)[cite: 29, 30].

---

## 🛠️ Technologies & Bibliothèques Utilisées

- **Structure & Style :** HTML5, CSS3, Bootstrap 5 (`v5.3.3`)
- **Interactions & Logique :** JavaScript (Vanilla & jQuery `v3.7.1`)
- **Composants Avancés :** Select2, DataTables, PapaParse (pour la lecture du CSV)
- **Gestion de versions :** Git & GitHub[cite: 3]

---

## 📂 Arborescence du Projet

```text
location-voiture/
│
├── index.html         # Page principale (Parties 1 à 3)
├── catalogue.html     # Catalogue dynamique (Partie 4 - CSV)
├── contact.html       # Page de contact (Partie 4)
├── devis.html         # Page de devis et impression (Partie 4)
├── style.css          # Styles personnalisés
├── script.js          # Logique interactive et formulaires
├── data/
│   └── vehicles.csv   # Base de données simulée (50 véhicules)
└── images/            # Dossier contenant les images des véhicules