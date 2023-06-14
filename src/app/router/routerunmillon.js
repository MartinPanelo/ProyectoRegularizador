const router = require("express").Router();
        const unmillon = require("./../controllers/controllerunmillon");
        
        router.get("/unmillon", unmillon.ObtenerTodosLosRecursos);
        
        router.get("/unmillon/create", unmillon.VistaFormularioCrearRecurso);
        
        router.get("/unmillon/:id", unmillon.ObtenerUnSoloRecurso);
        
        router.delete("/unmillon/:id", unmillon.EliminarRecurso);
        
        router.post("/unmillon", unmillon.CrearRecurso);
        
        router.put("/unmillon/:id", unmillon.ActualizarRecurso);
        
        router.get("/unmillon/:id/edit", unmillon.VistaFormularioEditarRecurso);
        
        module.exports = router;
        