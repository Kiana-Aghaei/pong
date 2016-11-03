import Paddle from './Paddle'
import Ball from './Ball'
import Board from './Board'
import {p1Keys, p2Keys} from './keys'
import ScoreBoard from './Score'

const gap = 10

export default class Game {
    constructor() {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';
        this.board = new Board(this.height, this.width)
        this.p1 = new Paddle(this.height, gap - 5, '#bf4c00', p1Keys)
        this.p2 = new Paddle(this.height, this.width - gap, '#bf4c00', p2Keys)
        this.ball = new Ball()
        this.p1Score = new ScoreBoard(225, 85);
        this.p2Score = new ScoreBoard(75,85);
    }


    render(context){

        this.board.render(this.context);
        this.p1.render(this.context);
        this.p2.render(this.context);
        this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score );
        this.p1Score.render(this.context);
        this.p2Score.render(this.context);

    }

}
