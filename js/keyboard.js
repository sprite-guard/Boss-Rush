var K_LEFT = 37,
    K_UP = 38,
    K_RIGHT = 39,
    K_DOWN = 40,
    K_RESET = 82,
    K_PAUSE = 80,
    K_BLINK = 32,
    DEBUG = true;

var CONTROLS = {
    left: 0,
    right: 0,
    up: 0,
    down: 0,
    action: 0,
    reset: 0
};

window.onkeydown = function(e){
  //player.key_down(e);
  switch(e.keyCode){
    case K_LEFT:
      CONTROLS.left = 1;
      break;
    case K_RIGHT:
      CONTROLS.right = 1;
      break;
    case K_UP:
      CONTROLS.up = 1;
      break;
    case K_DOWN:
      CONTROLS.down = 1;
      break;
    case K_BLINK:
      CONTROLS.blink = 1;
      break;
    case K_RESET:
      game.reset();
      break;
    case K_PAUSE:
      game.pause_unpause();
      break;
  }
};

window.onkeyup = function(e){
  switch(e.keyCode){
    case K_LEFT:
      CONTROLS.left = 0;
      break;
    case K_RIGHT:
      CONTROLS.right = 0;
      break;
    case K_UP:
      CONTROLS.up = 0;
      break;
    case K_DOWN:
      CONTROLS.down = 0;
      break;
    case K_BLINK:
      CONTROLS.blink = 0;
      break;
  }
};