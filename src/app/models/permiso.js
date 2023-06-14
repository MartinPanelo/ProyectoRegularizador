const Sequelize = require("sequelize");
const sequelize = require("../conexion");
const permiso = sequelize.define("permiso", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  consultar: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  borrar: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  actualizar: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  agregar: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  recurso_nombre: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  usuario_usuario: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = permiso;
