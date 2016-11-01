export default class Paddle {

  constructor(boardHeight, x, color, keys) {
      this.width = 5;
      this.height = 50;
      this.speed = 5;
      this.color = color;
      this.x = x;
      this.y = (boardHeight /2) - (this.height / 2);
      this.maxHeight = boardHeight;
      this.keys = keys;
      document.addEventListener('keydown', event => this.keyListener(event));
  }

keyListener(event) {
  switch(event.keyCode) {
    case this.keys.up:
      this.moveUp();
      break;
    case this.keys.down:
      this.moveDown();
      // console.log('hi');

      break;
        default: return;
  }
}

  moveUp() {
    // if(this.y - this.speed >= 0) {
    if (this.y >= 3) {
      this.y -= this.speed;
    }
  }

moveDown() {
  // if (this.y + this.height + this.speed <= this.boardHeight) {
  if (this.y <= 97){
    this.y += this.speed;

}
}

scoreMethod() {
   this.score += 1;
}

  render(context) {

    context.fillStyle = this.color;
    context.fillRect(
      this.x, this.y,
      this.width, this.height
    )
  }
}
