/* I would still like to implement
 * "plane sources" for rain
 * ring sources that can be aimed or rotated randomly
 */
/*
function BulletSpawner(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.heading = descriptor.heading;
  this.home = {x: this.x, y: this.y, heading: this.heading};
  this.bullet_type = descriptor.bullet_type;
  this.lifespan = descriptor.lifespan;
  
  // optional
  this.spin = descriptor.spin || 0;
  this.delay = descriptor.delay || 0;
  this.sync = descriptor.sync || 0;
  this.components = descriptor.components || [];
  this.dx = descriptor.dx || 0;
  this.dy = descriptor.dy || 0;
  this.random_spread = descriptor.random_spread || 0;
  this.aimed = descriptor.aimed || false;
  this.target = descriptor.target || player;
  
  // internal
  
  this.init = function() {
    this.x = this.home.x;
    this.y = this.home.y;
    this.heading = this.home.heading;
    
    this.timer = (descriptor.delay + descriptor.sync) || 0;
    this.life_remaining = this.lifespan;
    this.alive = true;
    this.all_bullets = [];
  }
  
  this.add_component = function(c) {
    c.parent_object = this;
    this.components.push(c)
  }
  
  this.update = function(slowdown,slowspeed) { 
    var speed_modifier;
    if(slowdown) {
      speed_modifier = slowspeed;
    } else {
      speed_modifier = 1;
    }

    if(this.life_remaining > 0) {
      for(var i = 0; i < this.components.length; i++) {
        components[i].update(slowdown,slowspeed);
      }
    
      this.x += this.dx * speed_modifier;
      this.y += this.dy * speed_modifier;
      if(this.timer <= 0) {
        // this is to slow down the number of shots per second.
        var scatter = 0;
        
        if(this.random_spread > 0) {
          var offset = this.random_spread / 2;
          scatter = (Math.random() * this.random_spread) - offset;
        }
      
        var next_direction = this.heading;
        
        if(this.aimed) {
          // figure out what direction the player is in
          var x_offset = this.target.x - this.x;
          var y_offset = this.target.y - this.y;
          var magnitude = Math.sqrt((x_offset * x_offset) + (y_offset * y_offset));
          
          var h = Math.atan2(y_offset, x_offset);
          next_direction = h;
        } else {
          next_direction += this.spin;
        }
        
        this.heading = next_direction;

        var next_bullet = this.bullet_type;
        next_bullet.heading = next_direction + scatter;
        next_bullet.x = this.x;
        next_bullet.y = this.y;

        this.life_remaining -= speed_modifier;
        this.all_bullets.push(new Bullet(next_bullet));
        
        this.timer = this.delay;
      } else {
        this.timer -= speed_modifier;
      }
    } else { // life is not remaining
      if(this.all_bullets.length == 0) this.alive = false;
    }
    
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].update(slowdown,slowspeed);
    }
    this.gc();
  }
  
  this.draw = function() {
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].draw();
    }
  };
  
  this.despawn = function(hard) {
    this.life_remaining = 0;
    if(hard) {
      this.all_bullets = [];
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
*/
function Bullet(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.heading = descriptor.heading;
  this.r = descriptor.r;
  // optional
  this.color = descriptor.color || "#FFFFFF";
  this.shell = descriptor.shell || "#FF00FF";
  this.graze_color = descriptor.graze_color || "#FFFFFF#"
  this.pit_size = descriptor.pit_size || 0;
  this.style = descriptor.style || "solid";
  this.yaw = descriptor.yaw || 0;
  this.speed = descriptor.speed || 1;
  this.cull_type = descriptor.cull_type || "timer";
  
  if(descriptor.max_age) {
    this.max_age = descriptor.max_age;
  } else if(this.yaw == 0) {
    this.max_age = 1000 / this.speed;
  } else {
    this.max_age = ((2 * Math.PI) / Math.abs(this.yaw));
  }
  
  // internal
  this.exists = true;
  this.age = 0;
  this.current_shell = this.shell;
  
  this.cull = descriptor.cull || function() {
    this.exists = false;
  };
  
  this.draw = descriptor.draw || function() {
    game.draw.beginPath();
  	game.draw.ellipse(Math.floor(this.x), Math.floor(this.y), this.r, this.r, 0, 0, 2 * Math.PI);
    if(this.style == "hollow") {
      game.draw.strokeStyle = this.color;
      game.draw.stroke();
    } else if(this.style == "solid") {
      game.draw.fillStyle = this.color;
      game.draw.fill();
    } else if(this.style == "gradient") {
      var gradient = game.draw.createRadialGradient(this.x, this.y, this.r,
                                                    this.x, this.y, this.pit_size );
      gradient.addColorStop(0, this.current_shell);
      gradient.addColorStop(1, this.color);
      game.draw.fillStyle = gradient;
      game.draw.fill();
    } else {
      console.log("oops, tried to draw " + this.style);
    }
  };
  
  this.update = function(slowdown,slowspeed) {
    var speed_modifier;
    if(slowdown) {
      speed_modifier = slowspeed;
    } else {
      speed_modifier = 1;
    }
    this.age += speed_modifier;
    
    this.heading += this.yaw * speed_modifier;
    var dx = Math.cos(this.heading);
    var dy = Math.sin(this.heading);
    this.x += this.speed * dx * speed_modifier;
    this.y += this.speed * dy * speed_modifier;
    
    var collision_type = this.check_collisions();
    
    if(collision_type == "graze") {
      this.graze();
      player.graze();
    } else if(collision_type == "hit") {
      player.get_hurt();
    } else {
      this.ungraze();
    }
    
    if(this.cull_type == "timer") {
      if(this.age > this.max_age) {
        this.cull();
      }
    } else if(this.cull_type == "screen") {
      var min_x = 0 - this.r,
          min_y = 0 - this.r,
          max_x = game.canvas.width + this.r,
          max_y = game.canvas.height + this.r;
          
      if((this.x < min_x) || (this.y < min_y) || (this.x > max_x) || (this.y > max_y)) {
        this.cull();
      }
    }
  };
  
  this.graze = function() {
    this.current_shell = this.graze_color;
  };
  
  this.ungraze = function() {
    this.current_shell = this.shell
  };
  
  this.check_collisions = function() {
    var rsq = this.r * this.r,
        player_hbsq = player.hb * player.hb,
        x_distance = Math.abs(this.x - player.x),
        y_distance = Math.abs(this.y - player.y),
        dsq = (x_distance * x_distance) + (y_distance * y_distance),
        collision_distance_squared = (rsq + player_hbsq),
        gbsq = (player.graze_radius * player.graze_radius),
        graze_distance_squared = rsq + gbsq;
        
    if(dsq <= collision_distance_squared) {
      return "hit";
    } else if(dsq <= graze_distance_squared) {
      return "graze";
    } else {
      return false;
    }
  };
}

Bullet.prototype.gradient = function() {
  var gradient = game.draw.createRadialGradient(this.x, this.y, this.r,
                                                this.x, this.y, 0 );
  gradient.addColorStop(0, this.current_shell);
  gradient.addColorStop(1, this.color);
  game.draw.fillStyle = gradient;
  game.draw.beginPath();
  game.draw.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
  game.draw.fill();
}