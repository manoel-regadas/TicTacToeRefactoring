class Board {
    constructor(location, squares, playerOne, playerTwo){
        this._location = location;
        this._squares = squares;
        this._turnCount = 10;
        this._playerOne = playerOne;
        this._playerTwo = playerTwo
        this._possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    }

    get possibilities(){
        this._possibilities
    }

    get playerOne(){
        return this._playerOne
    }
    
    get playerTwo(){
        return this._playerTwo
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
        this._location.innerHTML = `<ul class="board">${li}</ul>`;   
    }

    reset(){
        //this._isRendered = false;
        this._location.innerHTML = ' ';
        this._turnCount = 9;
        this._playerOne.moviments = [];
        this._playerTwo.moviments = [];
        this.render();
        setTimeout(() => {
            this.gamePlay();
        }, 100); 
    }

    gamePlay(){
        let playerOneIsplaying = true;
        let playerTwoIsplaying = false;
        const blocks = document.querySelectorAll('.area');   
        blocks.forEach(block => {
            block.addEventListener('click', () => {
                this._turnCount--
                
                if(playerOneIsplaying && !block.classList.contains('done')){
                    this._playerOne.moviments.push(block.dataset['area']);
                    console.log(this._playerOne.moviments)
                    block.classList.add('xMark', 'done');
                    playerOneIsplaying = false;
                    playerTwoIsplaying = true
                    this._turnCount--
                    
                    if(this._turnCount <= 5){
                      let win = this._possibilities.some(el => this.checkWinner(el, this._playerOne.moviments));
                      if(win){
                        this._playerOne.modal()
                        this.reset()                  
                      } 
                    }
                } else if(playerTwoIsplaying && !block.classList.contains('done')){
                    this._playerTwo.moviments.push(block.dataset['area']);
                    block.classList.add('oMark', 'done');
                    playerTwoIsplaying = false;
                    playerOneIsplaying = true       
                    this._turnCount--
                    
                    if(this._turnCount <= 5){
                      let win = this._possibilities.some(el => this.checkWinner(el, this._playerTwo.moviments));
                      if(win){
                        this._playerTwo.modal()
                        this.reset()                      
                      } 
                    }
                  }
            })
        })
        
    }
    
    checkWinner(arrayOne, arraytwo){
        let arrayCount = [];
        for(var i = 0; i < arraytwo.length; i++){
            let arrayTest = arrayOne.some(element => element == arraytwo[i]);
            if(arrayTest == true){
                arrayCount.push(true);
            }  
        };    
    return arrayCount.length < 3 ? false : true; 
    }

}

export default Board;