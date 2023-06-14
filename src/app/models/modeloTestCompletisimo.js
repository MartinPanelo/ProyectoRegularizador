const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const TestCompletisimo = sequelize.define("TestCompletisimo", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            varuno: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              enterouno: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        numdos: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        boleano: {
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
         
          module.exports = TestCompletisimo;