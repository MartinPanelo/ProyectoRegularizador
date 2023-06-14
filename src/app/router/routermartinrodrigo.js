const router = require("express").Router();
        const martinrodrigo = require("./../controllers/controllermartinrodrigo");
        
        router.get("/martinrodrigo", martinrodrigo.ObtenerTodosLosRecursos);
        
        router.get("/martinrodrigo/create", martinrodrigo.VistaFormularioCrearRecurso);
        
        router.get("/martinrodrigo/:id", martinrodrigo.ObtenerUnSoloRecurso);
        
        router.delete("/martinrodrigo/:id", martinrodrigo.EliminarRecurso);
        
        router.post("/martinrodrigo", martinrodrigo.CrearRecurso);
        
        router.put("/martinrodrigo/:id", martinrodrigo.ActualizarRecurso);
        
        router.get("/martinrodrigo/:id/edit", martinrodrigo.VistaFormularioEditarRecurso);
        
        module.exports = router;
        