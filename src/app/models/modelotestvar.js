const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const testvar = sequelize.define("testvar", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            asd: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        das: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = testvar;