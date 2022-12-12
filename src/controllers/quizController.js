const { Quiz } = require("../models");

const quizController = {
  async renderQuizPage(req, res) {
    try {
      // Récupère l'id via les params
      const quizId = parseInt(req.params.id);

      // Récupère le quizz avec un join des table auteurs / tags / questions
      const quiz = await Quiz.findByPk(quizId, {
        include: [
          { association: "author" },
          { association: "tags" },
          { association: "questions", include: ["level", "propositions"] },
        ]
      });
      // Si l'utilisateur demande un quiz qui n'existe pas,
      if (! quiz) {
        res.status(404).render("404");
        return;
      }
      res.render("quiz", { quiz });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};

module.exports = quizController;
