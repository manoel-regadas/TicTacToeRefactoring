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
        for(let i = 0; i < 9; i++){
            this._place.insertAdjacentHTML('beforeend', 
                `<li class="area" data-area="${i}"></li>`
            )
        } 
        this._blocks = document.querySelectorAll('.area')
    }
}

export default Board;