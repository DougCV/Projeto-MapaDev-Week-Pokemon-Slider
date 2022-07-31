
//1 - Pegando o elemento HTML da "seta avançar" e da "seta voltar":
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

//3 - Fazer aparecer o próximo cartão da lista:
const cartoes = document.querySelectorAll(".cartao");

//4 - Função para buscar o cartão que está selecionado e esconder:
function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado"); 
}

//5 - Função para mostrar qual cartão está selecionado:
function mostrarCartao(indiceCartao){

    cartoes[indiceCartao].classList.add("selecionado");

}

//2 - Identificando o evento "click" do usuário nas setas "avançar" e "voltar":
//Botão Avançar:
btnAvancar.addEventListener("click", function(){

    //Para a execução de avnçar quando atingir a ultima posição do Array de cartões;
    if(cartaoAtual === cartoes.length - 1){
        return;    
    }

    esconderCartaoSelecionado();

    //cartaoAtual começa com 0 e quando a seta "avançar" for clicada sera incrementado +1 para mudar o cartão;
    cartaoAtual++;

    mostrarCartao(cartaoAtual);

});

//Botão Voltar:
btnVoltar.addEventListener("click", function(){

    //Para a execução de voltar quando atingir a primeira posição do Array de cartões;
    if(cartaoAtual === 0){
        return;
    }

    esconderCartaoSelecionado();

    //cartaoAtual começa com 0 e quando a seta "voltar" for clicada sera decrementado -1 para mudar o cartão;
    cartaoAtual--;

    mostrarCartao(cartaoAtual);

});
