import '../styles/index.scss';
import Menu from './menu'


const playerOneName = document.querySelector('#playerOneInputName');
const playerTwoName = document.querySelector('#playerOneInputName');
const toggle = document.querySelector('.ticTacToe__toggle');
const start = document.querySelector('.ticTacToe__button');
const place = document.querySelector('.ticTacToe__board');

const menu = new Menu (playerOneName, playerTwoName, toggle, start, place)

menu.events()


//game.start()




