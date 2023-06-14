const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const testatributo = sequelize.define("testatributo", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            num1: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        num2: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = testatributo;