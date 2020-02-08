import GamePlay from './gameplay';
const place = document.querySelector('.ticTacToe__board')


class Menu{
    constructor(playerOneName, playerTwoName, toggle, start, place){
        this.gamePlay = new GamePlay(place, playerOneName, playerTwoName); 
        this._toggle = toggle; 
        this._start = start; 
    }
    get toggle(){
        return this._toggle
    }
    get start(){
        return this._start
    }

    events(){
        this.toggle.addEventListener('click', ({currentTarget})=>{
            if(!currentTarget.classList.contains('dark')){
                currentTarget.classList.add('dark')
            } else {
                currentTarget.classList.remove('dark')
            }
        })
    }

}

export default Menu;