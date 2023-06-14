const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const martinFFFFFFFFFFF = sequelize.define("martinFFFFFFFFFFF", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            asdasda: {
                type: Sequelize.ENUM('VALOR1','VALOR2','VALOR3'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = martinFFFFFFFFFFF;