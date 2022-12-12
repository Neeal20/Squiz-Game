// On créé le modèle du Tag

// Import de sequelize et de notre instance de connexion
const { DataTypes, Model } = require("sequelize");
const sequelize = require("./sequelize");

// On créer notre modèle
class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "tag" // Lier notre modèle avec la table qui porte le nom "tag"
});

module.exports = Tag;
