let ordem = [];
let ordemClick = [];
let pontos = 0;

// 0 -> verde
// 1 -> vermelho
// 2 -> amarelo
// 3 -> azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

let misturar = () => {
    let ordemCor = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCor;
    ordemClick = [];

    for(let i in ordem){
        let elementoCor = criarCorElemento(ordem[i]);
        luzCor(elementoCor, Number(i) + 1);
        //
    }
}

// pisca proxima cor 
let luzCor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
        // 
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// verifcar se os botoes clicados sao os mesmos que o jogo mostra

let verificaOrdem = () => {
    for(let i in ordemClick) {
        if(ordemClick[i] != ordem[i] ){
            gameOver();
            break;
        }
    }
    if(ordemClick.length == ordem.length){
            alert(`Pontuação: ${pontos}\nVocê acertou! Iniciando próximo nível!`);
            proximoNivel();
    }
}

// funcao para o clique do usuario
let click = (color) => {
    ordemClick[ordemClick.length] = color;
    criarCorElemento(color).classList.add('selected');

    setTimeout(() => {
        criarCorElemento(color).classList.remove('selected');
        verificaOrdem();
    },250);
}

// funcao que retorna a corrent
let criarCorElemento = (color) => {
    if(color == 0){
        return verde;
    } else if (color == 1) {
        return vermelho;
    } else if (color == 2) {
        return amarelo;
    }else if (color == 3) {
        return azul;
    }
}

// funcao para proximo nivel

let  proximoNivel = () => {
    pontos++;
    misturar();
}

// funcao game over
let gameOver = () => {
    alert(`Pontuação: ${pontos}\nVocê perdeu o jogo!\n Clique em ok para iniciar novo jogo!`);
    ordem = [];
    ordemClick = [];

    jogar();
}

// funcao para inicio do jogo
let jogar = () => {
    alert('Bem vindo ao Genius, iniciando novo jogo!');
    pontos = 0;

    proximoNivel();
}

/*verde.addEventListener('click', click(0));
vermelho.addEventListener('click', click(1));
amarelo.addEventListener('click', click(2));
azul.addEventListener('click', click(3));*/

verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

jogar();