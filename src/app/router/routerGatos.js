const router = require("express").Router();
        const Gatos = require("./../controllers/controllerGatos");
        
        router.get("/Gatos", Gatos.ObtenerTodosLosRecursos);
        
        router.get("/Gatos/create", Gatos.VistaFormularioCrearRecurso);
        
        router.get("/Gatos/:id", Gatos.ObtenerUnSoloRecurso);
        
        router.delete("/Gatos/:id", Gatos.EliminarRecurso);
        
        router.post("/Gatos", Gatos.CrearRecurso);
        
        router.put("/Gatos/:id", Gatos.ActualizarRecurso);
        
        router.get("/Gatos/:id/edit", Gatos.VistaFormularioEditarRecurso);
        
        module.exports = router;
        