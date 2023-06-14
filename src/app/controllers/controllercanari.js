const canari = require("../models/modelocanari");
const validadorToken = require("../validacionToken");


const Controllercanari = {
  ObtenerUnSoloRecurso: async (req, res) => {
    console.log("AAAAAAAAAAAAAAAAAAAaa")
    let token = req.headers.authorization;    
    if(validadorToken(token)){ 
    const instancia = await canari.findByPk(req.params.id);
    res.json({resultado : instancia});
    }
  },
  
  ObtenerTodosLosRecursos: async (req, res) => {
    console.log("BBBBBBBBBBBBBBBBBBBBBBB")
/*     usuario.findOne({ where: { usuario: datosLogeo.username } });
 */    let token = req.headers.authorization;    
    if(validadorToken(token)){ 
    const recursos_instancias = await canari.findAll()
   // const recursos_instancias = await permiso.findAll();
//const permisos = await permiso.findAll( {attributes: ['consultar', 'borrar', 'actualizar', 'agregar'], where : {recurso_nombre: "canari"}});

res.json({resultado : recursos_instancias});

    }

/*     try {

      res.json({resultado : "listado de instancias canari"});

      const recursos = await canari.findAll();
      res.render("userSpace", { resultado: recursos });
    } catch (error) {
      console.log(error, "Error al obtener los recursos");
    } */
  },
  EliminarRecurso: async (req, res) => {
    console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCc")
    let token = req.headers.authorization;    
    if(validadorToken(token)){ 
    /*   console.log(req) */
      const resultado = await canari.destroy({
        where: {
          id: req.params.id
        }
      })
      if(resultado > 0){
        res.json({resultado : true});
      }
  }
},
  VistaFormularioEditarRecurso: async (req, res) => {
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDD")
    let token = req.headers.authorization;    
    if(validadorToken(token)){ 

      let instancia = await canari.findByPk(req.params.id);
 /*      console.log(instancia.dataValues); */
 
         let estructura_formulario = 
      `<form id="formEdit"onsubmit="return validadorGenerico()">
        <h1>Editar recurso</h1>`

     




    for (let campo in canari.rawAttributes) {
      if (canari.rawAttributes.hasOwnProperty(campo)) {
/*         console.log(campo,canari.rawAttributes[campo].type.constructor.key);
 */

       let editable;
       campo == "id" ? editable = "disabled" : editable = "";
       let tipo;
       canari.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
       canari.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
       canari.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
       canari.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
      

       let valor;
       for (const key in instancia.dataValues) {      
       /*  console.log(key,instancia.dataValues[key]);     */     
        if(campo == key){
          valor = instancia.dataValues[key];
        }
      }


       estructura_formulario += 
        `<label for="${campo}">${campo}:</label>
      <input type="${tipo}" id="${campo}" name="${campo}" value="${valor}" ${editable}></input>`

     

      }
    }

    estructura_formulario +=` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarEdicion('canari')">Aplicar edicion</button>
    </form>`


      res.json({ resultado: estructura_formulario }); 
    
    }
  },
  ActualizarRecurso: async (req, res) => {
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEE")
    //const newData =JSON.stringify(req.body);
    //console.log("estoy de actualizacion",req.params.id,newData)
    let token = req.headers.authorization;    
    if(validadorToken(token)){ 
    /*   console.log(req) */
      const resultado = await canari.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      if(resultado > 0){

        res.json({resultado : true});
      }
    }
  },
  VistaFormularioCrearRecurso: async (req, res) => {
    console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFF")
    let token = req.headers.authorization;    
    if(validadorToken(token)){ 

    
 /*      console.log(instancia.dataValues); */
 
         let estructura_formulario = 
      `<form id="formAgregar"onsubmit="return validadorGenerico()">
        <h1>Agregar recurso</h1>`

     




    for (let campo in canari.rawAttributes) {
      if (canari.rawAttributes.hasOwnProperty(campo)) {
/*         console.log(campo,canari.rawAttributes[campo].type.constructor.key);
 */

      
       if(campo != "id"){
         
       
       let tipo;
       canari.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
       canari.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
       canari.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
       canari.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");


       estructura_formulario += 
        `<label for="${campo}">${campo}:</label>
      <input type="${tipo}" id="${campo}" name="${campo}" value="" ></input>`
       }
     

      }
    }

    estructura_formulario +=` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarAgregar('canari')">Agregar</button>
    </form>`

     
      res.json({ resultado: estructura_formulario }); 
    
    }
  },
  CrearRecurso : async (req, res) => {
  //  const newData =JSON.stringify(req.body);
    console.log(req.body)

    let token = req.headers.authorization;    
    if(validadorToken(token)){ 
    /*   console.log(req) */
    await canari.create(req.body)
    .then((instanciacreada) => {
      console.log('Registro creado:', instanciacreada);
      res.json( {resultado : true})
    })
    .catch((error) => {
      console.error('Error al crear el registro:', error);
    });
    }
  }

};
module.exports = Controllercanari;
