import Tablero from './tablero';
import './style.scss';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const buttonCreateTable = document.getElementById('createTable');
const inputDimensions = document.getElementById('dimension');
const resetButton = document.getElementById('resetGame');
const clearButtons = document.querySelectorAll('.clearGameButton');
const preGame = document.querySelector('.preGame');
const inGame = document.querySelector('.inGame');

let tablero;

buttonCreateTable.addEventListener('click', (e) => {
  let numRondas = parseInt(document.getElementById('num-rondas').value);
  if (!inputDimensions.value || numRondas < 1) {
    Toastify({
      text: "Debe indicar una dimensión válida",
      duration: 3000,
      newWindow: false,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function(){} // Callback after click
    }).showToast();

    inputDimensions.classList.add('error');
    inputDimensions.focus();
    return false;
  }
  if (isNaN(inputDimensions.value)) {
    Toastify({
      text: "Debe introducir un número válido",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function(){} // Callback after click
    }).showToast();

    inputDimensions.classList.add('error');
    inputDimensions.focus();
    return false;
  }
  let checkMachine = document.getElementById('machine');
  tablero = new Tablero(parseInt(inputDimensions.value),checkMachine.checked, numRondas);
  tablero.imprimir();
  preGame.classList.toggle('hide');
  inGame.classList.toggle('hide');
  
});

inputDimensions.addEventListener('keydown', () => {
  inputDimensions.classList.remove('error');
});

for (let button of clearButtons) {
  button.addEventListener('click', () => {
    tablero.limpiar();
  });
}

resetButton.addEventListener('click', (e) => {
  document.getElementById(tablero.elementID).innerHTML = '';
  document.getElementById('marcador').innerHTML = '';

  tablero = null;

  preGame.classList.toggle('hide');
  inGame.classList.toggle('hide');
  document.querySelector(".clearGameButton").classList.remove("hide");
  document.querySelector(".clearGameButton2").classList.remove("hide");
  let registro = document.getElementById("registroJugadas");
  registro.innerHTML = '';
  inputDimensions.value = '';
  inputDimensions.focus();
});