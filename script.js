
const btnCopiar = document.createElement("button");
btnCopiar.innerText = "Copiar";
const mensaje = document.getElementById("mensaje");
const en = document.getElementById("entrada");
const pantallaInfo = document.getElementById("info-pantalla");
pantallaInfo.hidden = false;
const pantalla = document.getElementById("pantalla");
pantalla.appendChild(btnCopiar);
btnCopiar.hidden = true;
const btn_desencriptar = document.getElementById("btn-desencriptar");
const btn_encriptar = document.getElementById("btn-encriptar");

function encriptar(){
    let texto = en.value;
    if(texto != ""){ 
        pantallaInfo.hidden = true;
        mensaje.innerText = encriptarTexto(texto);
        btnCopiar.hidden = false;
        en.value = "";
    }
}
function copiarTexto(){
    en.value = mensaje.textContent;
    mensaje.innerText = "";
    pantalla.appendChild(pantallaInfo);
    btn_desencriptar.disabled = false;
    btnCopiar.hidden = true;
    pantallaInfo.hidden = false;
    btn_encriptar.disabled = true;
}

function encriptarTexto(texto){
    let textEncriptado = "";
    const vocales = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }
    texto = texto.toLowerCase();
    for(let l of texto){
        if("aeiou".includes(l)){
            textEncriptado += vocales[l];
            continue;
        }
        textEncriptado+=l;
    }
    return textEncriptado;
}

function desencriptarTexto(texto){
    
}

btn_encriptar.addEventListener("click", encriptar);
btnCopiar.addEventListener("click", copiarTexto);
function cambiarEstado(){
    btn_encriptar.disabled = false;
}
en.addEventListener("input", cambiarEstado);

