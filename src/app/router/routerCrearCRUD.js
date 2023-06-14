const router = require("express").Router();

const ControllerCrearCRUD = require("../controllers/controllerCrearCRUD");

router.get("/generarCRUD", ControllerCrearCRUD.ObtenerTodosLosUsuarios);

router.post("/generarCRUD", ControllerCrearCRUD.CrearRecurso);

module.exports = router;
