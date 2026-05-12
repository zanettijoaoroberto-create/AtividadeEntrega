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
  let erro = document.getElementById("mensagem-erro");
  erro.innerHTML = "";

  let data = inData; // document.getElementByName("inData");
  let nome = inCli;
  let fone = inFone;
  let mail = inMail;
  let prod = inProd;
  let qtd = inQtd;
  let val = inVal;

  switch (true) {
    // Verificar se existe algum campo vazio
    case nome.value.trim() == "" ||
      data.value == "" ||
      fone.value.trim() == "" ||
      mail.value.trim() == "" ||
      prod.value.trim() == "" ||
      qtd.value == "" ||
      val.value == "":
      erro.style.display = "block";
      erro.innerHTML = "Erro: O(s) campo(s) não pode(m) estar vazio(s)!";
      break;

    // Verificar se os campos de string contem mais que 5 caracteres
    case nome.value.trim().length < 5 ||
      prod.value.trim().length < 5 ||
      mail.value.trim().length < 5 ||
      fone.value.trim().length < 5:
      erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
      erro.style.display = "block";
      break;

    // Verificar se a quantidade e o valor são positivos (> 0)
    case val.value < 0 || qtd.value < 0:
      erro.style.display = "block";
      erro.innerHTML = "Erro: Este campo não pode ser negativo!";
      break;

    default:
      erro.style.display = "none";
      break;
  }
};
  
};

// ATIVIDADE 04
const calcular = () => {
  let valPedido = Number(inValorPedido.value);
  let perDesconto = 0;
  let valDesconto = 0;
  let valFinalPedido = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
  } else if (valPedido >= 1500) {
    perDesconto = 1;
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
  } else {
    perDesconto = 0;
  }

  // Calcular o valor do desconto
  valDesconto = (valPedido * perDesconto) / 100;
  // Calcular o valor final do pedido
  valFinalPedido = valPedido - valDesconto;
  // Exibir os resultados
  inPercDesc.value = perDesconto;
  inValDesc.value = valDesconto.toFixed(2);
  inValFinal.value = valFinalPedido.toFixed(2);
};

 
};




