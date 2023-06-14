const router = require("express").Router();
        const RodrigoMartin = require("./../controllers/controllerRodrigoMartin");
        
        router.get("/RodrigoMartin", RodrigoMartin.ObtenerTodosLosRecursos);
        
        router.get("/RodrigoMartin/create", RodrigoMartin.VistaFormularioCrearRecurso);
        
        router.get("/RodrigoMartin/:id", RodrigoMartin.ObtenerUnSoloRecurso);
        
        router.delete("/RodrigoMartin/:id", RodrigoMartin.EliminarRecurso);
        
        router.post("/RodrigoMartin", RodrigoMartin.CrearRecurso);
        
        router.put("/RodrigoMartin/:id", RodrigoMartin.ActualizarRecurso);
        
        router.get("/RodrigoMartin/:id/edit", RodrigoMartin.VistaFormularioEditarRecurso);
        
        module.exports = router;
        