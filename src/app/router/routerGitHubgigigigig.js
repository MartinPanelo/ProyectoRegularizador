const router = require("express").Router();
        const GitHubgigigigig = require("./../controllers/controllerGitHubgigigigig");
        
        router.get("/GitHubgigigigig", GitHubgigigigig.ObtenerTodosLosRecursos);
        
        router.get("/GitHubgigigigig/create", GitHubgigigigig.VistaFormularioCrearRecurso);
        
        router.get("/GitHubgigigigig/:id", GitHubgigigigig.ObtenerUnSoloRecurso);
        
        router.delete("/GitHubgigigigig/:id", GitHubgigigigig.EliminarRecurso);
        
        router.post("/GitHubgigigigig", GitHubgigigigig.CrearRecurso);
        
        router.put("/GitHubgigigigig/:id", GitHubgigigigig.ActualizarRecurso);
        
        router.get("/GitHubgigigigig/:id/edit", GitHubgigigigig.VistaFormularioEditarRecurso);
        
        module.exports = router;
        