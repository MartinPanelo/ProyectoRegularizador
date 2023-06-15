const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const Gatos = sequelize.define("Gatos", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            Nombre: {
                type: Sequelize.STRING,
                allowNull: true,
              },
                  Vidas: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
          Vacunado: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              Origen: {
                type: Sequelize.ENUM('Domestico','calle','techo','medianera'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = Gatos;