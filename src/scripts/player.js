class Player{
    constructor(name){
        this._name = name; 
        this._points = 0;
        this._moves = [];
    }
    get points(){
        return this._points
    }

    set points(value){
        this._points = value;
    }
    
    get moves(){
        return this._moves;
    }

    set moves(value){
        this._moves.push(value)
    }
}

export default Player;