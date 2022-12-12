const { Tag } = require("../models");

const tagController = {
  async renderAllTagsPage(req, res) {
    // On récupère tous nos thèmes
    const tags = await Tag.findAll({
      include: "quizzes"
    });
    // On affiche la page des thèmes
    res.render("tags", { tags });
  }
};

module.exports = tagController;
