class Board {
    constructor(location, squares){
        this._location = location;
        this._squares = squares;
        this._isRendered = false; 
    }
    get location(){
        return this._location;
    }
    get squares(){
        return this._area;
    }
    render(){
        this._isRendered = true;
        let arrLi = [];
        for(let i = 0; i <= this._squares; i++){
            arrLi.push(`<li class="area" data-area="${i}"></li>`);
        }
        const li = arrLi.join(' ')
        this.location.innerHTML = `<ul class="board">${li}</ul>`;   
    }
    reset(){
        if(this._isRendered === true){
            console.log('ola')
            this._isRendered = false;
            this._location.innerHTML = ' ';
            this.render();
        }

    }
}

export default Board;