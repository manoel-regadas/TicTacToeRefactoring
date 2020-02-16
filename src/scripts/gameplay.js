import Board from './board';
import Player from './player';


class GamePlay {
   constructor(place, playerOne, playerTwo, scoreBoardPoints) {
      this._board = new Board(place)
      this._playerOne = new Player(playerOne)
      this._playerTwo = new Player(playerTwo)
      this.playerTurn = true;
      this.scoreBoardPoints = scoreBoardPoints;
      this._possibilities = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
      ];
   }
   get wonPossibilities() {
      return this._possibilities;
   }

   get board() {
      return this._board
   }

   get playerOne() {
      return this._playerOne
   }

   get playerTwo() {
      return this._playerTwo
   }

   get getAllBlocks() {
      return this._board.blocks
   }

   init(){
      
   }

   start() {
      this.board.render();
      this.gamePlayeEvents()
      
   }

   gamePlayeEvents() {
      this.getAllBlocks.forEach(element => {
         element.addEventListener('click', this.play.bind(this))
      });

   }

   play({currentTarget}) {
      if (this.playerTurn && !currentTarget.classList.contains('clicked')) {
         this.playerTurn = false
         this.playerOne.moves.push(parseInt(currentTarget.dataset.area))
         currentTarget.classList.add('xMark', 'clicked')

         if (this.playerOne.moves.length >= 3) {
            let win = this.wonPossibilities.some(el => this.checkWinner(el, this.playerOne.moves));
            if (win) {
               this.playerOne.point()
               this.scoreBoardPoints[0].innerText = this.playerOne.points
               this.finish()
               this.start()
               this.playerTurn = true
            }
         }
      } else if (!this.playerTurn && !currentTarget.classList.contains('clicked')) {
         this.playerTurn = true
         this.playerTwo.moves.push(parseInt(currentTarget.dataset.area))
         currentTarget.classList.add('oMark', 'clicked')

         if (this.playerTwo.moves.length >= 3) {
            let win = this.wonPossibilities.some(el => this.checkWinner(el, this.playerTwo.moves));
            if (win) {
               this.playerTwo.point()
               this.scoreBoardPoints[1].innerText = this.playerTwo.points
               this.finish()
               this.start()
               this.playerTurn = true
            }
         }
      }
   }
   checkWinner(arrayOne, arraytwo) {
      let arrayCount = [];
      for (var i = 0; i < arraytwo.length; i++) {
         let arrayTest = arrayOne.some((element) => element === arraytwo[i]);
         if (arrayTest) {
            arrayCount.push(true);
         }
      };
      return arrayCount.length < 3 ? false : true;
   }

   finish(){
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
      this.board.place.innerHTML = ' ';
   }
}

export default GamePlay;