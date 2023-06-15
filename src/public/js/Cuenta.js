

let formRegistro = document.forms["formRegistro"];
function validarCuentaregistro() {
  flag = true;

  if (!formRegistro["username"].value.match("^@[a-zA-Z0-9\\-_]*$") || formRegistro["username"].value == "") {
    flag = false;

    formRegistro["username"].classList.add("is-invalid");
    formRegistro["username"].classList.remove("is-valid");
  } else {
    formRegistro["username"].classList.add("is-valid");
    formRegistro["username"].classList.remove("is-invalid");
  }
  if (!formRegistro["password"].value.match("^[a-zA-Z0-9]{6,10}$") || formRegistro["password"].value == "") {
    flag = false;

    formRegistro["password"].classList.add("is-invalid");
    formRegistro["password"].classList.remove("is-valid");
  } else {
    formRegistro["password"].classList.add("is-valid");
    formRegistro["password"].classList.remove("is-invalid");
  }

  return flag;
}
const formlogeo = document.getElementById("formCuenta");
formlogeo.addEventListener("submit", async (e) => {
  e.preventDefault();
  flag = true;

  if (!formCuenta["username"].value.match("^@[a-zA-Z0-9\\-_]*$") || formCuenta["username"].value == "") {
    flag = false;

    formCuenta["username"].classList.add("is-invalid");
    formCuenta["username"].classList.remove("is-valid");
  } else {
    formCuenta["username"].classList.add("is-valid");
    formCuenta["username"].classList.remove("is-invalid");
  }
  if (!formCuenta["password"].value.match("^[a-zA-Z0-9]{6,10}$") || formCuenta["password"].value == "") {
    flag = false;

    formCuenta["password"].classList.add("is-invalid");
    formCuenta["password"].classList.remove("is-valid");
  } else {
    formCuenta["password"].classList.add("is-valid");
    formCuenta["password"].classList.remove("is-invalid");
  }
  if (flag) {
    try {
      const res = await fetch("http://localhost:8000/LogearUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formCuenta["username"].value,
          password: formCuenta["password"].value,
        }),
      });
      console.log(res.ok, res.status);
      

      const { token,resultado } = await res.json();


      const msg = document.getElementById("cartel");
      msg.innerHTML = resultado;
      if(token != null){
        localStorage.setItem("token", token);

        
       
      }
      



      



      
    } catch (error) {
      console.log(error);
    }
  
}});



  async function ListarRecursos() {
  while (document.getElementById('Tbodyrecursos').firstChild) {
    document.getElementById('Tbodyrecursos').removeChild(document.getElementById('Tbodyrecursos').firstChild);
  }
  const resultado = await mandarToken("CargarRecursos")

  if(resultado != null){
  for (let i = 0; i < resultado.length; i++) {
    const recurso = resultado[i];

  
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope","row");
    th.textContent = recurso["id"];
    tr.appendChild(th);
    let tdr = document.createElement("td");
    tdr.textContent = recurso["recurso_nombre"];
    tr.appendChild(tdr);
    document.getElementById('Tbodyrecursos').appendChild(tr);

  for(let key in recurso){
   /*  console.log(key,recurso[key]); */

    if(recurso[key] == true && key == "consultar"){
      let tdc = document.createElement("td");
      tdc.innerHTML = `<button type="button" class="btn btn-primary btn-sm " onclick="ConsultarRecurso('${recurso["recurso_nombre"]}')">Consultar</button>`;
      tr.appendChild(tdc);
      
    }
    if(recurso[key] == true && key == "agregar"){
      let tdc = document.createElement("td");
      tdc.innerHTML = `<button type="button" class="btn btn-success btn-sm " onclick="AgregarItem('${recurso["recurso_nombre"]}/create')">agregar</button>`;
      tr.appendChild(tdc);
      
    }

    
    
  }

  /* <i class="fa-solid fa-square-check" style="color: #31a533;"></i> 
   let tddelete = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("name",recurso[key].id);
    input.setAttribute("value","borrar");
    tddelete.appendChild(input);
    tr.appendChild(tddelete);
   */







}
  }
   
};
async function ConsultarRecurso(recurso_nombre){

  const resultado = await mandarToken(recurso_nombre); //de la tabla canari id awd
  crearTablaInstancias(resultado,recurso_nombre)
}


