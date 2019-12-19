import '../styles/index.scss';
import Board from './board';
import Player from './player';


  
      const place = document.querySelector('.border-container');
      const playerOne = new Player('Manoel');
      const playerTwo = new Player('Fulano');
      const gameArea = new Board(place, 8, playerOne, playerTwo);
      gameArea.render()
      gameArea.gamePlay() 
      console.log(playerOne.moviments)
    

