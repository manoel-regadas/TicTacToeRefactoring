class Player {
    constructor(player){
        this._player = player;
        this._moviments = [];
        this._potuation = 0;
    }
    set moviments(value){
        this._moviments = value;
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
    modal(){
        this._potuation++
        const bodyPage = document.querySelector('.wrapper');
        const test = `<div class="modal">
                                <article>
                                <h2>${this._player} wins!</h2>
                                <div class="modal__button">continue</div>
                                </article>
                            </div>`;
        
        setTimeout( () => {
            bodyPage.innerHTML += test
            const modal = document.querySelector('.modal')                     
            const modalButton = document.querySelector('.modal__button');
            
            modalButton.onclick = () => {
                modal.parentNode.removeChild(modal)
            } 
        }, 100)                   
        this._moviments = [];
    }
};


export default Player; 