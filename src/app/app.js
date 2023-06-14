const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));



var managerRutas = require("./managerRouter");
app.use("/", managerRutas);

const dirpublic = __dirname.replace("app", "public");
app.use(express.static(dirpublic));

app.set("views", "./src/public/views");
app.set("view engine", "pug");

app.listen(8000, () => console.log("Server started on port 8000"));
