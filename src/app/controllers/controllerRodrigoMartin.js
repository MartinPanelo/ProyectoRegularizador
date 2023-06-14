const RodrigoMartin = require("../models/modeloRodrigoMartin");
        const validadorToken = require("../validacionToken");

        const ControllerRodrigoMartin = {
          ObtenerUnSoloRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const instancia = await RodrigoMartin.findByPk(req.params.id);
            res.json({resultado : instancia});
            }
          },

          ObtenerTodosLosRecursos: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const recursos_instancias = await RodrigoMartin.findAll()
            res.json({resultado : recursos_instancias});
            }
          },
        
          EliminarRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
              const resultado = await RodrigoMartin.destroy({
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
              let instancia = await RodrigoMartin.findByPk(req.params.id);
         
                 let estructura_formulario = 
              `<form id="formEdit"onsubmit="return validadorGenerico()">
                <h1>Editar recurso</h1>`
        
            for (let campo in RodrigoMartin.rawAttributes) {
              if (RodrigoMartin.rawAttributes.hasOwnProperty(campo)) {
        
               let editable;
               campo == "id" ? editable = "disabled" : editable = "";
               let tipo;
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
              
               let valor;
               for (const key in instancia.dataValues) {      
                if(campo == key){
                  valor = instancia.dataValues[key];
                }
              }
                
               estructura_formulario += 
                `<label for="${campo}">${campo}:</label>
              <input type="${tipo}" id="${campo}" name="${campo}" value="${valor}" ${editable}></input>`
          }
            }
        
            estructura_formulario +=` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarEdicion('RodrigoMartin')">Aplicar edicion</button>
            </form>`      
        
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          ActualizarRecurso: async (req, res) => {
            
            let token = req.headers.authorization;    
            if(validadorToken(token)){             
              const resultado = await RodrigoMartin.update(req.body, {
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
        
             
        
        
        
        
            for (let campo in RodrigoMartin.rawAttributes) {
              if (RodrigoMartin.rawAttributes.hasOwnProperty(campo)) {        
              
               if(campo != "id"){
                 
               
               let tipo;
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               RodrigoMartin.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
        
        
               estructura_formulario += 
                `<label for="${campo}">${campo}:</label>
              <input type="${tipo}" id="${campo}" name="${campo}" value="" ></input>`
               }
             
        
              }
            }
        
            estructura_formulario +=` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarAgregar('RodrigoMartin')">Agregar</button>
            </form>`
        
             
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          CrearRecurso : async (req, res) => {
           
              let token = req.headers.authorization;    
              if(validadorToken(token)){ 
              
              await RodrigoMartin.create(req.body)
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
          module.exports = ControllerRodrigoMartin;
        