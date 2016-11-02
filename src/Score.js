export default class ScoreBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.score = 0;
    }
    draw(context) {
        context.font = "20px Helvetica";
        context.fillStyle = "sandybrown"
        context.fillText(this.score, this.x, this.y);
    }
    render(context) {
        this.draw(context);
    }
}
