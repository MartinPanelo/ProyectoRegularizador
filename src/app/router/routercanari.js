const router = require("express").Router();
const canari = require("./../controllers/controllercanari");

router.get("/canari", canari.ObtenerTodosLosRecursos);

router.get("/canari/create", canari.VistaFormularioCrearRecurso); 

router.get("/canari/:id", canari.ObtenerUnSoloRecurso);

router.delete("/canari/:id", canari.EliminarRecurso);
 
router.post("/canari", canari.CrearRecurso);//

router.put("/canari/:id", canari.ActualizarRecurso);

router.get("/canari/:id/edit", canari.VistaFormularioEditarRecurso);

module.exports = router;
