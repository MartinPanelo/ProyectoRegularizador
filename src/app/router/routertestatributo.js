const router = require("express").Router();
        const testatributo = require("./../controllers/controllertestatributo");
        
        router.get("/testatributo", testatributo.ObtenerTodosLosRecursos);
        
        router.get("/testatributo/create", testatributo.VistaFormularioCrearRecurso);
        
        router.get("/testatributo/:id", testatributo.ObtenerUnSoloRecurso);
        
        router.delete("/testatributo/:id", testatributo.EliminarRecurso);
        
        router.post("/testatributo", testatributo.CrearRecurso);
        
        router.put("/testatributo/:id", testatributo.ActualizarRecurso);
        
        router.get("/testatributo/:id/edit", testatributo.VistaFormularioEditarRecurso);
        
        module.exports = router;
        