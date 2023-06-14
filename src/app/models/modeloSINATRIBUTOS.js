const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const SINATRIBUTOS = sequelize.define("SINATRIBUTOS", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = SINATRIBUTOS;