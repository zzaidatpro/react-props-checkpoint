# ⚽ App Cartes de Joueurs (React Props Checkpoint)

Une application web dynamique construite avec **React** et **React-Bootstrap** permettant d'afficher une galerie de cartes d'informations sur des joueurs de football célèbres.

---

## 📌 Aperçu du Projet

Cette application fait partie du checkpoint React Props. Elle met en pratique :
- La création de composants fonctionnels réutilisables (`Player`, `PlayersList`).
- L'utilisation des **props** pour transmettre des données dynamiquement.
- L'attribution de valeurs par défaut (`defaultProps` et paramètres par défaut ES6).
- L'utilisation de la méthode `.map()` pour la traversée de tableaux de données.
- L'utilisation de l'opérateur de propagation (**spread operator `...`**).
- La mise en page responsive avec la grille **React-Bootstrap** et du **style en ligne (Inline Styles)**.

---

## 🛠️ Technologies Utilisées

* **React.js** (Library JavaScript)
* **React-Bootstrap** (Composants UI)
* **Bootstrap 5** (Système de grille et styles)
* **HTML5 / CSS3 / JavaScript ES6+**

---

## 📂 Structure du Projet

```text
src/
├── 
├── Player.js          # Composant affichant la carte individuelle d'un joueur
│── PlayersList.js     # Composant conteneur parcourant la liste des joueurs
├── players.js         # Tableau d'objets contenant les données des joueurs
├── App.js             # Composant racine
└── index.js           # Point d'entrée React (avec import du CSS Bootstrap)
