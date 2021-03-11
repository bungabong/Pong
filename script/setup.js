//The displayer...
(function setup() {
  ball = new Ball();
  myPlayer = new Paddle("left");
  enemyPlayer = new Paddle("right");
  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Court Design..
    user_interface.design(ctx);

    //Ball Functionalities..
    ball.draw();
    ball.update();
    ball.siderules(enemyPlayer, myPlayer);

    //My Player Functionalities..
    myPlayer.draw();
    myPlayer.update();
    myPlayer.spike(ball, "left");
    myPlayer.move_limits();
    myPlayer.drawMyPlayerScore(ball);

    //Enemy Player Functionalities..
    enemyPlayer.draw();
    enemyPlayer.spike(ball, "right");
    enemyPlayer.update();
    enemyPlayer.AI_movement(ball); 
    enemyPlayer. drawEnemyPlayerScore(ball);
    
    //KeyBoard Controller..
    user_interface.controls(myPlayer);
    
  }, 15);
})();