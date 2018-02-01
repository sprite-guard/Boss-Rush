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
  this.max_speed = descriptor.speed || 1;
  this.cull_type = descriptor.cull_type || "timer";
  this.behavior = descriptor.behavior || "none";
  this.remaining_bounces = descriptor.bounces || 0;
  this.slowable = descriptor.slowable || false;
  this.min_speed = descriptor.min_speed || this.max_speed / 2;
  
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
      game.draw.lineWidth = 3;
      game.draw.strokeStyle = this.current_shell;
      game.draw.stroke();
    } else if(this.style == "solid") {
      game.draw.lineWidth = 3;
      game.draw.fillStyle = this.color;
      game.draw.fill();
      game.draw.strokeStyle = this.current_shell;
      game.draw.stroke();
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
    
    if((this.behavior == "bounce") && (this.remaining_bounces > 0)) {
      var did_bounce = false;
      if((this.x <= 0) || (this.x >= game.width)) {
        this.heading = Math.PI - this.heading;
        did_bounce = true;
      }
      
      if((this.y <= 0) || (this.y >= game.height)) {
        this.heading = (-1) * this.heading;
        did_bounce = true;
      }
      
      if(did_bounce) {
        this.remaining_bounces--;
      }
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
    if(this.slowable) {
      this.speed = this.max_speed / 2;
    }
  };
  
  this.ungraze = function() {
    this.current_shell = this.shell;
    this.speed = this.max_speed;
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