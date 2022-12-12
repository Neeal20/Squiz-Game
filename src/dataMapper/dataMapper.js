const User = require("../models/User.js");
const db = require("./database.js");

const dataMapper = {
  async getAllTags() {
    const result = await db.query('SELECT * FROM "tag";');
    const tags = result.rows;
    return tags;
  },

  async getUserById(userId) {
    // Je veux renvoyer un user !
    const result = await db.query('SELECT * FROM "user" WHERE id = $1', [userId]);
    const rawUser = result.rows[0];
    const user = new User(rawUser);
    return user;
  }
};

module.exports = dataMapper;
