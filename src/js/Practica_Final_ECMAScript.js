// Ejercicio 2
sessionStorage.setItem("practica", "Práctica Final ECMAScript 2025");

// Comprobar que se ha almacenado correctamente
console.log(sessionStorage.getItem("practica"));

// Ejercicio 3
const devolverHora = function () {
  const today = new Date();
  let hora = today.getHours().toString().padStart(2, 0);
  let minuto = today.getMinutes().toString().padStart(2, 0);
  let segundo = today.getSeconds().toString().padStart(2, 0);

  return `${hora}:${minuto}:${segundo}`;
};

console.log("Ejercicio 3 ==> " + devolverHora());

// Ejercicio 4. Nos damos cuenta que hay que introducir un "Defer" para que el HTML se cargue antes que el JS.
const relojCabecera = document.getElementById("relojDigital");
function actualizarHora() {
  relojCabecera.innerText = devolverHora();
}
setInterval(actualizarHora, 1000);

// Ejercicio 5
const titulo = document.getElementById("rotuloJugandoConMayores");

// Función que cambia el color del título al pasar el ratón
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "#ffff00"; // Cambia a un color azul
  titulo.style.textShadow = "1px 1px 2px black"; // Añadimos sombra al texto para resaltarlo más.
});

// Función que devuelve el color original cuando el ratón sale
titulo.addEventListener("mouseout", () => {
  titulo.style.color = ""; // Vuelve al color original (negro)
  titulo.style.textShadow = ""; // Quitamos la sombra del texto.
});

// Ejercicio 6
let fotoCentralMain = document.getElementById("fotoCentralMain");
fotoCentralMain.addEventListener("click", function () {
  if (fotoCentralMain.src.includes("public/images/mayoresJugando01.jpg")) {
    fotoCentralMain.src = "public/images/ImagenEjercicio6.jpg";
  } else {
    fotoCentralMain.src = "public/images/mayoresJugando01.jpg";
  }
});

// Ejercicio 7
const arrayNombresJSON = new Array();
json.forEach((element) => {
  arrayNombresJSON.push(element.name);
});
console.log(`Ejercicio 7 ==> { ${arrayNombresJSON} }`);

// Ejercicio 8
class Usuario {
  #idUser;
  #nombre;
  #nombreUser;
  edad;
  #email;
  //TODO: El enunciado dice que "empresa" sólo devolverá "el nombre de dicha empresa". No entiendo qué quiere decir con esto.
  #empresa;
  #direccion = {
    calle: "",
    ciudad: "",
    codigoPostal: "",
  };
  #url;

  // TODO: Comprobar si efectivamente debemos comprobar todos los objetos creados.
  //Debemos crear una lista con todos los usuarios creados para poder devolver
  // el que tenga un url determinado.
  static listaUsuarios = new Array();

  constructor(nombre, nombreUser, email, empresa, direccion, url, edad) {
    this.#idUser = Usuario.listaUsuarios.length;
    this.#nombre = nombre;
    this.#nombreUser = nombreUser;
    this.#email = email;

    //TODO: ¿Que sólo devuelva el nombre de dicha empresa?
    this.#empresa = empresa;
    this.#direccion = direccion;
    this.#url = url;
    this.edad = edad;

    Usuario.listaUsuarios.push(this);
  }

  static getId(url) {
    return url.split("/")[this.length - 1];
  }

  getNombre() {
    return this.#nombre;
  }

  getNombreUsuario() {
    return this.#nombreUser;
  }

  getDireccion() {
    return this.#direccion;
  }

  getEmail() {
    return this.#email;
  }

  getEmpresa() {
    return this.#empresa;
  }

  getUrl() {
    return this.#url;
  }

  toString() {
    return `idUser: ${Usuario.getId(this.#url)}, 
            Nombre : ${this.#nombre}, 
            NombreUser : ${this.#nombreUser},
            Email : ${this.#email},
            Empresa : ${this.#empresa},
            Direccion: ${this.#direccion.calle}, ${
      this.#direccion.codigoPostal
    }, ${this.#direccion.ciudad},
            URL: ${this.#url}`;
  }
}

// Ejercicio 9
const userPrueba = new Usuario(
  "Prueba Practica Final",
  "PruebaPF7",
  "pruebapf7@hotmail.com",
  "Leroy Merlin",
  {
    calle: "Gravina 7",
    ciudad: "Roma",
    codigoPostal: "41449",
  },
  "https://prueba.dev/api/users/102/",
  32
);

console.log(`Ejercicio 9 ==> ${userPrueba.toString()}`);

