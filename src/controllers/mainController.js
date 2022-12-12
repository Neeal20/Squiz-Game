const { Quiz } = require("../models");

const mainController = {
  async renderHomePage(req, res) {

    try {
      // On récupère tous nos quiz en ajoutant les tables author et tags grâce au join (include)
      const quizzes = await Quiz.findAll({
        include: ["author", "tags"],
        // On ordonne les quiz par ordre ascendant (alphabétique) de leur titre
        order: [["title", "ASC"]]
      });
      res.render("home", { quizzes }); // req.app.locals.quizzes = quizzes; Equivalent
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async renderUserProfilePage(req, res) {
    const user = req.app.locals.user;
    res.render("profile", { user });
  }
};

module.exports = mainController;
