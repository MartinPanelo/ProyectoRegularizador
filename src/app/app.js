const express = require("express");
const app = express();
//const path = require("path");

const Sequelize = require("sequelize");
const sequelize = new Sequelize("libreria", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
async function testconnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testconnection();

const router = require("./router/router");
const dirpublic = __dirname.replace("app", "public");

app.use(express.static(dirpublic));
app.use(router);

app.set("views", "./src/public/views");
app.set("view engine", "pug");

app.listen(3000, () => console.log("Server started on port 3000"));
