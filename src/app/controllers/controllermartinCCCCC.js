const martinCCCCC = require("../models/modelomartinCCCCC");
        const validadorToken = require("../validacionToken");

        const ControllermartinCCCCC = {
          ObtenerUnSoloRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const instancia = await martinCCCCC.findByPk(req.params.id);
            res.json({resultado : instancia});
            }
          },

          ObtenerTodosLosRecursos: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const recursos_instancias = await martinCCCCC.findAll()
            res.json({resultado : recursos_instancias});
            }
          },
        
          EliminarRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
              const resultado = await martinCCCCC.destroy({
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
              let instancia = await martinCCCCC.findByPk(req.params.id);
         
                 let estructura_formulario = 
              `<form id="formEdit"onsubmit="return validadorGenerico()">
                <h1>Editar recurso</h1>`
        
            for (let campo in martinCCCCC.rawAttributes) {
              if (martinCCCCC.rawAttributes.hasOwnProperty(campo)) {
        
               let editable;
               campo == "id" ? editable = "disabled" : editable = "";
               let tipo;
               martinCCCCC.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               martinCCCCC.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               martinCCCCC.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               martinCCCCC.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
              
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
        
            estructura_formulario +=` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarEdicion('martinCCCCC')">Aplicar edicion</button>
            </form>`      
        
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          ActualizarRecurso: async (req, res) => {
            
            let token = req.headers.authorization;    
            if(validadorToken(token)){             
              const resultado = await martinCCCCC.update(req.body, {
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
        
             
        
        
        
        
            for (let campo in martinCCCCC.rawAttributes) {
              if (martinCCCCC.rawAttributes.hasOwnProperty(campo)) {        
              
               if(campo != "id"){
                 
               
               let tipo;
               martinCCCCC.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               martinCCCCC.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               martinCCCCC.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               martinCCCCC.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
        
        
               estructura_formulario += 
                `<label for="${campo}">${campo}:</label>
              <input type="${tipo}" id="${campo}" name="${campo}" value="" ></input>`
               }
             
        
              }
            }
        
            estructura_formulario +=` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarAgregar('martinCCCCC')">Agregar</button>
            </form>`
        
             
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          CrearRecurso : async (req, res) => {
           
              let token = req.headers.authorization;    
              if(validadorToken(token)){ 
              
              await martinCCCCC.create(req.body)
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
          module.exports = ControllermartinCCCCC;
        