const router = require("express").Router();
        const TestCompletisimo = require("./../controllers/controllerTestCompletisimo");
        
        router.get("/TestCompletisimo", TestCompletisimo.ObtenerTodosLosRecursos);
        
        router.get("/TestCompletisimo/create", TestCompletisimo.VistaFormularioCrearRecurso);
        
        router.get("/TestCompletisimo/:id", TestCompletisimo.ObtenerUnSoloRecurso);
        
        router.delete("/TestCompletisimo/:id", TestCompletisimo.EliminarRecurso);
        
        router.post("/TestCompletisimo", TestCompletisimo.CrearRecurso);
        
        router.put("/TestCompletisimo/:id", TestCompletisimo.ActualizarRecurso);
        
        router.get("/TestCompletisimo/:id/edit", TestCompletisimo.VistaFormularioEditarRecurso);
        
        module.exports = router;
        