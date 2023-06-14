const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const martinFFF = sequelize.define("martinFFF", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            asda: {
                type: Sequelize.ENUM('VALOR1','VALOR2','VALOR3'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = martinFFF;