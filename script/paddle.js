//Paddle Class..(myPlayer || enemyPlayer)
class Paddle {
  constructor(side) {
    this.side = side;
    this.color = this.side == "left" ? "darkblue" : "yellow";
    this.width = 5;
    this.height = 18;
    this.x = this.side == "left" ? 15 : canvas.width - 15;
    this.y = canvas.height / 2 - this.height / 2;
    this.yv = 0;
    this.myplayer_score = 0;
    this.enemy_score = 0;
  };
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  update() {
    this.y += this.yv;
  };
  //Paddle bound limit..
  move_limits() {
    if (this.y < canvas.height - canvas.height) this.y = canvas.height - canvas.height;
    else if (this.y > canvas.height - this.height) this.y = canvas.height - this.height;
  }

  //My Player Paddle Functionalities..
  spike(ball, side) {
    this.ballTop = ball.y;
    this.ballBottom = ball.y + ball.height;
    this.ballLeft = ball.x;
    this.ballRight = ball.x + ball.width;
    this.paddleLeft = this.x;
    this.paddleRight = this.x + this.width;
    this.paddleTop = this.y;
    this.paddleBottom = this.y + this.height;

    //my Player spike..
    this.my_spike = function() {
      if (this.paddleRight >= this.ballLeft && this.paddleTop < this.ballBottom && this.paddleBottom > this.ballTop) {
        ball.xv = 4;
        ball.yv = Math.random() * 2 + Math.random() * (-3) + Math.random() * 3 + Math.random() * (-2);

        if (this.ballLeft <= canvas.width - canvas.width) {
          ball.xv = 0;
          ball.yv = 0;
         }
      } 
    }
    
    //enemy Player spike..
    this.enemy_spike = function() {
      if (this.paddleLeft <= this.ballRight && this.paddleTop < this.ballBottom && this.paddleBottom > this.ballTop) {
        ball.xv = -4;
        ball.yv = Math.random() * 2 + Math.random() * (-3) + Math.random() * 3 + Math.random() * (-2);

        if (this.ballRight >= canvas.width) {
          ball.xv = 0;
          ball.yv = 0;
        }
      }
    }

    //decision..
    return side === "left" ? this.my_spike() : this.enemy_spike();
  }
  
  //Enemy Paddle AI Movement..
  AI_movement(ball) {
    //handle paddle AI movement UP and DOWN..
    if (ball.xv === 4 && ball.x > canvas.width / 2 && this.y < ball.y) {
      this.yv = 2;
    }  
    if (ball.xv === 4 && ball.x > canvas.width / 2 && this.y > ball.y) {
      this.yv = -2;
    }   

    //handle AI collision on walls..
    if (this.y < canvas.height - canvas.height) {
      this.yv = 1;
    }
    if (this.y > canvas.height - this.height) {
      this.yv = -1;
    }
  }
  drawMyPlayerScore(ball) {
    ctx.fillStyle = "white";
    ctx.font = "12px monospace";
    ctx.fillText(this.myplayer_score, (canvas.width / 4) * 1, 10);

    if (this.myplayer_score > 11) {
      ctx.fillText("You Win!", (canvas.width / 2) * 0.8, canvas.height / 2);
      ball.start();
    }
    ctx.fill();
  }
  drawEnemyPlayerScore(ball) {
    ctx.fillStyle = "white";
    ctx.font = "12px monospace"; 
    ctx.fillText(this.enemy_score, (canvas.width / 4) * 3, 10);

    if (this.enemy_score > 11) {
      ctx.fillText("Enemy Player Wins!", (canvas.width / 2 - canvas.width / 4) * 1.2, canvas.height / 2);
      ball.start();
    } 
    ctx.fill();
  }
}