const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const kiiikkiki = sequelize.define("kiiikkiki", {
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
         
          module.exports = kiiikkiki;