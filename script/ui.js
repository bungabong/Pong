let user_interface = {
  //keyboard controller..
  controls: function(myPlayer) {
    window.addEventListener("keydown", (evt) => {
      switch(evt.keyCode) {
        case 38:      
            myPlayer.yv = -2;
        break;
        case 40:
            myPlayer.yv = 2;
        break;
            }
         });

  window.addEventListener("keyup", (evt) => {
      switch(evt.keyCode) {
        case 38:
          if (myPlayer.yv < 0) {
            return myPlayer.yv = 0;
         }
       break;
       case 40:
         if (myPlayer.yv > 0) {
           return myPlayer.yv = 0;
       }
       break;
     }
   }); 
  }, 
  //Court Design..
  design: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 2, canvas.height - canvas.height);
    ctx.lineTo(canvas.width / 2 - 2, canvas.height);
    ctx.strokeStyle =  "darkslateblue";
    ctx.stroke();
  }
}



