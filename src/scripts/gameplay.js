import Board from './board';
import Player from './player';


class GamePlay {
    constructor(place, playerOne, playerTwo){
        this._board = new Board(place)
        this._playerOne = new Player(playerOne)
        this._playerTwo = new Player(playerTwo)
        this.playerTurn = true;
        this._possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    }
    get board(){
        return this._board
    }
    
    get playerOne(){
        return this._playerOne
    }
    
    get playerTwo(){
        return this._playerTwo
    }
    
    get getAllBlocks(){
        return this._board.blocks
    }

    get allMoves(){
         return [this.playerOne.moves, this.playerTwo.moves]
    }

    init(){
        this.board.place.innerHTML = ' ';
        this.board.render();
        this.events()
    }

    events(){
        
        this.getAllBlocks.forEach(element => {
            element.addEventListener('click', this.play.bind(this))
        });


    }

    play({currentTarget}){
        if(this.playerTurn && !currentTarget.classList.contains('clicked')){
            this.playerTurn = false
            this.playerOne.moves.push(parseInt(currentTarget.dataset.area))
            currentTarget.classList.add('xMark', 'clicked')
            
            if(this.allMoves[0].length >= 3){
                this.allMoves[0].sort()
                    
            }
        } 
        
        else if(!this.playerTurn && !currentTarget.classList.contains('clicked')) {
            this.playerTurn = true
            this.playerTwo.moves.push(parseInt(currentTarget.dataset.area))
            currentTarget.classList.add('oMark', 'clicked')

        }
    }
}

export default GamePlay;