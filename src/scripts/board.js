class Board {
    constructor(place){
        this._place = place;
        this._blocks;
    }

    get place(){
        return this._place
    }

    get blocks(){
        return this._blocks
    }
    
    set place(value){
        this._place = value
    }

    render(){
        this._place.innerHTML = ' '; 
        let allblocks = ['<div class="line"></div>']
        for(let i = 0; i < 9; i++){
            allblocks.push(`<li class="ticTacToe__area" data-area="${i}"></li>`) 
        } 
        this.place.insertAdjacentHTML('beforeend', allblocks.join(''));
        this._blocks = document.querySelectorAll('.ticTacToe__area')
    }
}

export default Board;