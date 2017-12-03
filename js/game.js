/* Infinite Ritual
 *
 * The idea for this game is an endless series of bullet hell bosses
 * The goal is to procedurally generate bosses that are fair, but extremely difficult.
 * Sub goal is to create performant bullet-hell patterns in HTML Canvas.
 */

if(typeof nw == "undefined") nw = false;

var DEBUG = true,
    UPDATE = 60,
    MAX_UPDATE = 60,
    BGCOLOR = "#002244",
    BASE_W = 800,
    BASE_H = 600;

// performance testing
var frame_counter = 0,
    last_time = performance.now(),
    accumulated_time = 0;

var game = {};

game.fullscreen = function() {
  game.canvas.webkitRequestFullScreen();
  game.draw.clearRect(0, 0, game.canvas.width, game.canvas.height);
}

game.init = function() {
  // initialize game object
  if(DEBUG && nw) {
    nw.Window.get().showDevTools();
  }
  
  game.timer = 0;
  game.slowdown = 0;
  game.max_slowdown = 3;
  game.gamepads = [];
  game.canvas = document.getElementById("game");
  game.draw = game.canvas.getContext("2d");
  game.spawners = [];
  game.timecount = 0;
  game.framecount = 1;
  game.fps = 0;
  game.fr = 0;
  game.ewam = 60;
  game.draw_batch = [];
  
  if(nw) {
    game.window = nw.Window.get();
  }
  
  game.current_scene = scenes_list.menu;
  game.current_scene.init();

  // housekeeping
  controllers.init();
  game.keep_going = true;
  
  player.init();
  
  // game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);
  game.animation_request = window.requestAnimationFrame(game.update);
}

game.update = function() {
  game.width = game.canvas.width;
  game.height = game.canvas.height;
  
  game.current_scene.update();
  game.current_scene.draw();

  if(DEBUG) {
    UPDATE--;
    var current_time = performance.now();
    game.fps = 1000/(current_time - last_time);
    game.ewam = (game.ewam + game.fps)/2;
    last_time = performance.now();
    
    if(UPDATE == 0) {
      UPDATE = MAX_UPDATE;
      game.fr = Math.floor(game.ewam);
    }
    game.draw.fillStyle = "#0077AA";
    game.draw.font = "10px monospace";
    game.draw.fillText(game.fr,2,595);
  }
  
  if(game.keep_going) {
    game.animation_request = window.requestAnimationFrame(game.update);
  }
}

game.pause = function() {
  game.keep_going = false;
}

game.unpause = function() {
  game.keep_going = true;
  window.cancelAnimationFrame(game.animation_request);
  game.animation_request = window.requestAnimationFrame(game.update);
}

game.pause_unpause = function() {
  game.keep_going = !game.keep_going;
  game.animation_request = window.requestAnimationFrame(game.update);
}

game.return_to_menu = function() {
  game.current_scene = scenes_list.menu;
  game.current_scene.init();
}

game.quit = function() {
  if(nw) {
    var win = nw.Window.get();
    win.close();
  }
}

game.init();
