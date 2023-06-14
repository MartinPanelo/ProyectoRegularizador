const router = require("express").Router();
        const testbiencompleto = require("./../controllers/controllertestbiencompleto");
        
        router.get("/testbiencompleto", testbiencompleto.ObtenerTodosLosRecursos);
        
        router.get("/testbiencompleto/create", testbiencompleto.VistaFormularioCrearRecurso);
        
        router.get("/testbiencompleto/:id", testbiencompleto.ObtenerUnSoloRecurso);
        
        router.delete("/testbiencompleto/:id", testbiencompleto.EliminarRecurso);
        
        router.post("/testbiencompleto", testbiencompleto.CrearRecurso);
        
        router.put("/testbiencompleto/:id", testbiencompleto.ActualizarRecurso);
        
        router.get("/testbiencompleto/:id/edit", testbiencompleto.VistaFormularioEditarRecurso);
        
        module.exports = router;
        