const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const GitHubgigigigig = sequelize.define("GitHubgigigigig", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            asd: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              adas: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        dsasda: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        asdas: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              dasda: {
                type: Sequelize.ENUM('VALOR1','VALOR2','VALOR3'),
                allowNull: true,
              },
              }, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = GitHubgigigigig;