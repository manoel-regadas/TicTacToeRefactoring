import '../styles/index.scss';
import Board from './board';
import NewPlayer from './newPlayer';

const isTrue = (arrayOne, arraytwo) => {
    let arrayCount = [];
    for(var i = 0; i < arraytwo.length; i++){
        let arrayTest = arrayOne.some(element => element == arraytwo[i]);
        if(arrayTest == true){
            arrayCount.push(true);
        }  
    };    
    return arrayCount.length < 3 ? false : true;    
}  

const ticTacToe = () => {
    //Board
    const place = document.querySelector('.border-container');
    const gameArea = new Board(place, 8);
    gameArea.render()
    
    const blocks = document.querySelectorAll('.area')  
    let turnCount = blocks.length;   
    
    const possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];    

    const playerOne = new NewPlayer('Manoel', true);
    const playerTwo = new NewPlayer('Fulano', false);
    
 
    const play = blocks.forEach(element => {
        element.addEventListener('click', () => {
            turnCount-- 
            
            if(playerOne.isPlaying && !element.classList.contains('done')){
                playerOne.moviments.push(element.dataset['area']);
                element.classList.add('xMark', 'done');
                playerOne.isPlaying = false;
                playerTwo.isPlaying = true
                
                if(turnCount <= 5){
                  var win = possibilities.some(el => isTrue(el, playerOne.moviments));
                  if(win){
                    window.alert('playerOne ganhou!')
                  } 
                }

            } else if(playerTwo.isPlaying && !element.classList.contains('done')){
                playerTwo.moviments.push(element.dataset['area']);
                element.classList.add('oMark', 'done');
                playerTwo.isPlaying = false;
                playerOne.isPlaying = true       
                
                if(turnCount <= 5){
                  var win = possibilities.some(el => isTrue(el, playerTwo.moviments));
                  if(win){
                    window.alert('playerTwo ganhou!')
                  } 
                }
            }
        })
    });
    
};
ticTacToe();