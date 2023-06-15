const Perro = require("../models/modeloPerro");
        const validadorToken = require("../validacionToken");

        const ControllerPerro = {
          ObtenerUnSoloRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const instancia = await Perro.findByPk(req.params.id);
            res.json({resultado : instancia});
            }
          },

          ObtenerTodosLosRecursos: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const recursos_instancias = await Perro.findAll()
            res.json({resultado : recursos_instancias});
            }
          },
        
          EliminarRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
              const resultado = await Perro.destroy({
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
            let token = req.headers.authorization;    
            if(validadorToken(token)){         
              let instancia = await Perro.findByPk(req.params.id);
         
                 let estructura_formulario = 
              `<form id="formEdit"onsubmit="return validadorGenerico()">
                <h1>Editar recurso</h1>`
        
            for (let campo in Perro.rawAttributes) {
              if (Perro.rawAttributes.hasOwnProperty(campo)) {
        
               let editable;
               campo == "id" ? editable = "disabled" : editable = "";
               let tipo;
               Perro.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               Perro.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               Perro.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               Perro.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
              
               estructura_formulario += 
               `<label for="${campo}">${campo}:</label>`


               if( Perro.rawAttributes[campo].type.constructor.key != "ENUM"){


                let valor;
                let check;



               for (const key in instancia.dataValues) {      
                if(campo == key){
                  valor = instancia.dataValues[key];
                  valor == true ? (check = "checked") : (check = "");
                }
              }

              estructura_formulario +=`<input type="${tipo}" id="${campo}" name="${campo}" value="${valor}" ${editable} ${check}></input>`
          }else{
            estructura_formulario +=`<select name="${campo}" id="${campo}">`
            Perro.rawAttributes[Perro.rawAttributes[campo].fieldName].values.forEach(valor => {
              if(instancia.dataValues[Perro.rawAttributes[campo].fieldName] == valor){
                estructura_formulario += `<option value="${valor}" selected >${valor}</option>`
              }else{
                estructura_formulario += `<option value="${valor}"  >${valor}</option>`
              }
            })
            estructura_formulario += `</select>`
          }
            }
          }
        
            estructura_formulario +=` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarEdicion('Perro')">Aplicar edicion</button>
            </form>`      
        
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          ActualizarRecurso: async (req, res) => {
            
            let token = req.headers.authorization;    
            if(validadorToken(token)){             
              const resultado = await Perro.update(req.body, {
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
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
        
            
       
         
                 let estructura_formulario = 
              `<form id="formAgregar"onsubmit="return validadorGenerico()">
                <h1>Agregar recurso</h1>`
        
             
        
        
        
        
            for (let campo in Perro.rawAttributes) {
              if (Perro.rawAttributes.hasOwnProperty(campo)) {        
              
               if(campo != "id"){
                 
               
               let tipo;
               Perro.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               Perro.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               Perro.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               Perro.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
        
        
               estructura_formulario += `<label for="${campo}">${campo}:</label>`

               if(Perro.rawAttributes[campo].type.constructor.key != "ENUM"){

                estructura_formulario +=`<input type="${tipo}" id="${campo}" name="${campo}" value="" ></input>`;
              
              }else{

                estructura_formulario +=`<select name="${campo}" id="${campo}">`

                Perro.rawAttributes[Perro.rawAttributes[campo].fieldName].values.forEach(valor => {
                  estructura_formulario += `<option value="${valor}">${valor}</option>`
                })
                estructura_formulario += `</select>`
              }
            }
          }
        }
        estructura_formulario += `<button type="submit" class="btn btn-danger btn-sm " onclick="AplicarAgregar('Perro')">Agregar</button>
        </form>`;
             
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          CrearRecurso : async (req, res) => {
           
              let token = req.headers.authorization;    
              if(validadorToken(token)){ 
              
              await Perro.create(req.body)
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
          module.exports = ControllerPerro;
        