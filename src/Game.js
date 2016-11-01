import Paddle from './Paddle'
import {player1Keys, player2Keys} from './keys'
import Ball from './Ball'
import Board from './Board'

const gap = 10

export default class Game {
    constructor() {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';
        this.board = new Board(this.height, this.width)
        this.player1 = new Paddle(this.height, 5, 'turquoise', player1Keys)
        this.player2 = new Paddle(this.height, this.width - 10, 'turquoise', player2Keys)

        this.ball = new Ball();
    }


    render(context){

        this.board.render(this.context)
        this.player1.render(this.context)
        this.player2.render(this.context)

        this.ball.render(this.context, this.player1, this.player2, this.sounds)


    }

}
