const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const unmillon = sequelize.define("unmillon", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = unmillon;