const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const Perro = sequelize.define("Perro", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
                Edad: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
          Nombre: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              Raza: {
                type: Sequelize.ENUM('Dalmata','Pomerania','Beagle','Collie'),
                allowNull: true,
              },
              Vacunado: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = Perro;