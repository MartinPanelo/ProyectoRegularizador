const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const Mascota = sequelize.define("Mascota", {
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
              Vacunado: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              Raza: {
                type: Sequelize.ENUM('Dalmata','Pomerania','Beagle','Collie'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = Mascota;