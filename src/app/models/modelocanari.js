const Sequelize = require("sequelize");
const sequelize = require("./../conexion");
const canari = sequelize.define(
  "canari",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    awd: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = canari;