// Ejercicio 10
function crearUsuarioDesdeJson(objetoJson) {
  return new Usuario(
    objetoJson.name,
    objetoJson.username,
    objetoJson.email,
    objetoJson.company.name,
    {
      calle: objetoJson.address.street,
      ciudad: objetoJson.address.city,
      codigoPostal: objetoJson.address.zipcode,
    },
    objetoJson.url,
    objetoJson.age
  );
}

// Ejercicio 11
function crearArrayObjetosJSON() {
  let arrayObjetosJSON = new Array();
  json.forEach((element) =>
    arrayObjetosJSON.push(crearUsuarioDesdeJson(element))
  );

  return arrayObjetosJSON;
}

console.log("Ejercicio 11 ==> array de objetos creados: ");
let arrayObjetosJSON = crearArrayObjetosJSON();
console.log(arrayObjetosJSON);

// Ejercicio 12 - Creamos la variable directamente en el ejercicio anterior.
console.log("Ejercicio 12 ==> Nombres incluidos en el array:");
for (element of arrayObjetosJSON) {
  console.log(element.getNombre());
}

// Ejercicio 13
let usuariosDeGwenborough = arrayObjetosJSON.filter(
  (c) => c.getDireccion().ciudad === "Gwenborough"
);
let usuariosDeWisokyburgh = arrayObjetosJSON.filter(
  (c) => c.getDireccion().ciudad === "Wisokyburgh"
);
console.log(
  "Ejercicio 13 ==> Variables que contienen todos los habitantes de una ciudad :"
);
console.log(
  "Variable conteniendo usuarios de Gwenborough: ",
  usuariosDeGwenborough
);
console.log(
  "Variable conteniendo usuarios de Wisokyburgh: ",
  usuariosDeWisokyburgh
);

// Ejercicio 14
console.log("Ejercicio 14 ==> Arrays ordenados de forma creciente :");

// Función para ordenar los objetos alfabéticamente por su nombre
const comparacionNombreAscendente = (a, b) => {
  return a.getNombre().localeCompare(b.getNombre());
};

console.log(
  "Array de objetos: ",
  arrayObjetosJSON.sort(comparacionNombreAscendente)
);
console.log("Array de nombres: ", arrayNombresJSON.sort());
console.log(
  "Array de personas de Gwensborough: ",
  usuariosDeGwenborough.sort(comparacionNombreAscendente)
);
console.log(
  "Array de personas de Wisokyburgh: ",
  usuariosDeWisokyburgh.sort(comparacionNombreAscendente)
);

// Ejercicio 15
const elementoUsuariosNavBar = document.getElementById(
  "botonMostrarUsuariosEj15"
);

elementoUsuariosNavBar.addEventListener('click', mostrarUsuarios(arrayObjetosJSON.sort(comparacionNombreAscendente)));

function mostrarUsuarios(arrayADesplegar) {
  let elementoListaModal = document.getElementById("contenidoListaModalEj15");
  let arrayElementosMostrados = new Array();

  for (elemento of arrayADesplegar) {
    let listItemModal = document.createElement("p");
    listItemModal.className="itemsInsertadosEnModal"
    listItemModal.innerText =
      elemento.getNombre() +
      ", usuario: " +
      elemento.getNombreUsuario() +
      // ", dirección: Calle " +
      // elemento.getDireccion().calle +
      // ", " +
      // elemento.getDireccion().codigoPostal +
      // " " +
      // elemento.getDireccion().ciudad +
      ", email: " +
      elemento.getEmail() +
      ", empresa: " +
      elemento.getEmpresa();
    elementoListaModal.insertAdjacentElement('beforeend', listItemModal);
    arrayElementosMostrados.push(elemento);
  }
  
  calcularEdad(arrayElementosMostrados);
}

function eliminarNodosDelUl() {
  let elementoListaModal = document.getElementById("contenidoListaModalEj15");
  
  elementoListaModal.textContent = ''
}

// Ejercicio 16

// Primero debemos crear tantas opciones en el select como ciudades haya en el JSON
let elementoSelectModalEj16 = document.getElementById("selectModalEj16");
let listaDeOpcionesSelectEj16 = new Array();
for (element of arrayObjetosJSON.map((c) => c.getDireccion().ciudad)) {
  if (!listaDeOpcionesSelectEj16.includes(element)) {
    listaDeOpcionesSelectEj16.push(element);
  }
}

for (element of listaDeOpcionesSelectEj16) {
  let optionSelectEj16 = document.createElement("option");
  optionSelectEj16.value = element;
  optionSelectEj16.innerText = element;
  elementoSelectModalEj16.appendChild(optionSelectEj16);
}

