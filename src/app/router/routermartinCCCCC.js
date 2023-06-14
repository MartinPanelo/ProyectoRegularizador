const router = require("express").Router();
        const martinCCCCC = require("./../controllers/controllermartinCCCCC");
        
        router.get("/martinCCCCC", martinCCCCC.ObtenerTodosLosRecursos);
        
        router.get("/martinCCCCC/create", martinCCCCC.VistaFormularioCrearRecurso);
        
        router.get("/martinCCCCC/:id", martinCCCCC.ObtenerUnSoloRecurso);
        
        router.delete("/martinCCCCC/:id", martinCCCCC.EliminarRecurso);
        
        router.post("/martinCCCCC", martinCCCCC.CrearRecurso);
        
        router.put("/martinCCCCC/:id", martinCCCCC.ActualizarRecurso);
        
        router.get("/martinCCCCC/:id/edit", martinCCCCC.VistaFormularioEditarRecurso);
        
        module.exports = router;
        