const { Level } = require("../models");

const levelController = {
  async renderLevelsPage(req, res) {
    // Récupère les Levels de la BDD
    const levels = await Level.findAll();

    // Renvoyer la page des levels
    res.render("levels", { levels });
  },

  async handleCreateLevelForm(req, res) {
    // Récupère le body
    const body = req.body;

    // On vérfie qu'il n'y a pas déjà un level existant pareil
    const existingLevel = await Level.findOne({ where: { name: body.name } });

    // Si le niveau existe déjà
    if (existingLevel) {
      res.render("levels", { isError: true, levels: await Level.findAll() });
      return;
    }

    // Sinon, on créé un niveau
    await Level.create({ name: body.name });

    // On redirige vers la page "/levels"
    res.render("levels", { isSuccess: true, levels: await Level.findAll() });
  }
};

module.exports = levelController;
