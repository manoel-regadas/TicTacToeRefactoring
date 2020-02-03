import '../styles/index.scss';
import GamePlay from './gameplay';

const place = document.querySelector('.board')


const game = new GamePlay(place, 'manoel', 'Lola');
game.init()




