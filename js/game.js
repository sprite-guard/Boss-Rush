/* Endless Bossrush Game
 *
 * The idea for this game is an endless series of Zenzizenzic-style bosses
 * The goal is to procedurally generate bosses that are fair, but extremely difficult.
 * Sub goal is to create performant bullet-hell patterns in HTML Canvas.
 */
 
 /* Wrapping up 9/27/2017
  * 
  * The game is playable! Huzzah
  *
  * Player hit effect is implemented, but weak
  * we need to make it more visually impactful
  * it should also destroy bullets.
  */

var DEBUG = true,
    FR = document.getElementById("fr"),
    UPDATE = 60,
    MAX_UPDATE = 60;
    
var frame_counter = 0,
    last_time = performance.now(),
    accumulated_time = 0;

var game = {};

game.gamepads = [];
game.canvas = document.getElementById("game");
game.draw = game.canvas.getContext("2d");

game.fullscreen = function() {
  game.canvas.webkitRequestFullScreen();
  game.draw.clearRect(0, 0, game.canvas.width, game.canvas.height);
}

game.init = function() {
  controllers.init();
  game.canvas.setAttribute("ondblclick", "game.fullscreen()");
  game.keep_going = true;
  player.init();

  // game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);
  window.requestAnimationFrame(game.update)
}

game.spawners = [];

game.query_inputs = function() {

}

game.timecount = 0;
game.framecount = 1;
game.fps = 0;
game.ewam = 60;

var test_spawner = new BulletSpawner({
  x: 0,
  y: 100,
  heading: 0.5 * Math.PI,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#00FFFF",
    shell: "#0000FF",
    style: "gradient"
  },
  spin: 1,
  random_spread: 0.2,
  dx: 1,
  dy: 0,
  
  lifespan: 600,
  delay: 0
});

game.spawners.push(test_spawner);

var other_test_spawner = new BulletSpawner({
  x: 400,
  y: 100,
  heading: 0.6 * Math.PI,
  bullet_type: {
    yaw: 0.007,
    r: 8,
    color: "#FFBBFF",
    shell: "#FF0000",
    pit_size: 2,
    style: "gradient",
    speed: 2
  },
  spin: 1,
  random_spread: 0.4,
  
  lifespan: 600,
  delay: 0
});

game.spawners.push(other_test_spawner);

game.update = function() {
  game.width = game.canvas.width;
  game.height = game.canvas.height;

  game.draw.clearRect(0,0,game.canvas.width,game.canvas.height);
  
  
  player.update();
  game.check_collisions();

  for(var i = 0; i < game.spawners.length; i++) {
    game.spawners[i].update();
  }
  
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
    window.requestAnimationFrame(game.update);
  }
}

game.check_collisions = function() {
  var player_hb_squared = 0;
  
  for(var spawner = 0; spawner < game.spawners.length; spawner++) {
    var bullet_radius = game.spawners[spawner].bullet_type.r - 2;
    var bullet_radius_squared = (bullet_radius * bullet_radius);
    
    var striking_distance = bullet_radius_squared + player_hb_squared;

    for(var i = 0; i < game.spawners[spawner].all_bullets.length; i++) {
      
      var current_bullet = game.spawners[spawner].all_bullets[i];
      
      // collide with player
      var x_distance = Math.abs(current_bullet.x - player.x);
      var y_distance = Math.abs(current_bullet.y - player.y);
      var xsq = (x_distance * x_distance);
      var ysq = (y_distance * y_distance);
      
      if((xsq + ysq) < striking_distance) player.get_hurt();
      
      // collide with shield
      
      // maybe get bombed? I dunno if bombs are even a thing.
    }
  }
}

game.pause = function() {
  game.keep_going = false;
}

game.init();
