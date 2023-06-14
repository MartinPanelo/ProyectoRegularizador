const router = require("express").Router();
        const GitHublololo = require("./../controllers/controllerGitHublololo");
        
        router.get("/GitHublololo", GitHublololo.ObtenerTodosLosRecursos);
        
        router.get("/GitHublololo/create", GitHublololo.VistaFormularioCrearRecurso);
        
        router.get("/GitHublololo/:id", GitHublololo.ObtenerUnSoloRecurso);
        
        router.delete("/GitHublololo/:id", GitHublololo.EliminarRecurso);
        
        router.post("/GitHublololo", GitHublololo.CrearRecurso);
        
        router.put("/GitHublololo/:id", GitHublololo.ActualizarRecurso);
        
        router.get("/GitHublololo/:id/edit", GitHublololo.VistaFormularioEditarRecurso);
        
        module.exports = router;
        