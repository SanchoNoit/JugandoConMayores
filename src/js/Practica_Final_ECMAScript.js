

// Ejercicio 2
sessionStorage.setItem("practica", "Práctica Final ECMAScript 2025");

// Comprobar que se ha almacenado correctamente
console.log(sessionStorage.getItem("practica"));

// Ejercicio 3
const devolverHora = function () {
    const today = new Date();
    let hora = today.getHours().toString().padStart(2,0);
    let minuto = today.getMinutes().toString().padStart(2,0);
    let segundo = today.getSeconds().toString().padStart(2,0);

    return `${hora}:${minuto}:${segundo}`
};

console.log("Ejercicio 3 ==> " + devolverHora());

// Ejercicio 4. Nos damos cuenta que hay que introducir un "Defer" para que el HTML se cargue antes que el JS.
const relojCabecera = document.getElementById('relojDigital');
function actualizarHora() {
    relojCabecera.innerText = devolverHora();
}
setInterval(actualizarHora, 1000);

// Ejercicio 5
const titulo = document.getElementById('rotuloJugandoConMayores');

// Función que cambia el color del título al pasar el ratón
titulo.addEventListener('mouseover', () => {
    titulo.style.color = '#ffff00';  // Cambia a un color azul
    titulo.style.textShadow = "1px 1px 2px black" // Añadimos sombra al texto para resaltarlo más.
});

// Función que devuelve el color original cuando el ratón sale
titulo.addEventListener('mouseout', () => {
    titulo.style.color = '';  // Vuelve al color original (negro)
    titulo.style.textShadow = "" // Quitamos la sombra del texto.
});

// Ejercicio 6
let fotoCentralMain = document.getElementById('fotoCentralMain');
fotoCentralMain.addEventListener('click', function() {
    if (fotoCentralMain.src.includes('public/images/mayoresJugando01.jpg')) {
        fotoCentralMain.src = 'public/images/ImagenEjercicio6.jpg';
    } else {
        fotoCentralMain.src = 'public/images/mayoresJugando01.jpg';
    }
});

// Ejercicio 7
const arrayNombresJSON = new Array();
json.forEach(element => {
    arrayNombresJSON.push(element.name);
});
console.log(`Ejercicio 7 ==> { ${arrayNombresJSON} }`);

// Ejercicio 8
class Usuario {
    #idUser;
    #nombre;
    #nombreUser;
    #email;
    //TODO: El enunciado dice que "empresa" sólo devolverá "el nombre de dicha empresa". No entiendo qué quiere decir con esto.
    #empresa;
    #direccion = {
        calle: "",
        ciudad: "",
        codigoPostal: ""
    };
    #url;

    // TODO: Comprobar si efectivamente debemos comprobar todos los objetos creados.
    //Debemos crear una lista con todos los usuarios creados para poder devolver 
    // el que tenga un url determinado.
    static listaUsuarios = new Array();

    constructor(nombre, nombreUser, email, empresa, direccion, url) {
        this.#idUser = Usuario.listaUsuarios.length;
        this.#nombre = nombre;
        this.#nombreUser = nombreUser;
        this.#email = email;

        //TODO: ¿Que sólo devuelva el nombre de dicha empresa?
        this.#empresa = empresa;
        this.#direccion = direccion;
        this.#url = url;

        Usuario.listaUsuarios.push(this);
    }

    static getId(url) {
        return url.split('/')[this.length - 1];
    }

    getNombre() {
        return this.#nombre;
    }

    toString() {
        return (`idUser: ${Usuario.getId(this.#url)}, 
            Nombre : ${this.#nombre}, 
            NombreUser : ${this.#nombreUser},
            Email : ${this.#email},
            Empresa : ${this.#empresa},
            Direccion: ${this.#direccion.calle}, ${this.#direccion.codigoPostal}, ${this.#direccion.ciudad},
            URL: ${this.#url}`)
    }
}

// Ejercicio 9
const userPrueba = new Usuario("Prueba Practica Final",
                                "PruebaPF7",
                                "pruebapf7@hotmail.com",
                                "Leroy Merlin",
                                {
                                    calle: "Gravina 7",
                                    ciudad: "Roma",
                                    codigoPostal: "41449"
                                },
                                "https://prueba.dev/api/users/102/"
                                );

console.log(`Ejercicio 9 ==> ${userPrueba.toString()}`)

// Ejercicio 10
function crearUsuarioDesdeJson(objetoJson) {
    return new Usuario(objetoJson.name, objetoJson.username, objetoJson.email,
        objetoJson.company.name, {calle : objetoJson.address.street, ciudad: objetoJson.address.city, codigoPostal : objetoJson.address.zipcode},
        objetoJson.url);
}

// Ejercicio 11
function crearArrayObjetosJSON() {
    let arrayObjetosJSON = new Array();
    json.forEach(element => arrayObjetosJSON.push(crearUsuarioDesdeJson(element)));

    return arrayObjetosJSON;
}

console.log('Ejercicio 11 ==> array de objetos creados: ');
let arrayObjetosJSON = crearArrayObjetosJSON();
console.log(arrayObjetosJSON);

// Ejercicio 12 - Creamos la variable directamente en el ejercicio anterior.
console.log('Ejercicio 12 ==> Nombres incluidos en el array:')
for (element of arrayObjetosJSON) {
    console.log(element.getNombre());
}

