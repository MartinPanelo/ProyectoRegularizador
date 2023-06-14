const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const CONUNATRIBTOR = sequelize.define("CONUNATRIBTOR", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
                asdasd: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
          }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = CONUNATRIBTOR;