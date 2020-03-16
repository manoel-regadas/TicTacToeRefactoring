import Board from './board';
import Player from './player';


class GamePlay {
   constructor(ticTacToe,place, playerOne, playerTwo, scoreBoardPoints, whoIsPlaying, modal, modalBTNs, sybolsModal) {
      this._ticTacToe = ticTacToe
      this._board = new Board(place)
      this._place = place
      this._playerOne = new Player(playerOne)
      this._playerTwo = new Player(playerTwo)
      this.playerTurn = true;
      this.scoreBoardPoints = scoreBoardPoints;
      this.whoIsPlaying = whoIsPlaying;
      this._modal = modal
      this._modalBTNs = modalBTNs
      this._sybolsModal = sybolsModal
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

   set place(value){
      return this._place = value
   }
   
   get place(){
      return this._place
   }

   get ticTacToe(){
      return this._ticTacToe
   }

   get wonPossibilities() {
      return this._possibilities;
   }

   set board(value) {
      return this._board = value
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

   get modal() {
      return this._modal
   }

   get modalBTNs(){
      return this._modalBTNs
   }
   
   get sybolsModal(){
      return this._sybolsModal
   }

   start() {
      this.board.render();
      this.gamePlayEvents()
      
   }

   gamePlayEvents() {
      this.getAllBlocks.forEach(element => {
         element.addEventListener('click', this.play.bind(this))
      });
      
      this._modalBTNs[0].addEventListener('click', this.toMenu.bind(this))
      this._modalBTNs[1].addEventListener('click', this.continue.bind(this))

   }

   play({currentTarget}) {
      let line = document.querySelector('.line')
      if (this.playerTurn && !currentTarget.classList.contains('clicked')) {
         this.playerTurn = false
         this.playerOne.moves[currentTarget.dataset.area] = 'X'
         currentTarget.classList.add('xMark', 'clicked')
         this.whoIsPlaying.src = '/src/image/circleBlue.svg'
         
         if (Object.keys(this.playerOne.moves).length >= 3) {
            let win = this.checkWinner(this.wonPossibilities, this.playerOne.moves)
            
            if (win[0]) {
               this.sybolsModal.forEach(element => element.src = '/src/image/crossBlue.svg')
               line.style = win[1].css
               this.ticTacToe.classList.add('blur')
               this.modal.style.display = 'flex'
               this.playerOne.point()
               this.scoreBoardPoints[0].innerText = this.playerOne.points
               
               setTimeout(() => {
                  this.finish()
               }, 2000);  
            }

            if(!win[0] && Object.keys(this.playerOne.moves).length === 5){
               this.finish()
               this.start()
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
               this.sybolsModal.forEach(element => element.src = '/src/image/circleBlue.svg')
               line.style = win[1].css
               this.ticTacToe.classList.add('blur')
               this.modal.style.display = 'flex'
               this.playerTwo.point()
               this.scoreBoardPoints[1].innerText = this.playerTwo.points
               
               setTimeout(() => {
                  this.finish()
               }, 2000);  
            }

            if(!win[0] && Object.keys(this.playerTwo.moves).length == 5){
               this.finish()
               this.start()
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
      return [false]
   }

   finish(){
      this.playerOne.moves = {};
      this.playerTwo.moves = {};
   }

   toMenu({currentTarget}){
      location.reload()
   }

   continue({currentTarget}){
      this.start()
      this.whoIsPlaying.src = '/src/image/crossBlue.svg'
      this.playerTurn = true
      this.modal.style.display = 'none'
      this.ticTacToe.classList.remove('blur')
   }
}

export default GamePlay;