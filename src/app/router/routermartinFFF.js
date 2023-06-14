const router = require("express").Router();
        const martinFFF = require("./../controllers/controllermartinFFF");
        
        router.get("/martinFFF", martinFFF.ObtenerTodosLosRecursos);
        
        router.get("/martinFFF/create", martinFFF.VistaFormularioCrearRecurso);
        
        router.get("/martinFFF/:id", martinFFF.ObtenerUnSoloRecurso);
        
        router.delete("/martinFFF/:id", martinFFF.EliminarRecurso);
        
        router.post("/martinFFF", martinFFF.CrearRecurso);
        
        router.put("/martinFFF/:id", martinFFF.ActualizarRecurso);
        
        router.get("/martinFFF/:id/edit", martinFFF.VistaFormularioEditarRecurso);
        
        module.exports = router;
        