import '../styles/index.scss';
import Board from './board';

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
    const allBlocks = document.querySelectorAll('.area');
    const gameArea = new Board(allBlocks);
    const blocks = gameArea.blocks();

    const possibilities = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    
    let turnCount = blocks.length;

   

    // const players = {
    //     firstPlayer: {isPlaying: true, marks:[],},
    //     secondPlayer: {isPlaying: false, marks:[],},
    // };

 
    // const play = blocks.forEach(element => {
    //     element.block.addEventListener('click', () => {
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