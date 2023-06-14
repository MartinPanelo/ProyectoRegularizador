const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const martinQQQQQ = sequelize.define("martinQQQQQ", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            bo: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = martinQQQQQ;