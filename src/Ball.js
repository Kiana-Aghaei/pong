const size = 5;

export default class Ball {
  constructor(height, width,) {
    this.x = 150;
    this.y = 75;
    this.vy = Math.floor(Math.random() * 12 - 6);
    this.vx = (7 - Math.abs(this.vy));
    this.speed = 5;
    this.size = 5;

  }

drawBall(context) {
  context.fillStyle = "white"
  context.beginPath();
  context.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
  context.closePath();
}

ballReset(){
  this.x = 150
  this.y = 75
  this.vy = -Math.floor(Math.random() * 12 - 6);
  this.vx *= -1;
}

point() {
  if (this.x >= 300 || this.x <= 0) {
    this.ballReset()
  }
}
score(p1Score, p2Score){
       if(this.x <= 0 + this.size){
           this.ballReset();
           p1Score.score++;
       } else if(this.x >= 300){
           this.ballReset();
           p2Score.score++;
       }
   }

ballBounce() {
  if (this.y <= 0 + this.size || this.y >= 150 - this.size) {
        this.vy *= -1
        const Sound3 = new Audio('../sounds/pong-03.wav')
        Sound3.play()
    }
  // if (this.x <= 0 + this.size || this.x >= 300 - this.size) {
  //       this.vx *= -1
  //   }

}


paddleCollision(p1, p2){
   if(this.vx > 0) {
       const inRightEnd = this.x  >= p2.x && this.x + this.size >= p2.x + p2.width;

       if (inRightEnd) {
           if (this.y >= p2.y && this.y <= (p2.y + p2.height)) {
              //  this.x = p2.x - this.size;
               this.vx *= -1;
               const Sound1 = new Audio('../sounds/pong-01.wav')
               Sound1.play();
           }
       }
   } else {
       const inLeftEnd = this.x <= (p1.x + p1.width * 2);

       if(inLeftEnd) {
           if(this.y >= p1.y && this.y <= (p1.y + p1.height)){
              // this.x = p1.x + p1.width + this.size;
               this.vx *= -1;
               const Sound2 = new Audio('../sounds/pong-02.wav')
               Sound2.play();
           }
       }
   }
}


render(context, p1, p2, p1Score, p2Score) {
    this.point()
    this.x += this.vx;
    this.y += this.vy;
    this.ballBounce()
    this.paddleCollision(p1, p2);
    this.score(p1Score, p2Score);
    this.drawBall(context)

  }
}
