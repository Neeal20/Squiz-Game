# Squiz Game

### Création d'un utilisateur dans la base de donnée (PostgreSQL)
`CREATE USER nom_du_user WITH PASSWORD 'mot_de_passe';`

### Création de la base de donnée
`CREATE DATABASE nom_de_la_db OWNER nom_du_user;`

### Installation de la base de donnée
- Dans le dossier data : 3 scripts de créations de base de donnée.
- Pour initialiser les scripts, lancer dans le terminal cette commande : 
`psql -U numUtilisateur -d nomBaseDeDonnees -f chemin/du/fichier.sql`

psql -U postgres -d squiz -f data/create_tables.sql

### Installation du projet
- npm install
- Configuration des variables d'environnement grâce au .env.example

### Page Admin
- Possibilité de se connecter en admin pour créer un nouveau level
- Voir les identifiants admin en dessous

### Login en Admin
- Adresse mail : michel@gmail.com
- Mot de passe : michelmichel

### Features à venir :
- Créatiion du formulaire d'envoi de réponse
- Récupérer le nombre de bonne réponse
- Implémenter les bonnes réponses dans un compteur
- Lier le compteur à l'user (si il existe)# Squiz-Game
# Squiz-Game
