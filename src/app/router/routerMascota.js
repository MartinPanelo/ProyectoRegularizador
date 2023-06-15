const router = require("express").Router();
        const Mascota = require("./../controllers/controllerMascota");
        
        router.get("/Mascota", Mascota.ObtenerTodosLosRecursos);
        
        router.get("/Mascota/create", Mascota.VistaFormularioCrearRecurso);
        
        router.get("/Mascota/:id", Mascota.ObtenerUnSoloRecurso);
        
        router.delete("/Mascota/:id", Mascota.EliminarRecurso);
        
        router.post("/Mascota", Mascota.CrearRecurso);
        
        router.put("/Mascota/:id", Mascota.ActualizarRecurso);
        
        router.get("/Mascota/:id/edit", Mascota.VistaFormularioEditarRecurso);
        
        module.exports = router;
        