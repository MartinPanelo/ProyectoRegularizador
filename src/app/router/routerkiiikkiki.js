const router = require("express").Router();
        const kiiikkiki = require("./../controllers/controllerkiiikkiki");
        
        router.get("/kiiikkiki", kiiikkiki.ObtenerTodosLosRecursos);
        
        router.get("/kiiikkiki/create", kiiikkiki.VistaFormularioCrearRecurso);
        
        router.get("/kiiikkiki/:id", kiiikkiki.ObtenerUnSoloRecurso);
        
        router.delete("/kiiikkiki/:id", kiiikkiki.EliminarRecurso);
        
        router.post("/kiiikkiki", kiiikkiki.CrearRecurso);
        
        router.put("/kiiikkiki/:id", kiiikkiki.ActualizarRecurso);
        
        router.get("/kiiikkiki/:id/edit", kiiikkiki.VistaFormularioEditarRecurso);
        
        module.exports = router;
        