const router = require("express").Router();

const ControllerCuenta = require("../controllers/controllerCuenta");

router.get("/VistaLogin", ControllerCuenta.CargarVistaLogin);

router.post("/LogearUsuario", ControllerCuenta.LogearUsuario);

router.get("/VistaRegistro", ControllerCuenta.CargarVistaRegistro);

router.post("/RegistrarUsuario", ControllerCuenta.RegistrarUsuario);





module.exports = router;
