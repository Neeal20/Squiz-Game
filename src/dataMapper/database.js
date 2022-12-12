require("dotenv/config");

// Connexion à la BDD
const { Client } = require("pg");

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;
