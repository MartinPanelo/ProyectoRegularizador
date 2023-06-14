const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const testbiencompleto = sequelize.define("testbiencompleto", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            num: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        numdos: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        var: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              bol: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              enum: {
                type: Sequelize.ENUM('VALOR1','VALOR2','VALOR3'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = testbiencompleto;