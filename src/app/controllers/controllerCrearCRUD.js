const usuario = require("../models/usuario");
const recurso = require("../models/recurso");
const permiso = require("../models/permiso");
const connection = require("../conexion");
const fs = require("fs");
const user = [];
const ControllerUsuarios = {
  ObtenerTodosLosUsuarios: async (req, res) => {
    try {
      /* const user = []; */
      user.length = 0;
      const usuarios = await usuario.findAll({ attributes: ["id", "usuario", "contraseña"] });

      for (let i = 0; i < usuarios.length; i++) {
        user.push(usuarios[i].dataValues);
      }
      res.render("index", { results: usuarios });
    } catch (error) {
      console.log(error, "Error al obtener los usuarios");
    }
  },
  CrearRecurso: async (req, res) => {
    try {
      const recu = req.body;
      await recurso.create(recu);
      let per = {
        recurso_nombre: recu.nombre,
      };
      // permiso.create ==> per ={ recurso_nombre - usuario_usuario - consultar - borrar - actualizar - agregar}
       for (const u in user) {
        for (const r in recu) {
          if (r == String(user[u].id)) {
            per.usuario_usuario = user[u].usuario;

            recu[r].includes("consultar") ? (per.consultar = true) : (per.consultar = false);
            recu[r].includes("borrar") ? (per.borrar = true) : (per.borrar = false);
            recu[r].includes("actualizar") ? (per.actualizar = true) : (per.actualizar = false);
            recu[r].includes("agregar") ? (per.agregar = true) : (per.agregar = false);
            console.log(per)
            await permiso.create(per);
          }
        }
      }
      // recurso.create ==> { recurso_nombre}

      let atributos = ``;
      let atributoquery = ``;
      for (const r in recu) {
        if (r.includes("entero")) {
          if (typeof recu[r] === "string") {
            atributos += `    ${recu[r]}: {
          type: Sequelize.INTEGER,
          allowNull: true,
          },
          `;
            atributoquery += `,${recu[r]} INT `;
          } else
            for (const key in recu[r]) {
              atributos += `${recu[r][key]}: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        `;
              atributoquery += `,${recu[r][key]} INT `;
            }
        }
        if (r.includes("varchar")) {
          if (typeof recu[r] === "string") {
            atributos += `${recu[r]}: {
                type: Sequelize.STRING,
                allowNull: true,
              },
              `;
            atributoquery += `,${recu[r]} VARCHAR(50) `;
          } else
            for (const key in recu[r]) {
              atributos += `${recu[r][key]}: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        `;
              atributoquery += `,${recu[r][key]} VARCHAR(50) `;
            }
        }
        if (r.includes("boleano")) {
          if (typeof recu[r] === "string") {
            atributos += `${recu[r]}: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
              },
              `;
            atributoquery += `,${recu[r]} BOOLEAN `;
          } else
            for (const key in recu[r]) {
              atributos += `${recu[r][key]}: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        `;
              atributoquery += `,${recu[r][key]} BOOLEAN `;
            }
        }

        if (r.includes("enum")) {
          if (typeof recu[r] === "string") {
            let valores = recu["valorEnum"].replace(/,/g, "','");
            atributos += `${recu[r]}: {
                type: Sequelize.ENUM('${valores}'),
                allowNull: true,
              },
              `;
            //let valores = recu["valorEnum"].replace(/,/g, "','");
            atributoquery += `,${recu[r]} ENUM ('${valores}')`;
          } else
            for (const key in recu[r]) {
              let valores = recu["valorEnum"][key].replace(/,/g, "','");
              atributos += `${recu[r][key]}: {
            type: Sequelize.ENUM('${valores}'),
            allowNull: true,
        },
        `;
              
              atributoquery += `,${recu[r][key]} ENUM ('${valores}')`;
            }
        }
      }
     
      fs.writeFile(
        "./src/app/controllers/controller" + per.recurso_nombre + ".js",
        `const ${per.recurso_nombre} = require("../models/modelo${per.recurso_nombre}");
        const validadorToken = require("../validacionToken");

        const Controller${per.recurso_nombre} = {
          ObtenerUnSoloRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const instancia = await ${per.recurso_nombre}.findByPk(req.params.id);
            res.json({resultado : instancia});
            }
          },

          ObtenerTodosLosRecursos: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
            const recursos_instancias = await ${per.recurso_nombre}.findAll()
            res.json({resultado : recursos_instancias});
            }
          },
        
          EliminarRecurso: async (req, res) => {
            let token = req.headers.authorization;    
            if(validadorToken(token)){ 
              const resultado = await ${per.recurso_nombre}.destroy({
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
              let instancia = await ${per.recurso_nombre}.findByPk(req.params.id);
         
              let estructura_formulario = 
              \`<form id="formEdit"onsubmit="return validadorGenerico()">
                <div class=header><h1>Editar recurso</h1><button type="button" class="btn-close" aria-label="Close" onclick="cerrarModal()"></button></div>\`
        
        
            for (let campo in ${per.recurso_nombre}.rawAttributes) {
              if (${per.recurso_nombre}.rawAttributes.hasOwnProperty(campo)) {
        
               let editable;
               campo == "id" ? editable = "disabled" : editable = "";
               let tipo;
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
              
               estructura_formulario += 
               \`<label for="\${campo}">\${campo}:</label>\`


               if( ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key != "ENUM"){


                let valor;
                let check;



               for (const key in instancia.dataValues) {      
                if(campo == key){
                  valor = instancia.dataValues[key];
                  valor == true ? (check = "checked") : (check = "");
                }
              }

              estructura_formulario +=\`<input type="\${tipo}" id="\${campo}" name="\${campo}" value="\${valor}" \${editable} \${check}></input>\`
          }else{
            estructura_formulario +=\`<select name="\${campo}" id="\${campo}">\`
            ${per.recurso_nombre}.rawAttributes[${per.recurso_nombre}.rawAttributes[campo].fieldName].values.forEach(valor => {
              if(instancia.dataValues[${per.recurso_nombre}.rawAttributes[campo].fieldName] == valor){
                estructura_formulario += \`<option value="\${valor}" selected >\${valor}</option>\`
              }else{
                estructura_formulario += \`<option value="\${valor}"  >\${valor}</option>\`
              }
            })
            estructura_formulario += \`</select>\`
          }
            }
          }
        
            estructura_formulario +=\` <button type="submit" class="btn btn-danger btn-sm " onclick="AplicarEdicion('${per.recurso_nombre}')">Aplicar edicion</button>
            </form>\`      
        
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          ActualizarRecurso: async (req, res) => {
            
            let token = req.headers.authorization;    
            if(validadorToken(token)){             
              const resultado = await ${per.recurso_nombre}.update(req.body, {
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
              \`<form id="formAgregar"onsubmit="return validadorGenerico()">
                <div class=header><h1>Agregar recurso</h1><button type="button" class="btn-close" aria-label="Close" onclick="cerrarModal()"></button></div>\`
        
        
             
        
        
        
        
            for (let campo in ${per.recurso_nombre}.rawAttributes) {
              if (${per.recurso_nombre}.rawAttributes.hasOwnProperty(campo)) {        
              
               if(campo != "id"){
                 
               
               let tipo;
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "INTEGER" ? tipo="number": console.log("1");
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "STRING" ? tipo = "text": console.log("2");
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "BOOLEAN" ? tipo = "checkbox": console.log("3");
               ${per.recurso_nombre}.rawAttributes[campo].type.constructor.key == "ENUM" ? tipo = "select": console.log("4");
        
        
               estructura_formulario += \`<label for="\${campo}">\${campo}:</label>\`

               if(${per.recurso_nombre}.rawAttributes[campo].type.constructor.key != "ENUM"){

                estructura_formulario +=\`<input type="\${tipo}" id="\${campo}" name="\${campo}" value="" ></input>\`;
              
              }else{

                estructura_formulario +=\`<select name="\${campo}" id="\${campo}">\`

                ${per.recurso_nombre}.rawAttributes[${per.recurso_nombre}.rawAttributes[campo].fieldName].values.forEach(valor => {
                  estructura_formulario += \`<option value="\${valor}">\${valor}</option>\`
                })
                estructura_formulario += \`</select>\`
              }
            }
          }
        }
        estructura_formulario += \`<button type="submit" class="btn btn-danger btn-sm " onclick="AplicarAgregar('${per.recurso_nombre}')">Agregar</button>
        </form>\`;
             
              res.json({ resultado: estructura_formulario }); 
            
            }
          },

          CrearRecurso : async (req, res) => {
           
              let token = req.headers.authorization;    
              if(validadorToken(token)){ 
              
              await ${per.recurso_nombre}.create(req.body)
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
          module.exports = Controller${per.recurso_nombre};
        `
        ,function (err) {
          if (err) {
            return console.log(err);
          }

          console.log("El controlador fue creado correctamente");
        }
      ); 

      fs.writeFile(
        "./src/app/models/modelo" + per.recurso_nombre + ".js",
        `const Sequelize = require("sequelize");
        const sequelize = require("./../conexion");
    const ${per.recurso_nombre} = sequelize.define("${per.recurso_nombre}", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
            ` +
          atributos +
          `}, {
            freezeTableName: true,
            timestamps: false,
            initialAutoIncrement: 1000,
          });
         
          module.exports = ${per.recurso_nombre};`,

        function (err) {
          if (err) {
            return console.log(err);
          }

          console.log("El modelo fue creado correctamente");
        }
      );
    fs.writeFile(
        "./src/app/router/router" + per.recurso_nombre + ".js",
        `const router = require("express").Router();
        const ${per.recurso_nombre} = require("./../controllers/controller${per.recurso_nombre}");
        
        router.get("/${per.recurso_nombre}", ${per.recurso_nombre}.ObtenerTodosLosRecursos);
        
        router.get("/${per.recurso_nombre}/create", ${per.recurso_nombre}.VistaFormularioCrearRecurso);
        
        router.get("/${per.recurso_nombre}/:id", ${per.recurso_nombre}.ObtenerUnSoloRecurso);
        
        router.delete("/${per.recurso_nombre}/:id", ${per.recurso_nombre}.EliminarRecurso);
        
        router.post("/${per.recurso_nombre}", ${per.recurso_nombre}.CrearRecurso);
        
        router.put("/${per.recurso_nombre}/:id", ${per.recurso_nombre}.ActualizarRecurso);
        
        router.get("/${per.recurso_nombre}/:id/edit", ${per.recurso_nombre}.VistaFormularioEditarRecurso);
        
        module.exports = router;
        `,

        function (err) {
          if (err) {
            return console.log(err);
          }

          console.log("El router fue creado correctamente");
        }
      ); 
      (async () => {
        try {
      const [results, metadata] = await connection.query(
        `CREATE TABLE  ${per.recurso_nombre} (id INTEGER primary KEY AUTO_INCREMENT${atributoquery})`
      ); console.log('Tabla creada exitosamente');
    } catch (error) {
      console.error('Error al crear la tabla:', error);
    }
  })();
      /* console.log(results); */
     // res.render("index", {results: user, operacion: "Recurso creado" })
      res.redirect("/generarCRUD");
    } catch (error) {
/*       console.log("error",error);
      console.log("error",error.original.errno); */
      
        res.render("index", {results: user, operacion: "Se produjo un error"+error })

     //res.render("index", { results: user, operacion: error });
    }
  },
};
module.exports = ControllerUsuarios;
