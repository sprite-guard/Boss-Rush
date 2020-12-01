var K_LEFT = 37,
    K_UP = 38,
    K_RIGHT = 39,
    K_DOWN = 40,
    K_RESET = 82,
    K_MENU = 27,
    K_PAUSE = 80,
    K_BLINK = 32,
    K_SPIRIT = 16,
    K_RECALL = 67,
    K_SLOW = 88,
    K_SHIELD = 67,
    K_INVULN = 73,
    K_TEST = 65,
    K_SKIP = 75,
    K_FAST = 70,
    K_MUTE = 77,
    K_VUP = 187,
    K_VDN = 189,
    DEBUG = true;

var CONTROLS = {
    left: 0,
    right: 0,
    up: 0,
    down: 0,
    blink: 0,
    spirit: 0,
    reset: 0,
    slow: 0,
    shield: 0,
    any: 0
};

window.onkeydown = function(e){
  // TODO make this unset itself
  CONTROLS.any = 1;
  switch(e.keyCode){
    case K_LEFT:
      CONTROLS.left = 1;
      e.preventDefault();
      break;
    case K_RIGHT:
      CONTROLS.right = 1;
      e.preventDefault();
      break;
    case K_UP:
      CONTROLS.up = 1;
      e.preventDefault();
      break;
    case K_DOWN:
      CONTROLS.down = 1;
      e.preventDefault();
      break;
    case K_BLINK:
      CONTROLS.blink = 1;
      e.preventDefault();
      break;
    case K_SPIRIT:
      CONTROLS.spirit = 1;
      e.preventDefault();
      break;
    case K_RECALL:
      player.spirit = false;
      e.preventDefault();
      break;
    case K_SLOW:
      CONTROLS.slow = 1;
      e.preventDefault();
      break;
    case K_SHIELD:
      CONTROLS.shield = 1;
      e.preventDefault();
      break;
    case K_RESET:
      game.current_scene.init({show_prescreen: false});
      game.unpause();
      e.preventDefault();
      break;
    case K_MENU:
      if(game.current_scene != scenes_list.menu) {
        game.return_to_menu();
        game.unpause();
      } else {
        game.quit();
      }
      e.preventDefault();
      break;
    case K_PAUSE:
      game.pause_unpause();
      e.preventDefault();
      break;
    case K_TEST:
      game.current_scene = scenes_list.test_scene;
      game.current_scene.init({show_prescreen: true});
      e.preventDefault();
      break;
    case K_INVULN:
      player.invulnerable = !player.invulnerable;
      e.preventDefault();
      break;
    case K_SKIP:
      // skip the prescreen
      game.current_scene.time_remaining = 0;
      e.preventDefault();
      break;
    case K_FAST:
      game.current_scene.slowdown_speed = 3;
      game.current_scene.slowdown = true;
      e.preventDefault();
      break;
    case K_MUTE:
      game.mute_unmute();
      e.preventDefault();
      break;
    case K_VUP:
      game.adjust_volume(0.1);
      e.preventDefault();
      break;
    case K_VDN:
      game.adjust_volume(-0.1);
      e.preventDefault();
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
    case K_SPIRIT:
      CONTROLS.spirit = 0;
      break;
    case K_SLOW:
      CONTROLS.slow = 0;
      break;
    case K_SHIELD:
      CONTROLS.shield = 0;
      break;
    case K_FAST:
      game.current_scene.slowdown_speed = 1;
      game.current_scene.slowdown = false;
  }
};