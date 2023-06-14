const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Obtener la ruta de la carpeta "router"
const rutasPath = path.join(__dirname, "./router/");

// Leer los archivos de la carpeta "router"
fs.readdirSync(rutasPath).forEach((file) => {
  // Obtener la ruta completa del archivo
  const filePath = path.join(rutasPath, file);

  // Importar el archivo de la ruta
  const ruta = require(filePath);

  // Agregar los endpoints al enrutador

  router.use("/", ruta);
});

// Exportar el enrutador
module.exports = router;
