class Player {
    constructor(player, isPlaying){
        this._player = player;
        this._isPlaying = isPlaying;
        this._moviments = [];
        this._potuation = 0;
    }
    get player(){
        return this._player;
    }
    get isPlaying(){
        return this._isPlaying;
    }
    get moviments(){
        return this._moviments;
    }
    get potuation(){
        return this._potuation;
    }
    play(){
        if(this._isPlaying){
            return this._isPlaying = false;
        } else {
            return this._isPlaying = true;
        }
    }
};


export default Player; 