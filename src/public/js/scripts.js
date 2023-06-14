let atributos = document.getElementById("TipoAtributos");

function agregarAtributo(opc) {
  let divatributo = document.createElement("div");
  divatributo.classList.add("mb-3");
  let labelatributo = document.createElement("label");

  let inputatributo = document.createElement("input");

  if (opc == 1) {
    labelatributo.setAttribute("for", "entero");
    labelatributo.textContent = "Entero";
    inputatributo.setAttribute("type", "text");
    inputatributo.setAttribute("id", "entero");
    inputatributo.setAttribute("name", "entero");
  }
  if (opc == 2) {
    labelatributo.setAttribute("for", "varchar");
    labelatributo.textContent = "varchar";
    inputatributo.setAttribute("type", "text");
    inputatributo.setAttribute("id", "varchar");
    inputatributo.setAttribute("name", "varchar");
  }
  if (opc == 3) {
    labelatributo.setAttribute("for", "boleano");
    labelatributo.textContent = "Boleano";
    inputatributo.setAttribute("type", "text");
    inputatributo.setAttribute("id", "boleano");
    inputatributo.setAttribute("name", "boleano");
  }
  if (opc == 4) {
    labelatributo.setAttribute("for", "enum");
    labelatributo.textContent = "Enum";
    inputatributo.setAttribute("type", "text");
    inputatributo.setAttribute("id", "enum");
    inputatributo.setAttribute("name", "enum");
  }
  divatributo.appendChild(labelatributo);
  divatributo.appendChild(inputatributo);
  if (opc == 4) {
    let labelatributoValor = document.createElement("label");
    labelatributoValor.setAttribute("for", "valorEnum");
    labelatributoValor.textContent = "Valores";
    let inputatributoValor = document.createElement("input");
    inputatributoValor.setAttribute("type", "text");
    inputatributoValor.setAttribute("id", "valorEnum");
    inputatributoValor.setAttribute("name", "valorEnum");
    inputatributoValor.setAttribute("class", "campo-dinamico form-control");
    inputatributoValor.setAttribute("placeholder", "ATR1,ATR2,ATR3");
    divatributo.appendChild(labelatributoValor);
    divatributo.appendChild(inputatributoValor);
    /*     atributos.appendChild(divatributo); */
  }
  inputatributo.setAttribute("class", "campo-dinamico form-control");
  atributos.appendChild(divatributo);
}

let formulario = document.forms["formRecurso"];
function validadCargaRecurso() {
  let flag = true;
  const camposDinamicos = document.querySelectorAll(".campo-dinamico");
  camposDinamicos.forEach((field) => {
    //  field.value = field.value.trim();
    if (field.name == "entero" || field.name == "varchar" || field.name == "boleano" || field.name == "enum") {
      if (!field.value.match("^[a-zA-Z\\-_][a-zA-Z0-9\\-_]*$") || field.value == "") {
        flag = false;
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
      } else {
        field.classList.add("is-valid");
        field.classList.remove("is-invalid");
      }
    }
    if (field.name == "valorEnum") {
      if (!field.value.match(/^[\w\d]+(?:,[\w\d]+)*$/)) {
        flag = false;
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
      } else {
        field.classList.add("is-valid");
        field.classList.remove("is-invalid");
      }
    }
    console.log(field.name, field.value);
  });

  if (!formulario["nombre"].value.match("^[a-zA-Z\\-_][a-zA-Z0-9\\-_]*$") || formulario["nombre"].value == "") {
    flag = false;
    formulario["nombre"].classList.add("is-invalid");
    formulario["nombre"].classList.remove("is-valid");
  } else {
    formulario["nombre"].classList.add("is-valid");
    formulario["nombre"].classList.remove("is-invalid");
  }

  return flag;
}
