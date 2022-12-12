const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class User extends Model {
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

User.init({
  firstname: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    // On autorise seulement 2 valeurs possible : "member" et "admin"
    type: DataTypes.ENUM(["member", "admin"]),
    allowNull: false,
    defaultValue: "member"
  }
}, {
  sequelize,
  tableName: "user"
});


module.exports = User;
