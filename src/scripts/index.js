import '../styles/index.scss';
import Board from './board';
import Player from './player';



      const place = document.querySelector('.border-container');
      const playerOne = new Player('player 1');
      const playerTwo = new Player('player 2');
      const gameArea = new Board(place, 8, playerOne, playerTwo);
      gameArea.render()
      gameArea.gamePlay() 
      console.log(playerOne.moviments)


