const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const martinCCCCC = sequelize.define("martinCCCCC", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            aaaa: {
            type: Sequelize.ENUM('VALOR1','VALOR2','VALOR3'),
            allowNull: true,
        },
        bbbb: {
            type: Sequelize.ENUM('VALOR1','VALOR2','VALOR3'),
            allowNull: true,
        },
        }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = martinCCCCC;