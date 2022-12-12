// Fichier d'index pour regrouper les models crées

// On récupera les models dans cet index
const {
  Tag,
  Level,
  User,
  Quiz,
  Question,
  Answer
} = require("./schema/associations");

// On export nos models
module.exports = {
  Tag,
  Level,
  User,
  Quiz,
  Question,
  Answer
};
