const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Level extends Model {}

Level.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "level"
});


module.exports = Level;
