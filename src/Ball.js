const size = 5;
export default class Ball {
  constructor(height, width) {
    this.x = 150;
    this.y = 75;
    this.vy = Math.floor(Math.random() * 12 - 6);
    this.vx = (7 - Math.abs(this.vy));
    this.speed = 5;
    this.size = size;
    this.height = height;
    this.width = width;
  }

drawBall(context) {
  context.fillStyle = "white"
  context.beginPath();
  context.arc(this.x, this.y, 5, 0, Math.PI * 2, true);
  context.closePath();
}
ballBounce() {
  if (this.y <= 0 + this.size || this.y >= 150 - this.size) {
         this.vy *= -1
    }
  if (this.x <= 0 + this.size || this.x >= 300 - this.size) {
           this.vx *= -1
    }

}

Sounds(context) {
const sound1 = new Audio("sounds/pong-01.wav")
const sound2 = new Audio("sounds/pong-02.wav")
const sound3 = new Audio("sounds/pong-03.wav")

var soundArray = [sound1, sound2, sound3];
var rand = Math.random();
var rand = rand * soundArray.length;
var rand = Math.floor(rand);
soundArray[rand].play();
}

paddleCollision(player1, player2) {
  if (this.vx > 0) {
    const inRightEnd =
    player2.x > this.x + this.size &&
    player2.x > this.x - this.vx + this.size;
    if (inRightEnd) {
      const collisionDiff = this.x + this.size - player2.x;
      const k = collisionDiff / this.vx;
      const y = this.vy * k + (this.y - this.vy);
      const hitRightPaddle = y >= player2.y && y + this.size <= player2.y + player2.height;
      if (hitRightPaddle) {
        this.x = player2.x - this.size;
        this.y = Math.floor(this.y - this.vy + this.vy * k);
        this.vx = -this.vx * 1.10;
        this.Sounds();
        if (this.vx > 10) {
          this.vx = 10;
        }
      }
    }
  } else {
    const inLeftEnd = player1.x + (player1.width) >= this.x;
    if (inLeftEnd) {
      // (player1.x + player1.width);
      const collisionDiff = player1.x + player1.width;
      const k = collisionDiff / -this.vx;
      const y = this.vy * k + (this.y - this.vy);
      const hitLeftPaddle = y >= player1.y && y + this.size <=
      player1.y + player1.height;
      if (hitLeftPaddle) {
        this.x = player1.x + player1.width;
        this.y = Math.floor(this.y - this.vy + this.vy * k);
        this.vx = -this.vx * 1.10;
        this.Sound();
        if (this.vx > 10) {
          this.vx = 10;
        }
      }
    }
  }
}
ballReset(){
  this.x = this.width/2;
  this.y = this.height/2;
  this.vy = -Math.floor(Math.random() * 12 - 6);
  this.vx = -(7 - Math.abs(this.vy));
  this.vx *= -1;
}

point() {
  if (this.x >= 300 || this.x <= 0) {
    this.vx *= -1
    this.vy
    this.ballReset()
  }
}


render(context, player1, player2, Sounds) {
    this.drawBall(context)
    this.x += this.vx;
    this.y += this.vy;
    this.ballBounce()
    this.paddleCollision(player1, player2);

    this.Sounds(context)
    // this.score(p1Score, p2Score);
}
}
