const router = require("express").Router();
        const test = require("./../controllers/controllertest");
        
        router.get("/test", test.ObtenerTodosLosRecursos);
        
        router.get("/test/create", test.VistaFormularioCrearRecurso);
        
        router.get("/test/:id", test.ObtenerUnSoloRecurso);
        
        router.delete("/test/:id", test.EliminarRecurso);
        
        router.post("/test", test.CrearRecurso);
        
        router.put("/test/:id", test.ActualizarRecurso);
        
        router.get("/test/:id/edit", test.VistaFormularioEditarRecurso);
        
        module.exports = router;
        