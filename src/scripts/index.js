import '../styles/index.scss';
import Menu from './menu'


const playerOneName = document.querySelector('#playerOneInputName');
const playerTwoName = document.querySelector('#playerTwoInputName');
const place = document.querySelector('.ticTacToe__board');


const menu = new Menu (playerOneName, playerTwoName)

menu.init()


//game.start()




