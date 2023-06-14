const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const GitHublololo = sequelize.define("GitHublololo", {
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
         
          module.exports = GitHublololo;