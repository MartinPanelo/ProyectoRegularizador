const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const martinmartin = sequelize.define("martinmartin", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            tabla: {
                type: Sequelize.ENUM('VALOR1','VALOR2','VALOR3'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = martinmartin;