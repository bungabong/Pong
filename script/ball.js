//Ball Class.. (the ball)
class Ball {
  constructor() {
    this.width = 5;
    this.height = 5;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height / 2 - this.height / 2;
    this.xv = 3;
    this.yv = 0;
    this.score = 0;
  };
  draw() {
    ctx.fillStyle = "Whitesmoke";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };  
  update() {
    this.x += this.xv;
    this.y += this.yv;
  }
  start() {
    this.xv = 0;
    this.yv = 0;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height / 2 - this.height / 2;
    document.addEventListener("click", () => {
        this.xv = [4, -4][Math.round(Math.random())];
        this.yv = 0;
      
    })
  }
  siderules(enemyPlayer, myPlayer) {
    //collision on bottom wall..
    if (this.y + this.height >= canvas.height) {
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
    if (this.x >= canvas.width - this.width + 3.2) {
      myPlayer.myplayer_score++;
    } 
   if (this.x >= canvas.width - this.width + 3.21) {
    this.start(); 
  }
}
}
