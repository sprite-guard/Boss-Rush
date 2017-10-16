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
  /*
  if(game.timer <= 0) {
    game.timer = game.slowdown;
    
    game.draw.fillStyle = BGCOLOR;
    game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);
    
    game.check_collisions();
  
    player.update();

    for(var i = 0; i < game.spawners.length; i++) {
      game.spawners[i].update();
    }
  } else {
    game.timer--;
    
    game.draw.fillStyle = BGCOLOR;
    game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);
    player.update(true);
    
    for(var i = 0; i < game.spawners.length; i++) {
      game.spawners[i].update(true);
    }
  }
  
  if(player.dash_target) {
    game.slowdown = game.max_slowdown;
  } else {
    game.slowdown = 0;
  }
  */
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

game.check_collisions = function() {
  var player_hb_squared = 0;
  var player_gb_squared = player.graze_radius * player.graze_radius;
  
  for(var spawner = 0; spawner < game.spawners.length; spawner++) {
    var bullet_radius = game.spawners[spawner].bullet_type.r - 2;
    var bullet_radius_squared = (bullet_radius * bullet_radius);
    
    var striking_distance = bullet_radius_squared + player_hb_squared;
    var grazing_distance = bullet_radius_squared + player_gb_squared;

    for(var i = 0; i < game.spawners[spawner].all_bullets.length; i++) {
      
      var current_bullet = game.spawners[spawner].all_bullets[i];
      
      // collide with player
      var x_distance = Math.abs(current_bullet.x - player.x);
      var y_distance = Math.abs(current_bullet.y - player.y);
      var xsq = (x_distance * x_distance);
      var ysq = (y_distance * y_distance);
      
      if((xsq + ysq) < striking_distance) player.get_hurt();
      
      if((xsq + ysq) < grazing_distance) {
        game.spawners[spawner].all_bullets[i].graze();
        player.graze();
      }
      
      // collide with shield
      
      // maybe get bombed? I dunno if bombs are even a thing.
    }
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
