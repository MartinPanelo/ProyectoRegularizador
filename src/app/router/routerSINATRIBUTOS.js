const router = require("express").Router();
        const SINATRIBUTOS = require("./../controllers/controllerSINATRIBUTOS");
        
        router.get("/SINATRIBUTOS", SINATRIBUTOS.ObtenerTodosLosRecursos);
        
        router.get("/SINATRIBUTOS/create", SINATRIBUTOS.VistaFormularioCrearRecurso);
        
        router.get("/SINATRIBUTOS/:id", SINATRIBUTOS.ObtenerUnSoloRecurso);
        
        router.delete("/SINATRIBUTOS/:id", SINATRIBUTOS.EliminarRecurso);
        
        router.post("/SINATRIBUTOS", SINATRIBUTOS.CrearRecurso);
        
        router.put("/SINATRIBUTOS/:id", SINATRIBUTOS.ActualizarRecurso);
        
        router.get("/SINATRIBUTOS/:id/edit", SINATRIBUTOS.VistaFormularioEditarRecurso);
        
        module.exports = router;
        