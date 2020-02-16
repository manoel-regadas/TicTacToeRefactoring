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
        let allblocks = []
        for(let i = 0; i < 9; i++){
            allblocks.push(`<li class="ticTacToe__area" data-area="${i}"></li>`) 
        } 
        this.place.insertAdjacentHTML('beforeend', 
                    `<div class="ticTacToe__boardGame">
                        <div class="ticTacToe__boardContainer">
                            <div class="ticTacToe__board">${allblocks.join('')}</div>
                            <h1 class="ticTacToe__nowPlaying">Now Playing</h1>
                            <aside class="scoreBoard">
                                <div class="scoreBoard__scores">
                                    <div class="scoreBoard__playerOnePoints">
                                        <p class="scoreBoard__name">Player One</p>
                                        <p class="scoreBoard__points">0</p>
                                    </div>
                                    <div class="scoreBoard__playerTwoPoints">
                                        <p class="scoreBoard__name">Player Two</p>
                                        <p class="scoreBoard__points">0</p>
                                    </div>
                                </div>
                            </aside>
                        </div>  
                    </div>`
        );
        this._blocks = document.querySelectorAll('.ticTacToe__area')
    }
}

export default Board;