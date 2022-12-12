const { Router } = require("express");
const router = Router();

const {
  mainController,
  tagController,
  levelController,
  quizController,
  userAuthController
} = require("./controllers");

const isLoggedIn = require("./middlewares/isLoggedIn");

function isAdmin(req, res, next) {
  if (!req.session.userId) {
    // On renvoie à la route `/login`
    return res.status(401).redirect("/login");
  }
  // On a besoin de récupérer l'user
  const user = req.app.locals.user;

  // Si l'user n'est pas admin, je le renvoie sur la home
  if (user.role !== "admin") {
    return res.status(404).render("404");
  }
  // J'envoi au prochain middleware
  next();
}

// Affichage de la page d'accueil (home)
router.get("/", mainController.renderHomePage);

// Affichage de la page profile
router.get("/profile", isLoggedIn, mainController.renderUserProfilePage);

// Affichage de la page des thèmes
router.get("/tags", tagController.renderAllTagsPage);

// Afficher la page de création des niveaux si on est admin
router.get("/levels", isAdmin, levelController.renderLevelsPage);

// Créer un nouveau niveau si on est admin
router.post("/levels", isAdmin, levelController.handleCreateLevelForm);

// Afficher le quizz et ses questions en fonction de son id
router.get("/quiz/:id", quizController.renderQuizPage);

// Afficher la page des logins
router.get("/login", userAuthController.renderLoginPage);

// Connexion de l'utilisateur
router.post("/login", userAuthController.handleLoginForm);

// Afficher la page d'inscription de l'utilisateur
router.get("/signup", userAuthController.renderSignupPage);

// Créer un utilisateur dans la db
router.post("/signup", userAuthController.handleSignupForm);

// Déconnecter l'user de la session
router.get("/logout", isLoggedIn, userAuthController.logoutAndRedirect);

module.exports = router;
