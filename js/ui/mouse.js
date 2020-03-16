/*
Mouse-based level editor

onclick: place or select a hitbox
right-click (event?): remove a hitbox
onwheel: scale selected hitbox
onmousemove: detect which hitbox(es) we are currently hovering over.

*/

game.mouse = {};

const DEF_R = 32;

game.mouse.update = function() {
  if(game.current_scene.boss) {
    game.mouse.persona = game.current_scene.boss.persona;
  }
}

game.mouse.draw = function() {
  game.draw.fillStyle = "#000000";
  if(game.mouse.active_object) {
    game.draw.fillRect(game.mouse.x-2,game.mouse.y-2,5,5);
    game.draw.strokeStyle = "#FFFF00";
    game.draw.lineWidth = 2;
    game.draw.beginPath();
    game.draw.ellipse(
      game.mouse.x
      , game.mouse.y
      , game.mouse.active_object.r
      , game.mouse.active_object.r
      , 0
      , 0
      , 2 * Math.PI
    );
    game.draw.stroke();
  }
}

game.canvas.onclick = function(e) {
  if(game.mouse.persona) {
    var abs_x = e.clientX;
    var abs_y = e.clientY;
    var x = abs_x - game.mouse.persona.x;
    var y = abs_y - game.mouse.persona.y;
    
    game.mouse.x = abs_x;
    game.mouse.y = abs_y;
    
    if(!game.mouse.active_object) {
      game.mouse.active_object = {x: x, y: y, r: DEF_R};
    }
    
    game.mouse.active_object.x = x;
    game.mouse.active_object.y = y;
    
    console.log(game.mouse.active_object);
  }
};

game.canvas.onwheel = function(e) {
  if(game.mouse.active_object) {
    game.mouse.active_object.r -= (e.deltaY / 100);
    console.log(game.mouse.active_object);
  }
};