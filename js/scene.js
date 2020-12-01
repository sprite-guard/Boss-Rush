function Scene(descriptor) {
  this.elements = descriptor.elements;
  this.boss_type = descriptor.boss;
  this.player = descriptor.player;
  this.timeout = descriptor.timeout || Infinity;
  this.time_remaining = this.timeout;
  this.next_scene = descriptor.next_scene;
  this.no_reset = descriptor.no_reset;
  
  if(descriptor.load_elements) {
    this.load_elements = descriptor.load_elements;
  } else {
    this.load_elements = false;
  }

  if(descriptor.music) {
    if(typeof descriptor.music === "string") {
      this.music = new Sound(descriptor.music, true);
    } else if(descriptor.music.length > 0) {
      // TODO: multiple music tracks to choose from.
    } else {
      this.music = descriptor.music;
    }
  }

  this.special_init = descriptor.init || function() { return true; };

  // internal
  this.slowdown_speed = 1;
  this.slowdown = false;

  this.init = function() {
    this.time_remaining = this.timeout;
    if(game.music) {
      game.music.pause();
      if(!this.no_reset) {
        game.music.rewind();
      }
    }
    if(this.music) {
      game.music = this.music;
      game.music.pause();
      if(!this.no_reset) {
        game.music.rewind();
      }
      game.music.play();
    }
    this.special_init();
    
    if(this.next_scene) {
      this.next_scene.preload();
    }
    if(this.boss_type && !this.boss) {
      this.boss = new Boss(this.boss_type);
    }
    
    if(this.boss) {
      this.boss.init();
    }
    
    this.slowdown = false;
  };
  
  this.load_boss = function() {
    this.boss = new Boss(this.boss_type);
    this.boss.preload();
  }
  
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
    this.time_remaining--;
    
    if((this.time_remaining <= 0)&&this.next_scene) {
      game.current_scene = this.next_scene;
      game.current_scene.init();
    }
    
    if(game.music) {
      game.music.setvolume(game.volume);
    }
  };
  
  this.draw = function() {
  
    // draw order:
    // Load elements
    // HUD elements
    // boss
    // player
    // bullets
    // game over screen
    
    if(this.load_elements) {
      for(var i = 0; i < this.load_elements.length; i++) {
        this.load_elements[i].draw();
      }
    }
  
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
      TextElement.GAMEOVER.draw();
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
  
  this.preload = function() {
    if(this.next_scene) {
      // NB do not chain more than one "next scene"
      this.next_scene.preload();
    } else {
      this.load_boss(true);
    }
  }
}