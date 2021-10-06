let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

// Cria ordem aleatória
let shuffleOrder = () => {
  let coloOrder = Math.floor(Math.random() * 4);
  order[order.length] = coloOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// Acende a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

// Checa se os botões clicados são iguais a ordem esperada
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};

// Função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");

  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

// Função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

// Função para próximo nível
let nextLevel = () => {
  score++;
  shuffleOrder();
};

// Função para gameover
let gameOver = () => {
  alert(
    `Pontução: ${score}\nVocê perdeu o jogo...\nMas não fique triste!!!!!!!!\nClique em OK para iniciar uma nova partida`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

// Função para iniciar jogo
let playGame = () => {
  alert("Bem vindo ao Gênesis!\nIniciando novo jogo.");
  score = 0;
  nextLevel();
};

// Eventos de click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
