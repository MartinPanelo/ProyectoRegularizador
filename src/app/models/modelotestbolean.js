const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const testbolean = sequelize.define("testbolean", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            qeweqw: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        tuty: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = testbolean;