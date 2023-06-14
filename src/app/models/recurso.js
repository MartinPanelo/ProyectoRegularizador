const Sequelize = require("sequelize");
const sequelize = require("../conexion");
const recurso = sequelize.define("recurso", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = recurso;
