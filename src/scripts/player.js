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
    set isPlaying(isPlaying){
        return this._isPlaying = isPlaying; 
    }
    play(){
        if(this._isPlaying){
            return this._isPlaying = false;
        } else {
            return this._isPlaying = true;
        }
    }
    modal(){
        this._potuation++
        const bodyPage = document.querySelector('.wrapper');
        const test = `<div class="modal">
                                <article>
                                <h2>${this._player} wins!</h2>
                                <div class="modal__button">continue</div>
                                </article>
                            </div>`;
        
        bodyPage.innerHTML += test                   
        
        const modal = document.querySelector('.modal')                     
        const modalButton = document.querySelector('.modal__button');
        
        modalButton.onclick = () => {
            modal.parentNode.removeChild(modal)
        } 
        this._moviments = [];
    }
};


export default Player; 