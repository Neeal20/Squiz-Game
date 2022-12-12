// Créer la connexion à la base de données
require("dotenv/config");
const { Sequelize } = require('sequelize');

// Instance de connexion à la  db
const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: "postgres",
  define: {
    // Dans notre table, le champ 'createdAt' s'appelle `create_at` : permet d'éviter les erreurs du au nom du champ
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = sequelize;