async function crearTablaInstancias(datos,recurso_nombre) {
  

  while (document.getElementById('tablehd').firstChild) {
    document.getElementById('tablehd').removeChild(document.getElementById('tablehd').firstChild);
  }
  while (document.getElementById('TbodyInstancias').firstChild) {
  document.getElementById('TbodyInstancias').removeChild(document.getElementById('TbodyInstancias').firstChild);
  }
  const resultado = datos; //de la tabla canari id awd
  const permisos = await mandarToken("CargarRecursos")
  console.log(permisos)
  let permisoRecurso = permisos.find(element => element.recurso_nombre == recurso_nombre);
    
   console.log(permisoRecurso) 

  if(resultado != null){   
    nombreRecurso = document.getElementById("nombreRecurso");
    nombreRecurso.innerHTML = recurso_nombre



    const inst = resultado[0];
    let tr = document.createElement("tr");
    for (const key in inst) {
    //  console.log(key, inst[key]);
      let th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.textContent = key;      
      tr.appendChild(th);
      
     
    }
    document.getElementById("tablehd").appendChild(tr);


    


    for(const item in resultado){
     
       /*  console.log(item, resultado[item]); */
        let tr = document.createElement("tr");
        for(const key in resultado[item]){
        /*   console.log(key, resultado[item][key]); */

          
          if(key == "id"){
          let th = document.createElement("th");
          th.setAttribute("scope", "col");
          th.textContent = resultado[item][key];
          tr.appendChild(th);
          }else{
          let td = document.createElement("td");
         // td.setAttribute("scope", "col");
          td.textContent = resultado[item][key];
          tr.appendChild(td);
          }
          
/*           for(let a in permisos){ */
           /*  if(recurso_nombre == permisos[a].recurso_nombre){ */
         //   console.log(a,permisos[a],permisos[a].recurso_nombre == recurso_nombre)
          /*   } */
/*           } */
/*       for (let i = 0; i < permisos.length; i++) {
            const recurso = permisos[i];

            if(recurso["recurso_nombre"] === recurso_nombre){
              console.log(recurso["recurso_nombre"],recurso_nombre)
/*               for(let k in recurso){
                console.log(k,recurso[k])
                
              } */
 /*            }
            
          } */
           
          /*        
          }
        
          } */





        }
        
        
  
        if(permisoRecurso["borrar"] == true && permisoRecurso["recurso_nombre"] == recurso_nombre){
          let tdc = document.createElement("td");
          tdc.innerHTML = `<button type="button" class="btn btn-danger btn-sm " onclick="BorrarItem('${permisoRecurso["recurso_nombre"]}/${resultado[item]["id"]}')">Borrar</button>`;
          tr.appendChild(tdc);
          
        }
        if(permisoRecurso["actualizar"] == true && permisoRecurso["recurso_nombre"] == recurso_nombre){
          let tdc = document.createElement("td");
          tdc.innerHTML = `<button type="button" class="btn btn-warning btn-sm " onclick="EditarItem('${permisoRecurso["recurso_nombre"]}/${resultado[item]["id"]}/edit')">Editar</button>`;
          tr.appendChild(tdc);
          
        }
        

        
        document.getElementById("TbodyInstancias").appendChild(tr);
    }

   
  }
  
}
async function AgregarItem(nombre_recurso){
  console.log(nombre_recurso);
   const formulario = await mandarToken(nombre_recurso);
   console.log(formulario);
  document.getElementById("vidflotante").innerHTML = formulario 
}


