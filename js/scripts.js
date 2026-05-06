// ATIVIDADE 01
const ligar = () => {
    let lampada = document.getElementById("lampada");

    if(lampada.src.includes("apagada.jpg")){
        lampada.src = "img/acesa.jpg";
    } else {
        lampada.src = "img/apagada.jpg";
    }
};
// -----------------------------------------

// ATIVIDADE 02
const gerarImagem = () => {
    let qtdImagem = Number(document.getElementById("inQtdImg").value);
    let canvas = document.getElementById("canvas");
    canvas.innerHTML = "";

    if (qtdImagem <= 0) {
        alert("O campo quantidade não pode estar nulo ou negativo!");
    } else {
        for (let i = 0; i < qtdImagem; i++) {
            canvas.innerHTML += `<img id="logo" src="img/logo.png"
            alt="Logotipo SENAI" class="imagens" />`;
        }
 }
};
// -----------------------------------------

//ATIVIDADE 03
const validaForm = () => {
  
};
// -----------------------------------------

// ATIVIDADE 04
const calcular = () => {
 
};
