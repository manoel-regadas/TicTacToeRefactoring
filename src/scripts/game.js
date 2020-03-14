import GamePlay from './gameplay';



class Game{
    constructor(playerOneInput, playerTwoInput){
        this.gamePlay; 
        this.toggle = document.querySelector('.ticTacToe__toggle');
        this.start = document.querySelector('.ticTacToe__button'); 
        this.playerOneInput = playerOneInput;
        this.playerTwoInput = playerTwoInput;
        this.variables()
    
    }

    variables(){
        this.ticTacToe = document.querySelector('.ticTacToe')
        this.mainArea = document.querySelector('.ticTacToe__board');
        this.boardGame = document.querySelector('.ticTacToe__boardGame');
        this.menu = document.querySelector('.ticTacToe__menu')
        this.header = document.querySelector('.ticTacToe__header')
        this.title = document.querySelector('.ticTacToe__title')
        this.menuBox = document.querySelector('.ticTacToe__players')
        this.darkText = document.querySelector('.ticTacToe__smallText');
        this.footer = document.querySelector('.ticTacToe__footer')
        this.scoreBoardNames = document.querySelectorAll('.scoreBoard__name')
        this.scoreBoardPoints = document.querySelectorAll('.scoreBoard__points')
        this.whoIsPlayingSymbol = document.querySelector('.ticTacToe__nowPlayingSymbol')
        this.modal = document.querySelector('.modal')
        this.modalButtons = document.querySelectorAll('.modal__button')
        this.sybolsModal = document.querySelectorAll('.modal__symbol')
    }

    init(){

        this.events()
        this.letteringAnimation(this.title)
        this.menuAnimationOrder()

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
            nameOne = 'Too lazy to put the name One'}
        if(!this.playerTwoInput.value){
            nameTwo = 'Too lazy to put the name Two'}
        
        this.gamePlay = new GamePlay(
            this.ticTacToe,
            this.mainArea, 
            nameOne,
            nameTwo,
            this.scoreBoardPoints,
            this.whoIsPlayingSymbol,
            this.modal,
            this.modalButtons,
            this.sybolsModal
        ) 

        this.scoreBoardNames[0].innerText = this.gamePlay.playerOne.name
        this.scoreBoardNames[1].innerText = this.gamePlay.playerTwo.name
        this.closeMenu()   
        setTimeout(()=>{
            this.gamePlay.start()
        },1000)
    }

    letteringAnimation(value){
        let splitText = value.innerHTML.split('');
        value.innerHTML = ' ';
        splitText.forEach((element) => {
            if(element === ' '){
                element = '&nbsp'
            }
            value.insertAdjacentHTML('beforeend', `<span>${element}</span>`)    
        })
    } 

    menuAnimationOrder(){
        setTimeout(()=>{
            this.title.style.display = 'block'
        }, 200)
    }

    closeMenu(){
        this.menuBox.classList.add('close')
        this.footer.classList.add('close')
        this.header.classList.add('close')
        
        setTimeout(()=>{
            this.menu.style.display = 'none'
            this.boardGame.classList.add('show')
        },1000)
        
    }

    updateScoreBoart(){

    }
}

export default Game;