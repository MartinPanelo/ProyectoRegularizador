const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const Auto = sequelize.define("Auto", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
                Modelo: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
          descripcion: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              Pack: {
                type: Sequelize.ENUM('Full','Highline','Sport','Normal'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = Auto;