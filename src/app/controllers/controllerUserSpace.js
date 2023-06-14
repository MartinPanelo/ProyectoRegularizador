const permiso = require("../models/permiso");
const validadorToken = require("../validacionToken");
const ControllerUserSpace = {
   CargarVistaUserSpace: async (req, res) => {
    res.render("userSpace")    
  },

  
  cargarRecursos: async (req, res) => {
     let token = req.headers.authorization;    
    console.log(token,"soy el token del backend");
    if(validadorToken(token)){ 
      const usuarioLogeado = validadorToken(token);
      console.log(usuarioLogeado)
    const recursos = await permiso.findAll({
      /* attributes: ['id', 'recurso_nombre', 'consultar'],*/
      where: {
        usuario_usuario: usuarioLogeado.LoginUsuario
      } 
    })
    res.json({resultado : recursos});
   }} 

}


module.exports = ControllerUserSpace;
/* console.log(req)
console.log(res.user)
const recursos = await permiso.findAll();
  console.log(recursos); 
res.render("userSpace", { resultado: recursos }); */