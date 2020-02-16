import '../styles/index.scss';
import Game from './game'


const playerOneName = document.querySelector('#playerOneInputName');
const playerTwoName = document.querySelector('#playerTwoInputName');



const game = new Game (playerOneName, playerTwoName)

game.init()


//game.start()




