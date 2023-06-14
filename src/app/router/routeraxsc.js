const router = require("express").Router();
        const axsc = require("./../controllers/controlleraxsc");
        
        router.get("/axsc", axsc.ObtenerTodosLosRecursos);
        
        router.get("/axsc/create", axsc.VistaFormularioCrearRecurso);
        
        router.get("/axsc/:id", axsc.ObtenerUnSoloRecurso);
        
        router.delete("/axsc/:id", axsc.EliminarRecurso);
        
        router.post("/axsc", axsc.CrearRecurso);
        
        router.put("/axsc/:id", axsc.ActualizarRecurso);
        
        router.get("/axsc/:id/edit", axsc.VistaFormularioEditarRecurso);
        
        module.exports = router;
        