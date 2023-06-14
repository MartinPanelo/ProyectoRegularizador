const router = require("express").Router();
        const martinFFFFFFFFFFF = require("./../controllers/controllermartinFFFFFFFFFFF");
        
        router.get("/martinFFFFFFFFFFF", martinFFFFFFFFFFF.ObtenerTodosLosRecursos);
        
        router.get("/martinFFFFFFFFFFF/create", martinFFFFFFFFFFF.VistaFormularioCrearRecurso);
        
        router.get("/martinFFFFFFFFFFF/:id", martinFFFFFFFFFFF.ObtenerUnSoloRecurso);
        
        router.delete("/martinFFFFFFFFFFF/:id", martinFFFFFFFFFFF.EliminarRecurso);
        
        router.post("/martinFFFFFFFFFFF", martinFFFFFFFFFFF.CrearRecurso);
        
        router.put("/martinFFFFFFFFFFF/:id", martinFFFFFFFFFFF.ActualizarRecurso);
        
        router.get("/martinFFFFFFFFFFF/:id/edit", martinFFFFFFFFFFF.VistaFormularioEditarRecurso);
        
        module.exports = router;
        