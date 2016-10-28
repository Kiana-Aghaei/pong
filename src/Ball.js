const size = 60
export default class Ball {
  constructor() {
    this.x = 150;
    this.y = 50;
    this.vy = Math.floor(Math.random() * 12 - 6); // y direction
    this.vx = (7 - Math.abs(this.vy)); // x direction
    this.speed = 5;
    this.size = size;
  }

drawBall(context) {
  context.fillStyle = "white"
  context.beginPath();
  context.arc(this.x, this.y, 5, 0, Math.PI * 2, true);
  context.closePath();
}

ballReset(){
  this.x = 150
  this.y = 75
}

Goal() {

}
// point() {
//   if (this.x >= 300 || this.x <= 0) {
//     this.vx *= -1
//     this.vy
//     this.ballReset()
//   }
}

ballBounce() {
  if (this.y <= 0 + this.size || this.y >= 150 - this.size) {
         this.vy *= -1
    }
  if (this.x <= 0 + this.size || this.x >= 300 - this.size) {
           this.vx *= -1
    }

}
render(context) {
    this.drawBall(context)
    this.x += this.vx;
    this.y += this.vy;
    this.ballBounce()
}
}
