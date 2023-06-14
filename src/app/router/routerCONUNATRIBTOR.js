const router = require("express").Router();
        const CONUNATRIBTOR = require("./../controllers/controllerCONUNATRIBTOR");
        
        router.get("/CONUNATRIBTOR", CONUNATRIBTOR.ObtenerTodosLosRecursos);
        
        router.get("/CONUNATRIBTOR/create", CONUNATRIBTOR.VistaFormularioCrearRecurso);
        
        router.get("/CONUNATRIBTOR/:id", CONUNATRIBTOR.ObtenerUnSoloRecurso);
        
        router.delete("/CONUNATRIBTOR/:id", CONUNATRIBTOR.EliminarRecurso);
        
        router.post("/CONUNATRIBTOR", CONUNATRIBTOR.CrearRecurso);
        
        router.put("/CONUNATRIBTOR/:id", CONUNATRIBTOR.ActualizarRecurso);
        
        router.get("/CONUNATRIBTOR/:id/edit", CONUNATRIBTOR.VistaFormularioEditarRecurso);
        
        module.exports = router;
        