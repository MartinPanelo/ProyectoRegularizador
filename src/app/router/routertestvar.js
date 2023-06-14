const router = require("express").Router();
        const testvar = require("./../controllers/controllertestvar");
        
        router.get("/testvar", testvar.ObtenerTodosLosRecursos);
        
        router.get("/testvar/create", testvar.VistaFormularioCrearRecurso);
        
        router.get("/testvar/:id", testvar.ObtenerUnSoloRecurso);
        
        router.delete("/testvar/:id", testvar.EliminarRecurso);
        
        router.post("/testvar", testvar.CrearRecurso);
        
        router.put("/testvar/:id", testvar.ActualizarRecurso);
        
        router.get("/testvar/:id/edit", testvar.VistaFormularioEditarRecurso);
        
        module.exports = router;
        