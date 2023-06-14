const router = require("express").Router();
        const martinQQQQQ = require("./../controllers/controllermartinQQQQQ");
        
        router.get("/martinQQQQQ", martinQQQQQ.ObtenerTodosLosRecursos);
        
        router.get("/martinQQQQQ/create", martinQQQQQ.VistaFormularioCrearRecurso);
        
        router.get("/martinQQQQQ/:id", martinQQQQQ.ObtenerUnSoloRecurso);
        
        router.delete("/martinQQQQQ/:id", martinQQQQQ.EliminarRecurso);
        
        router.post("/martinQQQQQ", martinQQQQQ.CrearRecurso);
        
        router.put("/martinQQQQQ/:id", martinQQQQQ.ActualizarRecurso);
        
        router.get("/martinQQQQQ/:id/edit", martinQQQQQ.VistaFormularioEditarRecurso);
        
        module.exports = router;
        