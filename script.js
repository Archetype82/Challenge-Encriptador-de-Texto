function validarTexto (texto) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
    
    if(texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    } else if(texto == vacio) {
       alert("Ingrese un texto para encriptar");
        return true;
    } else {
        return false;
    }
}

let botonEncriptar = document.querySelector("#boton-encriptar");

botonEncriptar.addEventListener("click", function() {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (validarTexto(textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
    }
});

const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encriptar(textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj, reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return Encriptado;
}

let botonCopiar = document.querySelector("#boton-copy");

botonCopiar.addEventListener("click", function() {        
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value = "";
});

let botonDesencriptar = document.querySelector("#boton-desencriptar");

botonDesencriptar.addEventListener("click", function() {
    let textoIngresado = document.querySelector("#input-texto").value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
});

function desencriptar(textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj], obj);
        textoIngresado = Encriptado;        
    }
    return Encriptado;
}

let botonPegar = document.querySelector("#boton-pegar");

botonPegar.addEventListener("click", function() {
    navigator.clipboard.readText().then(textoPegado => {
        document.querySelector("#input-texto").value = textoPegado;
    }).catch(err => {
        console.error('Error al leer del portapapeles: ', err);
    });
});

let botonBorrarIzquierda = document.querySelector("#boton-borrar-izquierda");

botonBorrarIzquierda.addEventListener("click", function() {
    document.querySelector("#input-texto").value = "";
});

let botonBorrarDerecha = document.querySelector("#boton-borrar-derecha");

botonBorrarDerecha.addEventListener("click", function() {
    document.querySelector("#msg").value = "";
});








