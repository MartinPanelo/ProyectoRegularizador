const Sequelize = require("sequelize");
const sequelize = require("../conexion");
const usuario = sequelize.define("usuarios", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contraseña: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = usuario;
