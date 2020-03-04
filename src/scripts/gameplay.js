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
         '012':{css:'display:block; top:14%'},
         '345':{css:'display:block; top:47%'},
         '678':{css:'display:block; top:80%'},
         '036':{css:'display:block; top: 46%; left: -33%; transform: rotate(90deg)'},
         '147':{css:'display:block; top: 46%; transform: rotate(90deg);'},
         '258':{css:'display:block; top: 46%; left: 33%; transform: rotate(90deg)'},
         '048':{css:'display:block; top: 46%; left: -1%; transform: rotate(45deg)'},
         '246':{css:'display:block; top: 46%; left: -1%; transform: rotate(-45deg)'},
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
            if (win[0]) {
               console.log(win[1].css)
               let stick = document.querySelector('.risco')
               stick.style = win[1].css

               setTimeout(() => {
                  
                  this.playerOne.point()
                  this.scoreBoardPoints[0].innerText = this.playerOne.points
                  this.finish()
                  this.start()
                  this.whoIsPlaying.src = '/src/image/crossBlue.svg'
                  this.playerTurn = true
               }, 2000);
            }
         }
      } else if (!this.playerTurn && !currentTarget.classList.contains('clicked')) {
         this.playerTurn = true
         this.playerTwo.moves[currentTarget.dataset.area] = 'O'
         currentTarget.classList.add('oMark', 'clicked')
         this.whoIsPlaying.src = '/src/image/crossBlue.svg'

         if (Object.keys(this.playerTwo.moves).length >= 3) {
            let win = this.checkWinner(this.wonPossibilities, this.playerTwo.moves)
            if (win[0]) {
               let stick = document.querySelector('.risco')
               stick.style = win[1].css
               setTimeout(() => {
                  
                  this.playerTwo.point()
                  this.scoreBoardPoints[1].innerText = this.playerTwo.points
                  this.finish()
                  this.start()
                  this.whoIsPlaying.src = '/src/image/crossBlue.svg'
                  this.playerTurn = true
               }, 2000);
            }
         }
      }
   }
   checkWinner(possibilities, moves) {
      for(let key in possibilities){
         if(key[0] in moves && key[1] in moves && key[2] in moves){
            
            return [true, possibilities[key[0] + key[1] + key[2]]]
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