async function AplicarAgregar(recurso_nombre){//

  let URL = recurso_nombre
  

  let formAgregar = document.getElementById("formAgregar");
  obj ={}
  for (let i=0;i<formAgregar.elements.length;i++){
    if(formAgregar.elements[i].type != "submit"){
      console.log(formAgregar.elements[i]);   // id="awd" name="awd" value="45"
      
      //  obj[formAgregar.elements[i].id] = Number(formAgregar.elements[i].value) 
      if(formAgregar.elements[i].type != "checkbox"){
        obj[formAgregar.elements[i].id] = formAgregar.elements[i].value 
      }else{
        obj[formAgregar.elements[i].id] = formAgregar.elements[i].checked
      }
      
    }
  }
  console.log(obj)



/*  console.log(await mandarTokenConBody(URL,"POST",obj)) */

 if(await mandarTokenConBody(URL,"POST",obj)){
  ConsultarRecurso(recurso_nombre)
}


}


async function EditarItem(id){ // /{recurso}/id

  const formulario = await mandarToken(id);
 /*  console.log(formulario); */
   document.getElementById("vidflotante").innerHTML = formulario
}


async function AplicarEdicion(recurso_nombre){
  form = document.getElementById("formEdit");
  let obj = {}
  for (let i=0;i<form.elements.length;i++){
    if(form.elements[i].type != "submit"){
      console.log(form.elements[i]);   // id="awd" name="awd" value="45"
      
      if(form.elements[i].id == "id"){
        obj[form.elements[i].id] = Number(form.elements[i].value) 
      }else if(form.elements[i].type == "checkbox" ){
        obj[form.elements[i].id] = form.elements[i].checked 
      }else{
        obj[form.elements[i].id] = form.elements[i].value
      }

     
  
    }
    }
  //console.log(obj)
  URL= recurso_nombre+"/"+obj["id"]
  console.log(URL)
 
  if(await mandarTokenConBody(URL,"PUT",obj)){
    ConsultarRecurso(recurso_nombre)
  }
  
   
}/* URL,metodo = "GET",data = null */


function validadorGenerico(){
  return false
}


async function BorrarItem(id){

  console.log("se borro el item con id: " + id);
  if(await mandarToken(id,"DELETE")){
    let nombre_recurso = id.split("/")[0];
    ConsultarRecurso(nombre_recurso)
  }else{
    console.log("no se pudo borrar");
  }
 
  
}
async function BuscarPorID(){


  let id = document.getElementById("idRecursoABuscar").value;
  id = Number(id)
  if(id > 0 && typeof id == "number"){
  const recurso_nombre = document.getElementById("nombreRecurso").textContent
  const URL = recurso_nombre+"/"+id
  let resultado = [await mandarToken(URL)];
  crearTablaInstancias(resultado,recurso_nombre)
  }
}
async function mandarToken(URL,metodo = "GET"){
try {



  let token = localStorage.getItem("token");
  const res = await fetch("http://localhost:8000/"+URL, {
      method: metodo,
      headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
      },
      
  });
  console.log(res.ok, res.status);
  const {resultado } = await res.json();

  if(res.ok){
    return resultado;
  }




} catch (error) {
  console.log(error);
}

}



async function mandarTokenConBody(URL,metodo = "GET",data){
  try {
  
  
  
    let token = localStorage.getItem("token");
    const res = await fetch("http://localhost:8000/"+URL, {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        
          body : JSON.stringify(data),
        
          
        
    });
    console.log(res.ok, res.status);
    const {resultado } = await res.json();
  
    if(res.ok){
      return resultado;
    }
  
  
  
  
  } catch (error) {
    console.log(error);
  }
  
  }

function cerrarModal(){
  while (document.getElementById('vidflotante').firstChild) {
    document.getElementById('vidflotante').removeChild(document.getElementById('vidflotante').firstChild);
  }
}

