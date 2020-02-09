import GamePlay from './gameplay';
const place = document.querySelector('.ticTacToe__board')


class Menu{
    constructor(playerOneInput, playerTwoInput, place){
        this.gamePlay; 
        this.toggle = document.querySelector('.ticTacToe__toggle');
        this.start = document.querySelector('.ticTacToe__button'); 
        this.playerOneInput = playerOneInput;
        this.playerTwoInput = playerTwoInput;
        this.place = place;
        this.title = document.querySelector('.ticTacToe__title')
        this.darkText = document.querySelector('.ticTacToe__smallText');
    }

    init(){
        this.events()
        this.letteringAnimation(this.title)
        this.letteringAnimation(this.darkText)
    }

    events(){
        this.toggle.addEventListener('click', this.intoTheDark.bind(this))
        this.start.addEventListener('click', this.goToGamePlay.bind(this))
    }

    intoTheDark({currentTarget}){
        if(!currentTarget.classList.contains('dark')){
            currentTarget.classList.add('dark')
        } else {
            currentTarget.classList.remove('dark')
        }
    }

    goToGamePlay(){
        let nameOne = this.playerOneInput.value
        let nameTwo = this.playerTwoInput.value
        
        if(!this.playerOneInput.value){
            nameOne = 'lazy to put the name One'
        }
        if(!this.playerTwoInput.value){
            nameTwo = 'lazy to put the name Two'
        }
        this.gamePlay = new GamePlay(this.place, nameOne, nameTwo)
        this.gamePlay.start()
    }

    letteringAnimation(value){
        let splitText = value.innerHTML.split('');
        value.innerHTML = ' ';
        splitText.forEach((element, index) => {
            setTimeout(()=>{
                if(element === ' '){
                    element = '&nbsp'
                }
                value.insertAdjacentHTML('beforeend', 
                    `<span>${element}</span>`
                )
            } , index * 20)
            
        })
    } 


}

export default Menu;