const textAreaEncriptar = document.getElementById("textoIngresado");
const textAreaTextoEncriptado = document.getElementById("textoEncriptado");
const botonCopiar = document.getElementById("btn-copiar");
const imagenMuneco = document.getElementById("imagen-muneco");
const parrafoInfoNingunMsj = document.getElementById("p-info-ningun-msj");
const parrafoInfoIngresaTxt = document.getElementById("p-info-ingresa-txt");
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");

function encriptarTexto(texto){
    if(/[A-ZÁ-Úá-ú]/g.test(texto)){
        return 0;
    }
    let textEncriptado = "";
    const vocales = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }
    for(let l of texto){
        if("aeiou".includes(l)){
            textEncriptado += vocales[l];
            continue;
        }
        textEncriptado+=l;
    }
    return textEncriptado;
}

function encriptar(){
    let texto = textAreaEncriptar.value;
    if(texto == ""){
        alert("¡Debes ingresar algún texto!");
        textAreaEncriptar.focus();
        return;
    }
    let textEncriptado = encriptarTexto(texto);
    if(textEncriptado == 0){
        alert("¡Solo debes escribir letras minúsculas y sin acento!");
        textAreaEncriptar.value = "";
        textAreaEncriptar.focus();
        return;
    }
    textAreaTextoEncriptado.value = textEncriptado;
    imagenMuneco.hidden = true;
    parrafoInfoNingunMsj.hidden = true;
    parrafoInfoIngresaTxt.hidden = true;
    textAreaTextoEncriptado.hidden = false;
    botonCopiar.hidden = false;
    textAreaEncriptar.value = "";
}

function copiar(){
    textAreaTextoEncriptado.select();
    document.execCommand("copy");
}

function textAreaOnPaste(){
    textAreaTextoEncriptado.value = "";
    textAreaTextoEncriptado.hidden = true;
    botonCopiar.hidden = true;
    imagenMuneco.hidden = false;
    parrafoInfoNingunMsj.hidden = false;
    parrafoInfoIngresaTxt.hidden = false;
    botonEncriptar.setAttribute("disabled","true");
    botonDesencriptar.removeAttribute("disabled");
}

botonEncriptar.addEventListener("click", encriptar);
botonCopiar.addEventListener("click", copiar);

textAreaEncriptar.addEventListener("paste", textAreaOnPaste);

