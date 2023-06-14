const router = require("express").Router();
        const tstinh = require("./../controllers/controllertstinh");
        
        router.get("/tstinh", tstinh.ObtenerTodosLosRecursos);
        
        router.get("/tstinh/create", tstinh.VistaFormularioCrearRecurso);
        
        router.get("/tstinh/:id", tstinh.ObtenerUnSoloRecurso);
        
        router.delete("/tstinh/:id", tstinh.EliminarRecurso);
        
        router.post("/tstinh", tstinh.CrearRecurso);
        
        router.put("/tstinh/:id", tstinh.ActualizarRecurso);
        
        router.get("/tstinh/:id/edit", tstinh.VistaFormularioEditarRecurso);
        
        module.exports = router;
        