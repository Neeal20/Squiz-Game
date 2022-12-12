const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const { User } = require("../models");

function renderLoginPage(req, res) {
  // On affiche la page des logins
  res.render("login");
}

function renderSignupPage(req, res) {
  // On affiche la page d'inscription
  res.render("signup");
}

async function handleSignupForm(req, res) {
  try {
    // - Récupérer les info de l'utilisateur depuis le body
    const { firstname, lastname, email, password, confirmation } = req.body;

    // - CONTROLES DES INPUTS - Vérifier que le password + le confirmation_password match bien.
    if (password !== confirmation) {
      res.status(400).render("signup", { errorMessage: "Le mot de passe et sa confirmation ne correspondent pas." });
      return;
    }

    // - CONTROLES DES INPUTS - On vérifie que l'email est au bon format (emailValidator)
    if (! emailValidator.validate(email)) {
      res.status(400).render("signup", { errorMessage: "L'email renseigné est dans un format invalide." });
      return;
    }

    // - CONTROLES DES INPUTS - On vérifie la présence du firstname et lastname
    // Si l'utilisateur n'a pas mis de firstname / lastname
    if (! firstname || ! lastname) {
      res.status(400).render("signup", { errorMessage: "Les champs Prénom et Nom sont obligatoires." });
      return;
    }

    // - CONTROLES DES INPUTS - Mot de passe plus grand que 8 caractères
    if (! password || password.length < 8) {
      res.status(400).render("signup", { errorMessage: "Le mot de passe doit faire plus de 8 caractères." });
      return;
    }

    // On vérifie s'il n'existe pas déjà un utilisateur avec le même email.
    // => On veut que dans notre application, l'email soit unique.
    const existingUserWithMatchingEmail = await User.findOne({ where: { email }});
    // Si l'email existe déjà dans la db
    if (existingUserWithMatchingEmail) {
      res.status(400).render("signup", { errorMessage: "Ce mail est déjà utilisé." });
      return;
    }

    // - On encrypte le mot de passe avant de le stocker dans la BDD via 'brcypt'
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    // - Création de l'utilisateur dans la BDD
    await User.create({
      firstname,
      lastname,
      email,
      password: encryptedPassword
    });
    // Rediriger vers la page de connexion
    res.redirect("/login");
    // sinon, error
  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}

async function handleLoginForm(req, res) {
  try {
    // Récupérer les données du BODY
    const { email, password } = req.body;

    // Récupérer l'utilisateur dans la BDD.
    const user = await User.findOne({ where: { email }});
    // - s'il n'existe pas, on renvoie un message d'erreur.
    if (! user) {
      return res.status(401).render("login", { errorMessage: "Le mot de passe et/ou l'email sont incorrectes." });
    }
    // On compare le mdp brute avec le MDP hashé de la BDD via le module bcrypt.
    const isMatchingPassword = await bcrypt.compare(password, user.password);
    if (! isMatchingPassword) {
      return res.status(401).render("login", { errorMessage: "Le mot de passe et/ou l'email sont incorrectes." });
    }

    // On sauvegarde l'user dans la session
    req.session.userId = user.id;

    // On redirige vers la home page
    res.redirect("/");

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}

async function logoutAndRedirect(req, res) {
  // Retirer l'utilisateur de la session
  req.session.userId = null;
  // On redirige vers la page d'accueil
  res.redirect("/");
}

module.exports = {
  renderLoginPage,
  renderSignupPage,
  handleLoginForm,
  handleSignupForm,
  logoutAndRedirect
};
