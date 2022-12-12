// Charger les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();

// Importer les dependances
const express = require("express");
const router = require("./src/router");
const middleware404 = require("./src/middlewares/middleware404");
const sessionMiddleware = require("./src/middlewares/sessionMiddleware");
const addLoggedInUserToLocals = require("./src/middlewares/addLoggedInUserToLocals");

// Création de l'application express
const app = express();

// Configurer le view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Configurer les sessions
app.use(sessionMiddleware);

app.use(addLoggedInUserToLocals);

// On expose le contenu du dossier public au reste du monde
app.use(express.static("public")); // Ca revient à déclarer une route par fichier en quelque sorte

// Notre body parser pour les requêtes POST
app.use(express.urlencoded({ extended: true }));

// On plug le router
app.use(router);

// Middleware de 404
app.use(middleware404);

// Lancer l'application
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
