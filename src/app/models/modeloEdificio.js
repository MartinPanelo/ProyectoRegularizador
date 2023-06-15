const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const Edificio = sequelize.define("Edificio", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
                pisos: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
          ubicacion: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              habitable: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              categoria: {
                type: Sequelize.ENUM('cateUno','cateDos','cateTres'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = Edificio;