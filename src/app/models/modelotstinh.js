const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const tstinh = sequelize.define("tstinh", {
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
         
          module.exports = tstinh;