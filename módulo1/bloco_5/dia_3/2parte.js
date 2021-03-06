/* eslint-disable require-jsdoc */
const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
divUm.addEventListener('click', addTech);
divDois.addEventListener('click', addTech);
divTres.addEventListener('click', addTech);
input.addEventListener('keyup', changeTechText);
myWebpage.addEventListener('dblclick', myTopRedirect);
myWebpage.addEventListener('mouseenter', myTopChangeColor);

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addTech(originEvent) {
  const actualTech = document.querySelector('.tech');
  if (document.querySelector('.tech') !== null) {
    actualTech.classList.remove('tech');
  }
  originEvent.target.setAttribute('class', 'tech');
  changeInputPH(originEvent.target);
}

function changeInputPH(div) {
  const order = {
    divUm: 'primeira',
    divDois: 'segunda',
    divTres: 'terceira',
  };
  input.placeholder = `Alterar a ${order[div.id]} tecnologia`;
}

// 3.Crie uma função que, ao digitar na caixa de texto, altere
// o texto do elemento com a classe 'tech';

function changeTechText(originEvent) {
  const text = document.querySelector('.tech');
  text.innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do
// Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

function myTopRedirect(originEvent) {
  const website = 'https://www.google.com.br/';
  window.open(website);
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy',
// altere a cor do mesmo;

function myTopChangeColor(originEvent) {
  originEvent.target.style.color = 'red';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
