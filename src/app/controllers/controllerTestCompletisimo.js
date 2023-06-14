const TestCompletisimo = require("../models/modeloTestCompletisimo");
const validadorToken = require("../validacionToken");

const ControllerTestCompletisimo = {
  ObtenerUnSoloRecurso: async (req, res) => {
    let token = req.headers.authorization;
    if (validadorToken(token)) {
      const instancia = await TestCompletisimo.findByPk(req.params.id);
      res.json({ resultado: instancia });
    }
  },

  ObtenerTodosLosRecursos: async (req, res) => {
    let token = req.headers.authorization;
    if (validadorToken(token)) {
      const recursos_instancias = await TestCompletisimo.findAll();
      res.json({ resultado: recursos_instancias });
    }
  },

  EliminarRecurso: async (req, res) => {
    let token = req.headers.authorization;
    if (validadorToken(token)) {
      const resultado = await TestCompletisimo.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (resultado > 0) {
        res.json({ resultado: true });
      }
    }
  },

  VistaFormularioEditarRecurso: async (req, res) => {
    let token = req.headers.authorization;
    if (validadorToken(token)) {
      let instancia = await TestCompletisimo.findByPk(req.params.id);
      console.log(instancia.dataValues);
      let estructura_formulario = `<form id="formEdit"onsubmit="return validadorGenerico()">
                <h1>Editar recurso</h1>`;

      for (let campo in TestCompletisimo.rawAttributes) {
        if (TestCompletisimo.rawAttributes.hasOwnProperty(campo)) {
          let editable;
          campo == "id" ? (editable = "disabled") : (editable = "");
          let tipo;
          TestCompletisimo.rawAttributes[campo].type.constructor.key == "INTEGER" ? (tipo = "number") : console.log("1");
          TestCompletisimo.rawAttributes[campo].type.constructor.key == "STRING" ? (tipo = "text") : console.log("2");
          TestCompletisimo.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? (tipo = "checkbox") : console.log("3");
          TestCompletisimo.rawAttributes[campo].type.constructor.key == "ENUM" ? (tipo = "select") : console.log("4");
/*           estructura_formulario += `<label for="${campo}">${campo}:</label>`
           
          if( TestCompletisimo.rawAttributes[campo].type.constructor.key != "ENUM"){
            
            estructura_formulario +=`<input type="${tipo}" id="${campo}" name="${campo}" value="" ></input>`;

            
            
          }else{
            

            estructura_formulario +=`<select name="${campo}" id="${campo}">`
            TestCompletisimo.rawAttributes.enum.values.forEach(valor => {
              estructura_formulario += `<option value="${valor}">${valor}</option>`
            })
            estructura_formulario += `</select>`
          } */

          estructura_formulario += `<label for="${campo}">${campo}:</label>`
          if( TestCompletisimo.rawAttributes[campo].type.constructor.key != "ENUM"){

           

          let valor;
          let check;
          for (const key in instancia.dataValues) {
            if (campo == key) {
              valor = instancia.dataValues[key];
              
              valor == true ? (check = "checked") : (check = "");
            }
          }

          estructura_formulario +=`<input type="${tipo}" id="${campo}" name="${campo}" value="${valor}" ${editable} ${check}></input>`;
        }else{
          estructura_formulario +=`<select name="${campo}" id="${campo}">`
          TestCompletisimo.rawAttributes.enum.values.forEach(valor => {
            console.log(valor, instancia.dataValues.enum, valor == instancia.dataValues.enum);
            if(instancia.dataValues.enum == valor){
              estructura_formulario += `<option value="${valor}" selected >${valor}</option>`
            }else{
              estructura_formulario += `<option value="${valor}"  >${valor}</option>`
            }
          })
          estructura_formulario += `</select>`
        } 
        }
      }

      estructura_formulario += ` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarEdicion('TestCompletisimo')">Aplicar edicion</button>
            </form>`;

      res.json({ resultado: estructura_formulario });
    }
  },

  ActualizarRecurso: async (req, res) => {
    let token = req.headers.authorization;
    if (validadorToken(token)) {
      const resultado = await TestCompletisimo.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (resultado > 0) {
        res.json({ resultado: true });
      }
    }
  },

  VistaFormularioCrearRecurso: async (req, res) => {
    let token = req.headers.authorization;
    if (validadorToken(token)) {
      let estructura_formulario = `<form id="formAgregar"onsubmit="return validadorGenerico()">
                <h1>Agregar recurso</h1>`;
      console.log(TestCompletisimo.rawAttributes);
      for (let campo in TestCompletisimo.rawAttributes) {
        if (TestCompletisimo.rawAttributes.hasOwnProperty(campo)) {
          if (campo != "id") {
            let tipo;
            TestCompletisimo.rawAttributes[campo].type.constructor.key == "INTEGER" ? (tipo = "number") : console.log("1");
            TestCompletisimo.rawAttributes[campo].type.constructor.key == "STRING" ? (tipo = "text") : console.log("2");
            TestCompletisimo.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? (tipo = "checkbox") : console.log("3");
            TestCompletisimo.rawAttributes[campo].type.constructor.key == "ENUM" ? (tipo = "select") : console.log("4");

            estructura_formulario += `<label for="${campo}">${campo}:</label>`
           
              if( TestCompletisimo.rawAttributes[campo].type.constructor.key != "ENUM"){
                
                estructura_formulario +=`<input type="${tipo}" id="${campo}" name="${campo}" value="" ></input>`;

                
                //estructura_formulario += `<option value="${}"> ${campo}</option>`;
              }else{
                console.log(TestCompletisimo.rawAttributes.enum.values);

                estructura_formulario +=`<select name="${campo}" id="${campo}">`
                TestCompletisimo.rawAttributes.enum.values.forEach(valor => {
                  estructura_formulario += `<option value="${valor}">${valor}</option>`
                })
                estructura_formulario += `</select>`
              }
              
          }
        }
      }

      estructura_formulario += ` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarAgregar('TestCompletisimo')">Agregar</button>
            </form>`;

      res.json({ resultado: estructura_formulario });
    }
  },

  CrearRecurso: async (req, res) => {
    let token = req.headers.authorization;
    if (validadorToken(token)) {
      await TestCompletisimo.create(req.body)
        .then((instanciacreada) => {
          console.log("Registro creado:", instanciacreada);
          res.json({ resultado: true });
        })
        .catch((error) => {
          console.error("Error al crear el registro:", error);
        });
    }
  },
};
module.exports = ControllerTestCompletisimo;
