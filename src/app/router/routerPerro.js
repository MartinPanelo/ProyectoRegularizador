const router = require("express").Router();
        const Perro = require("./../controllers/controllerPerro");
        
        router.get("/Perro", Perro.ObtenerTodosLosRecursos);
        
        router.get("/Perro/create", Perro.VistaFormularioCrearRecurso);
        
        router.get("/Perro/:id", Perro.ObtenerUnSoloRecurso);
        
        router.delete("/Perro/:id", Perro.EliminarRecurso);
        
        router.post("/Perro", Perro.CrearRecurso);
        
        router.put("/Perro/:id", Perro.ActualizarRecurso);
        
        router.get("/Perro/:id/edit", Perro.VistaFormularioEditarRecurso);
        
        module.exports = router;
        