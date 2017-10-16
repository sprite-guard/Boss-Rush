function BulletSpawner(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.heading = descriptor.heading;
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
  
  // internal
  this.timer = (descriptor.delay + descriptor.sync) || 0;
  this.life_remaining = this.lifespan;
  this.alive = true;
  this.all_bullets = [];
  
  this.add_component = function(c) {
    c.parent_object = this;
    this.components.push(c)
  }
  
  this.update = function(draw_only) {

    if((this.life_remaining > 0) && (!draw_only)) {
      for(var i = 0; i < this.components.length; i++) {
        components[i].update();
      }
    
      this.x += this.dx;
      this.y += this.dy;
      if(this.timer == 0) {
        var scatter = 0;
        
        if(this.random_spread > 0) {
          var offset = this.random_spread / 2;
          scatter = (Math.random() * this.random_spread) - offset;
        }
      
        var next_direction = this.heading + scatter;

        var next_bullet = this.bullet_type;
        next_bullet.heading = next_direction;
        next_bullet.x = this.x;
        next_bullet.y = this.y;
        
        this.heading += this.spin;

        this.life_remaining--;
        this.all_bullets.push(new Bullet(next_bullet));
        
        this.timer = this.delay;
      } else {
        this.timer--;
      }
    } else {
      if(this.all_bullets.length == 0) this.alive = false;
    }
    
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].update(draw_only);
    }
    this.gc();
  }
  
  this.gc = function() {
    var res = [];
    for(var i = 0; i < this.all_bullets.length; i++) {
      if(this.all_bullets[i].exists) {
        res.push(this.all_bullets[i]);
      }
    }
    this.all_bullets = res;
  }
}

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
  }
  
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
  }
  
  this.update = function(draw_only) {
    if(!draw_only) {
      this.age++
      
      this.heading += this.yaw;
      var dx = Math.cos(this.heading);
      var dy = Math.sin(this.heading);
      this.x += this.speed * dx;
      this.y += this.speed * dy;
      
      if(this.age > this.max_age) {
        this.cull();
      } else {
        this.draw();
      }
    } else {
      this.draw();
    }
    this.current_shell = this.shell;
  }
  
  this.graze = function() {
    this.current_shell = this.graze_color;
  }
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