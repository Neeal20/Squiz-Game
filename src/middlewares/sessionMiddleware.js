const expressSession = require("express-session");
const pgSession = require('connect-pg-simple')(expressSession);

const { Client } = require("pg");

const client = new Client(process.env.PG_URL);

client.connect();

const sessionMiddleware = expressSession({
  store: new pgSession({
    pool : client,
    tableName : 'user_session',
    createTableIfMissing: true
  }),
  secret: process.env.SESSION_SECRET,
  // Sauvegarde la session même si il n'y a pas eu de changement dans cette session avec la requête.
  resave: true,
  // Ca sauvegarde la session même si elle est vide
  saveUninitialized: true,
  // Car on est en HTTP au lieu de HTTPS pour le moment
  cookie: { secure: false }
});

module.exports = sessionMiddleware;
