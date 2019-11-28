import '../styles/index.scss';
import Board from './board';
import Player from './player';

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
    console.log(blocks.dataSet('1'))

    const possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];    
    
    // const playerOne = new Player('Manoel', false); 
    // console.log(playerOne.play());
   
    

    const players = {
        firstPlayer: {isPlaying: true, marks:[],},
        secondPlayer: {isPlaying: false, marks:[],},
    };

 
    // const play = blocks.forEach(element => {
    //     element.dataset.addEventListener('click', () => {
    //         turnCount-- 
            
    //         if(players.firstPlayer.isPlaying && !element.isClicked){
    //             let selectedBlocksPlayerOne = element.block.dataset.area; 
    //             let playerOneJogadas = players.firstPlayer.marks
                
    //             playerOneJogadas.push(selectedBlocksPlayerOne); 
                
    //             element.block.classList.add('xMark')
    //             players.firstPlayer.isPlaying = false;
    //             players.secondPlayer.isPlaying = true;
    //             element.isClicked = true
                
    //             if(turnCount <= 5){
    //               var win = possibilities.some(el => isTrue(el, playerOneJogadas));
    //               if(win){
    //                 console.log(element.block)
    //                 window.alert('playerOne ganhou!')
    //               } 
    //             }

    //         } else if(players.secondPlayer.isPlaying && !element.isClicked){
    //             let selectedBlocksPlayerTwo = element.block.dataset.area;
    //             let playerTwoJogadas = players.secondPlayer.marks
                 
    //             playerTwoJogadas.push(selectedBlocksPlayerTwo) 

    //             element.block.classList.add('oMark')
    //             players.firstPlayer.isPlaying = true;
    //             players.secondPlayer.isPlaying = false;
    //             element.isClicked = true;      
                
    //             if(turnCount <= 5){
    //               var win = possibilities.some(el => isTrue(el, playerTwoJogadas));
    //               if(win){
                      
    //                   console.log(element.block)
    //                 window.alert('playerTwo ganhou!')
    //               } 
    //             }
    //         }
    //     })
    // });
    
};
ticTacToe();