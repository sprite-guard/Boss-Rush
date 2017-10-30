/* Endless Bossrush Game
 *
 * The idea for this game is an endless series of Zenzizenzic-style bosses
 * The goal is to procedurally generate bosses that are fair, but extremely difficult.
 * Sub goal is to create performant bullet-hell patterns in HTML Canvas.
 */
 
 /* Leaving off 10/4/2017
  * Spirit now works, dash target has a stronger visual presence.
  */

var DEBUG = true,
    FR = document.getElementById("fr"),
    UPDATE = 60,
    MAX_UPDATE = 60,
    BGCOLOR = "#002244";
    
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
  game.ewam = 60;
  game.draw_batch = [];
  
  game.current_scene = scenes_list.menu;
  game.current_scene.init();

  // housekeeping
  controllers.init();
  game.canvas.setAttribute("ondblclick", "game.fullscreen()");
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
      FR.innerHTML = Math.floor(game.ewam);
    }
  }
  
  if(game.keep_going) {
    game.animation_request = window.requestAnimationFrame(game.update);
  }
}

game.pause = function() {
  game.keep_going = false;
}

game.pause_unpause = function() {
  game.keep_going = !game.keep_going;
  window.requestAnimationFrame(game.update);
}

game.reset = function() {
  window.cancelAnimationFrame(game.animation_request);
  game.init();
}

game.init();
