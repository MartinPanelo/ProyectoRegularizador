const router = require("express").Router();
        const martinmartin = require("./../controllers/controllermartinmartin");
        
        router.get("/martinmartin", martinmartin.ObtenerTodosLosRecursos);
        
        router.get("/martinmartin/create", martinmartin.VistaFormularioCrearRecurso);
        
        router.get("/martinmartin/:id", martinmartin.ObtenerUnSoloRecurso);
        
        router.delete("/martinmartin/:id", martinmartin.EliminarRecurso);
        
        router.post("/martinmartin", martinmartin.CrearRecurso);
        
        router.put("/martinmartin/:id", martinmartin.ActualizarRecurso);
        
        router.get("/martinmartin/:id/edit", martinmartin.VistaFormularioEditarRecurso);
        
        module.exports = router;
        