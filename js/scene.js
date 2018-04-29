function Scene(descriptor) {
  this.elements = descriptor.elements;
  this.boss_type = descriptor.boss;
  this.player = descriptor.player;
  
  this.special_init = descriptor.init;
  
  // internal
  this.slowdown_speed = 1;
  this.slowdown = false;
  
  this.init = function() {
    if(game.music) {
      game.music.pause();
      game.music.rewind();
    }
    this.special_init();
    
    if(this.boss_type) {
      this.boss = new Boss(this.boss_type);
      this.boss.init();
    }
    this.slowdown = false;
  };
  
  this.update = function() {
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].update(this.slowdown, this.slowdown_speed);
    }
    
    if(this.boss) {
      this.boss.update(this.slowdown, this.slowdown_speed);
    }
    
    if(this.player) {
      this.player.update(this.slowdown, this.slowdown_speed);
    }
  };
  
  this.draw = function() {
  
    // draw order:
    // UI
    // spirit wells + boss
    // player
    // bullets
    // should spirit be above bullets?
  
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].draw();
    }
    
    if(this.boss) {
      this.boss.draw_sprites();
    }
    
    if(this.player) {
      this.player.draw();
    }
    
    if(this.boss) {
      this.boss.draw_bullets();
    }
    
    if(player.dead) {
      game.draw.fillStyle = "#FF9966";
      game.draw.strokeStyle = "#FFFFAA";
      game.draw.lineWidth = 2;
      game.draw.font = "128px serif";
      game.draw.fillText("Ritual Failed",64,250);
      game.draw.beginPath();
      game.draw.strokeText("Ritual Failed",64,250);
      game.draw.stroke();
      game.draw.font = "100px serif";
      game.draw.fillText("press r to restart",64,450);
      game.draw.beginPath();
      game.draw.strokeText("press r to restart",64,450);
      game.draw.stroke();
    }
  };
  
  this.game_over = function() {
    player.spirit = false;
    player.dash_target = false;
    player.dead = true;
  }
  
  this.check_collisions = function() {
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
        } else {
          game.spawners[spawner].all_bullets[i].ungraze();
        }

        // collide with shield
        
        // maybe get bombed? I dunno if bombs are even a thing.
      }
    }
  }
}

var scenes_list = {};

var default_background = new Background("#002244");

var top_line = "Infinite",
    bottom_line = "Ritual";

scenes_list.menu = new Scene({
  elements: [
    default_background,
    new MenuItem({
      x: 10,
      y: 10,
      w: 160,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Test Boss"
    }),
    new Portal({
      x: 200,
      y: 32,
      h: 16,
      destination: "test_scene"
    }),
    
    {
      init: () => { return true; },
      update: () => { return true; },
      draw: () => {
        game.draw.fillStyle = "#006666";
        game.draw.strokeStyle = "#009999";
        game.draw.lineWidth = 2;
        game.draw.font = "128px serif";
        game.draw.fillText(top_line,32,250);
        game.draw.beginPath();
        game.draw.strokeText(top_line,32,250);
        game.draw.stroke();
        game.draw.fillText(bottom_line,32,400);
        game.draw.beginPath();
        game.draw.strokeText(bottom_line,32,400);
        game.draw.stroke();
      }
    }
  ],
  player: player,
  init: function() {
    player.init();
  }
});

scenes_list.test_scene = new Scene({
  elements: [ default_background ],
  init: function() {
    player.init();
  },
  boss: thaumiel,
  player: player
});