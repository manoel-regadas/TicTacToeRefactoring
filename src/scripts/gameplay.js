import Board from './board';
import Player from './player';


class GamePlay {
   constructor(place, playerOne, playerTwo, scoreBoardPoints, whoIsPlaying) {
      this._board = new Board(place)
      this._playerOne = new Player(playerOne)
      this._playerTwo = new Player(playerTwo)
      this.playerTurn = true;
      this.scoreBoardPoints = scoreBoardPoints;
      this.whoIsPlaying = whoIsPlaying;
      this._possibilities = {        
         '012':{game:'',css:null},
         '345':{game:'',css:null},
         '678':{game:'',css:null},
         '036':{game:'',css:null},
         '147':{game:'',css:null},
         '258':{game:'',css:null},
         '048':{game:'',css:null},
         '246':{game:'',css:null},
      }
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
         this.playerOne.moves[currentTarget.dataset.area] = 'X'
         currentTarget.classList.add('xMark', 'clicked')
         this.whoIsPlaying.src = '/src/image/circleBlue.svg'
         
         if (Object.keys(this.playerOne.moves).length >= 3) {
            let win = this.checkWinner(this.wonPossibilities, this.playerOne.moves)
            if (win) {
               this.playerOne.point()
               this.scoreBoardPoints[0].innerText = this.playerOne.points
               this.finish()
               this.start()
               this.whoIsPlaying.src = '/src/image/crossBlue.svg'
               this.playerTurn = true
            }
         }
      } else if (!this.playerTurn && !currentTarget.classList.contains('clicked')) {
         this.playerTurn = true
         this.playerTwo.moves[currentTarget.dataset.area] = 'O'
         currentTarget.classList.add('oMark', 'clicked')
         this.whoIsPlaying.src = '/src/image/crossBlue.svg'

         if (Object.keys(this.playerTwo.moves).length >= 3) {
            let win = this.checkWinner(this.wonPossibilities, this.playerTwo.moves)
            if (win) {
               this.playerTwo.point()
               this.scoreBoardPoints[1].innerText = this.playerTwo.points
               this.finish()
               this.start()
               this.whoIsPlaying.src = '/src/image/crossBlue.svg'
               this.playerTurn = true
            }
         }
      }
   }
   checkWinner(possibilities, moves) {
      for(let key in possibilities){
         if(key[0] in moves && key[1] in moves && key[2] in moves){
            return true
         }
      }
   }
   finish(){
      this.playerOne.moves = {};
      this.playerTwo.moves = {};
      this.board.place.innerHTML = ' ';
   }
}

export default GamePlay;