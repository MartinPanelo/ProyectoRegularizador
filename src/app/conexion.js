const { Sequelize, DataTypes, Model } = require("sequelize");

const connection = new Sequelize("libreria", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
connection
  .authenticate()
  .then(() => {
    /* const [results, metadata] = connection.query(
      "CREATE TABLE nombre_tabla (pk_column INTEGER primary KEY,nombre_column varchar(50))"
    ); */
    console.log("Connection to DB was successful");
  })
  .catch((err) => {
    console.error("Unable to connect to DB", err);
  });

module.exports = connection;