// La función filtrarUsuarios es la que ejecutará el cambio de usuarios si se efectúa un cambio.



function filtrarUsuarios() {
  let opcionSeleccionada = elementoSelectModalEj16.selectedOptions[0].innerText;

  let objetosFiltradosPorCiudad = opcionSeleccionada !== "Seleccione ciudad" ?
   arrayObjetosJSON.filter(
    (c) =>
      c.getDireccion().ciudad ===
    opcionSeleccionada
  ) : arrayObjetosJSON;

  mostrarUsuarios(objetosFiltradosPorCiudad);
}

// A continuación incluimos el eventListener que ejecutará filtrarUsuarios() cada vez que cambie el Select.

elementoSelectModalEj16.addEventListener("change", () => {
  eliminarNodosDelUl();
  filtrarUsuarios();
  cambiarColorPorCiudad();
});

// Ejercicio 17 - Incluimos la modificación del estilo en el ejercicio anterior

function cambiarColorPorCiudad() {
  let elementoListaModal = document.getElementById("contenidoListaModalEj15");
let opcionSeleccionada = elementoSelectModalEj16.selectedOptions[0].innerText

  if (opcionSeleccionada === "Gwenborough") {
    // AirForce blue, para que sea visible con el contraste
    elementoListaModal.style.color = "#598BAF";
  } else if (opcionSeleccionada === "Wisokyburgh"){
    elementoListaModal.style.color = "green";
  } else {
    elementoListaModal.style.color = "white";
  }
}

// Ejercicio 18 - calcularEdad()

console.log("Ejercicio 18 ==> ")

function calcularEdad(arrayElementosMostrados) {
  let elementoListaModal = document.getElementById("contenidoListaModalEj15");

  let edadMinima = Math.min(...arrayElementosMostrados.map(c => parseInt(c.edad)));
  let usuarioMenorEdad = arrayElementosMostrados.filter(c => c.edad == edadMinima).map(c => c.getNombre());
  let edadMaxima = Math.max(...arrayElementosMostrados.map(c => parseInt(c.edad)));
  let usuarioMayorEdad = arrayElementosMostrados.filter(c => c.edad == edadMaxima).map(c => c.getNombre());

  let nodoParrafo = document.createElement('p');
  nodoParrafo.style.textDecoration = "underline"
  nodoParrafo.innerText = ('En el grupo la edad mínima es ' + edadMinima
    + ', de ' + usuarioMenorEdad + ', y la edad máxima es ' + edadMaxima
    + ' de ' + usuarioMayorEdad);

  elementoListaModal.appendChild(nodoParrafo)
}

// Ejercicio 19

window.addEventListener('keydown', (evento) => {
  if (evento.key.toLowerCase() === 'p') {
    let nuevaVentana = window.open("", "", "width=300,height=200");
    nuevaVentana.document.write(`<p style="font-size: 20px;">${sessionStorage.getItem("practica")}</p>`);
    setTimeout(() => {
      nuevaVentana.close();
    }, 3000);
  }
})

// Ejercicio 20

let elementSelectFiltrarUsuarios = document.getElementById('selectFiltrarUsuarios');

for (element of arrayObjetosJSON) {
  let nuevaOption = document.createElement('option');
  nuevaOption.value = element.getUrl();
  nuevaOption.textContent = element.getNombre();
  elementSelectFiltrarUsuarios.appendChild(nuevaOption);
}

elementSelectFiltrarUsuarios.addEventListener('change', filtrarCiudad);

function filtrarCiudad() {
  let valueDeOptionSeleccionada = elementSelectFiltrarUsuarios.selectedOptions[0].value;
  let usuarioBuscado = arrayObjetosJSON.find(c => c.getUrl() === valueDeOptionSeleccionada);
  let elementDivMostrarUsuarioSeleccionado = document.getElementById('divInfoUsuarioSeleccionado');
  
  console.log(usuarioBuscado);

  let fraseDireccionInsertada = document.createElement('p');
  fraseDireccionInsertada.innerText = 
    'C/' + usuarioBuscado.getDireccion().calle
    + ', ' + usuarioBuscado.getDireccion().ciudad
    + '(' + usuarioBuscado.getDireccion().codigoPostal + ')';

  elementDivMostrarUsuarioSeleccionado.innerText = '';
  elementDivMostrarUsuarioSeleccionado.appendChild(fraseDireccionInsertada)

        // ", dirección: Calle " +
      // elemento.getDireccion().calle +
      // ", " +
      // elemento.getDireccion().codigoPostal +
      // " " +
      // elemento.getDireccion().ciudad +
};
