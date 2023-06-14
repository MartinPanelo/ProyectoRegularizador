const router = require("express").Router();
const ControllerUserSpace = require("../controllers/controllerUserSpace");


router.get("/VistaUserSpace", ControllerUserSpace.CargarVistaUserSpace);

router.get("/CargarRecursos", ControllerUserSpace.cargarRecursos);







module.exports = router;
