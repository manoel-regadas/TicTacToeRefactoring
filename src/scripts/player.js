class Player{
    constructor(name){
        this._name = name; 
        this._points = 0;
        this._moves = {}
    }

    get name(){
        return this._name
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
        return this._moves = value
    }

    point(){
        this.points++
    }
}

export default Player;