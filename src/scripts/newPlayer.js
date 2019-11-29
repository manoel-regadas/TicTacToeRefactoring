import Player from './player';

class NewPlayer extends Player {
    constructor(player, isPlaying){
        super(player, isPlaying);
    }
    test(){
        console.log('hello world')    
    }
} 

export default NewPlayer; 