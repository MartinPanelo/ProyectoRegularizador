const router = require("express").Router();
        const Edificio = require("./../controllers/controllerEdificio");
        
        router.get("/Edificio", Edificio.ObtenerTodosLosRecursos);
        
        router.get("/Edificio/create", Edificio.VistaFormularioCrearRecurso);
        
        router.get("/Edificio/:id", Edificio.ObtenerUnSoloRecurso);
        
        router.delete("/Edificio/:id", Edificio.EliminarRecurso);
        
        router.post("/Edificio", Edificio.CrearRecurso);
        
        router.put("/Edificio/:id", Edificio.ActualizarRecurso);
        
        router.get("/Edificio/:id/edit", Edificio.VistaFormularioEditarRecurso);
        
        module.exports = router;
        