const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const axsc = sequelize.define("axsc", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
                asd: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
          dsa: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              asda: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = axsc;