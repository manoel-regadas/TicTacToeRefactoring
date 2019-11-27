class Board {
    constructor(location, squares){
        this._location = location;
        this._squares = squares;
    }
    get location(){
        return this._location;
    }
    get squares(){
        return this._area;
    }
    render(){
        let arrLi = [];
        for(let i = 0; i <= this._squares; i++){
            arrLi.push(`<li class="area" data-area="${i}"></li>`);
        }
        const li = arrLi.join(' ')
        this.location.innerHTML = `<ul class="board">${li}</ul>`;   
    }
}

export default Board;