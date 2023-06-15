const router = require("express").Router();
        const Auto = require("./../controllers/controllerAuto");
        
        router.get("/Auto", Auto.ObtenerTodosLosRecursos);
        
        router.get("/Auto/create", Auto.VistaFormularioCrearRecurso);
        
        router.get("/Auto/:id", Auto.ObtenerUnSoloRecurso);
        
        router.delete("/Auto/:id", Auto.EliminarRecurso);
        
        router.post("/Auto", Auto.CrearRecurso);
        
        router.put("/Auto/:id", Auto.ActualizarRecurso);
        
        router.get("/Auto/:id/edit", Auto.VistaFormularioEditarRecurso);
        
        module.exports = router;
        