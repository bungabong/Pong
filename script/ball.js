//Ball Class.. (the ball)
class Ball {
  constructor(radius, x, y, xv, yv, score) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.score = score;
  };
  draw() {
  	ctx.beginPath();
		ctx.fillStyle = 'orange';
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fill();
  };  
  update() {
    this.x += this.xv;
    this.y += this.yv;
  }
  start() {
    this.xv = 0;
    this.yv = 0;
    this.x = canvas.width / 2 - this.radius / 2;
    this.y = canvas.height / 2 - this.radius / 2;
    setTimeout(() => {
      this.xv = [4, -4][Math.round(Math.random())];
      this.yv = 0;
    },2000);
  }
  siderules(enemyPlayer, myPlayer) {
    //collision on bottom wall..
    if (this.y + this.radius >= canvas.height) {
      this.yv = -1;
    }
    //collision on top wall..
    if (this.y <= canvas.height - canvas.height) {
      this.yv = 1;
    }

    //collision on left wall..
    if (this.x <= canvas.width - canvas.width - 1.6) {
      enemyPlayer.enemy_score++;
      console.log(enemyPlayer.enemy_score)
      this.start();
    }


    //collision on right wall..
    if (this.x >= canvas.width - this.radius + 3.2) {
      myPlayer.myplayer_score++;
    } 
   if (this.x >= canvas.width - this.radius + 3.21) {
    this.start(); 
    }
  }
}
