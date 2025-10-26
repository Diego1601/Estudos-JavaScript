// trago todos os elementos que quero usar para aqui.

let botoes_numericos = document.querySelectorAll(".botao_numerico");

const tela = document.querySelector(".valor_saida");

const resultado = document.querySelector(".botao_resultado");

const historico = document.querySelector(".valor_historico");

const botoes_operadores = document.querySelectorAll(".botao_operador")

    
// seleciono todos os botões de números e operadores para pegar os valores digitados.
botoes_numericos.forEach (botao => {
    botao.addEventListener("click" , () => {
        const valor = botao.innerText;

        if(tela.innerText === "") {
            tela.innerText = valor;
        } else {
            tela.innerText += valor;
        }
    })
});

// seleciono todos os botões operadores para pegar os valores digitados.
botoes_operadores.forEach (btn_operador => {
    btn_operador.addEventListener("click" , () => {

        const valor_btn = btn_operador.innerText;
        
        if(tela.innerText === "") {
            tela.innerText = valor_btn;
        } else {
            tela.innerText += valor_btn;
        }
    })
})

// calculo o resultado e transmito para a tela de exibição.
resultado.addEventListener("click" , ()=> {
    if(tela.innerText === "") {
        tela.innerText = "";
    } else {
        let calculo = tela.innerText;
        calculo = calculo.replace(/x/gi , "*");
        calculo = eval(calculo.replace(/÷/gi , "/"));
        const valor_historico = tela.innerText;
        historico.innerText = valor_historico;
        tela.innerText = calculo;
    }
});

// seleciono o botão de apagar para cada valor digitado. 
document.querySelector("#botao_apagar").addEventListener("click", () => {
        if(tela.innerText === "") {
            tela.innerText = "";
        } else {
            tela.innerText = tela.innerText.slice(0, -1);
            historico.innerText = historico.innerText.slice(0, -2);
        }
})

// seleciono o botão de apagar tudo de uma vez na tela de exibição.
document.querySelector("#botao_c").addEventListener("click" , () => {
    tela.innerText = "";
    historico.innerText = "";
});