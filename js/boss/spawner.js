function BulletSpawner(parent,descriptor) {
  this.bullet_type = descriptor.bullet_type;
  this.initial_heading = descriptor.heading;
  this.parent = parent;
  
  
  this.sync = descriptor.sync || 0;
  this.lifespan = descriptor.lifespan + this.sync;
  
  // optional
  this.source_homes = descriptor.sources || [{x: descriptor.x, y: descriptor.y, heading: descriptor.heading}];
  this.aimed = descriptor.aimed;
  this.spin = descriptor.spin || 0;
  this.delay = descriptor.delay || 0;
  this.target = descriptor.target || player;
  // randomize everything
  this.random_spread = descriptor.random_spread || 0;
  this.yaw_jitter = descriptor.yaw_jitter || 0;
  this.speed_jitter = descriptor.speed_jitter || 0;
  // simplify ring-source spawners
  this.x = descriptor.x || 0;
  this.y = descriptor.y || 0;
  // behaviors
  this.behaviors = descriptor.behaviors || [];
  this.parameters = descriptor.parameters || {};
  this.immediate = descriptor.immediate || false;
  
  // internal
  this.sources = [];
  this.all_bullets = [];
  this.heading = this.initial_heading;
  this.is_new = true;
  
  this.ungraze_graphics_buffer = document.createElement("canvas"); // NB not in DOM
  this.ungraze_draw_buffer = ungraze_graphics_buffer.getContext("2d");
  this.graze_graphics_buffer = document.createElement("canvas");
  this.graze_draw_buffer = graze_graphics_buffer.getContext("2d");
  
  this.init = function(){
    this.all_bullets = [];
    this.life_remaining = this.lifespan;
    if(this.immediate) {
      this.timer = this.sync;
    } else {
      this.timer = (this.delay + this.sync);
    }
    this.alive = true;
    
    // initialize every source
    for(var i = 0; i < this.source_homes.length; i++) {
      this.sources[i] = {};
      this.sources[i].x = this.source_homes[i].x || this.x;
      this.sources[i].y = this.source_homes[i].y || this.y;
      this.sources[i].heading = this.source_homes[i].heading;
    }
    
    // draw the buffered sprite
    var d = this.bullet_type.r * 2;
    this.ungraze_graphics_buffer.width = d;
    this.ungraze_graphics_buffer.height = d;
    this.ungraze_draw_buffer.clearRect(0,0,d,d);
    
    this.graze_graphics_buffer.width = d;
    this.graze_graphics_buffer.height = d;
    this.graze_draw_buffer.clearRect(0,0,d,d);
    
    this.ungraze_draw_buffer.beginPath();
  	
    if(this.style == "hollow") {
      this.ungraze_draw_buffer.lineWidth = 3;
      this.ungraze_draw_buffer.strokeStyle = this.current_shell;
      this.ungraze_draw_buffer.stroke();
    } else if(this.style == "solid") {
      this.ungraze_draw_buffer.lineWidth = 3;
      this.ungraze_draw_buffer.fillStyle = this.color;
      this.ungraze_draw_buffer.fill();
      this.ungraze_draw_buffer.strokeStyle = this.current_shell;
      this.ungraze_draw_buffer.stroke();
    } else if(this.style == "gradient") {
      if(this.debug) console.log(this.x, this.y, this.r);
      var gradient = this.ungraze_draw_buffer.createRadialGradient(this.x, this.y, this.r,
                                                    this.x, this.y, this.pit_size );
      gradient.addColorStop(0, this.current_shell);
      gradient.addColorStop(1, this.color);
      this.ungraze_draw_buffer.fillStyle = gradient;
      this.ungraze_draw_buffer.fill();
    } else {
      console.log("oops, tried to draw " + this.style);
    }
    if(this.deferred_draw_item) {
      this.deferred_draw_item.draw();
    }
  };
  
  this.despawn = function(hard) {
    if(hard) {
      this.alive = false;
      this.all_bullets = [];
    }
  };
  
  this.is_done = function() {
    if(this.life_remaining <= 0) {
      return true;
    } else {
      return false;
    }
  };
  
  this.move_to = function(x,y) {
    this.x = x;
    this.y = y;
    for(var i = 0; i < this.sources.length; i++) {
      this.sources[i].x = x;
      this.sources[i].y = y;
    }
  }
  
  this.update = function(slowdown, slowspeed) {
  
    // apply slowdown
    var speed_modifier;
    if(slowdown) {
      speed_modifier = slowspeed;
    } else {
      speed_modifier = 1;
    }
    
    for(var i = 0; i < this.behaviors.length; i++) {
      this.behaviors[i](this);
    }
    
    if(this.life_remaining > 0) {
      if(this.timer <= 0) {
        // it is time to shoot
        // iterate over every source
        // update its heading
        // fire a bullet
        for(var i = 0; i < this.sources.length; i++) {
          // apply scatter
          var scatter = 0;
          
          if(this.random_spread > 0) {
            var offset = this.random_spread / 2;
            scatter = (Math.random() * this.random_spread) - offset;
          }
          // apply heading
          var next_direction = this.sources[i].heading;
          
          if(this.aimed) {
            // find the target's direction from this particular source
            var x_offset = this.target.x - this.sources[0].x;
            var y_offset = this.target.y - this.sources[0].y;
            var h = Math.atan2(y_offset,x_offset);
            next_direction += h;
          } else { // not aimed, it's a spinner or a sprayer
            next_direction += this.spin;
            this.sources[i].heading = next_direction;
          }
          
          // randomize speed and curvature
          var next_yaw_offset = Math.random() * this.yaw_jitter,
              next_speed_offset = Math.random() * this.speed_jitter;
          
          // fire bullet
          var next_bullet = new Bullet(this, this.bullet_type);
              next_bullet.heading = next_direction + scatter;
              next_bullet.x = this.sources[i].x;
              next_bullet.y = this.sources[i].y;
              next_bullet.yaw = next_bullet.yaw + next_yaw_offset;
              next_bullet.speed = next_bullet.speed + next_speed_offset;
              
          this.all_bullets.push( next_bullet );
          // housekeeping
          this.timer = this.delay;
        }
      } else {
        this.timer -= speed_modifier;
      }
      this.life_remaining -= speed_modifier;
    } else { // life is not remaining
      if(this.all_bullets.length == 0) this.alive = false;
    }
    
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].update(slowdown,slowspeed);
    }
    this.gc();
    
    // after the very first update, we should clear the is_new flag
    this.is_new = false;
    // it doesn't matter if we clear it on every frame
  };
  
  this.set_bullet_speed = function(n) {
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].speed = n;
    }
  };
  
  this.reset_bullet_speed = function() {
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].speed = this.all_bullets[i].max_speed;
    }
  };
  
  this.draw = function() {
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].draw();
    }
  };
  
  this.gc = function() {
    var res = [];
    for(var i = 0; i < this.all_bullets.length; i++) {
      if(this.all_bullets[i].exists) {
        res.push(this.all_bullets[i]);
      }
    }
    this.all_bullets = res;
  };
}