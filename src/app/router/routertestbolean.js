const router = require("express").Router();
        const testbolean = require("./../controllers/controllertestbolean");
        
        router.get("/testbolean", testbolean.ObtenerTodosLosRecursos);
        
        router.get("/testbolean/create", testbolean.VistaFormularioCrearRecurso);
        
        router.get("/testbolean/:id", testbolean.ObtenerUnSoloRecurso);
        
        router.delete("/testbolean/:id", testbolean.EliminarRecurso);
        
        router.post("/testbolean", testbolean.CrearRecurso);
        
        router.put("/testbolean/:id", testbolean.ActualizarRecurso);
        
        router.get("/testbolean/:id/edit", testbolean.VistaFormularioEditarRecurso);
        
        module.exports = router;
        