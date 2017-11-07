var player = {

};

player.init = function() {
  this.x = game.canvas.width / 2;
  this.y = game.canvas.height * 0.75;
  this.w = 12;
  this.h = 16;
  this.r = 8;
  this.graze_radius = 32;
  this.hb = 0;
  this.shell_color = "#000000";
  this.core_color = "#00FFFF";
  this.pip_color = "#FF6600";
  this.hurt_color = "#666666";
  this.slow_speed = 2;
  this.fast_speed = 4;
  this.speed = this.fast_speed;
  this.health = 4;
  this.iframes = 30;
  this.max_iframes = 30;
  this.state = "fine";
  this.dir = 0;
  this.is_normalized = false;
  this.hit_effects = [];
  this.dash_target = false;
  this.dash_fuel = 60;
  this.max_dash_fuel = 120;
  this.spirit = false;
  this.invulnerable = false;
  this.dead = false;
}

player.draw = function() {
  
  if(this.spirit) {
    this.spirit.draw();
  }
  var gradient = game.draw.createRadialGradient( this.x, this.y, this.r,
                                                 this.x, this.y, 0);
  if(this.state == "fine") {
    gradient.addColorStop(0,this.shell_color);
    gradient.addColorStop(1,this.core_color);
  } else if(this.state == "hurt") {
    gradient.addColorStop(0,this.hurt_color);
    gradient.addColorStop(1,this.core_color);
  } else {
    gradient.addColorStop(0,this.shell_color);
    gradient.addColorStop(1,this.core_color);
  }
  
  game.draw.fillStyle = gradient;

  game.draw.beginPath();
  game.draw.ellipse(this.x,this.y, this.w,this.h, 0, 0, 2 * Math.PI);
  game.draw.fill();
  
  if(this.dash_target) {
    this.dash_target.draw();
  }
  
  for(var i = 0; i < this.hit_effects.length; i++) {
    this.hit_effects[i].draw();
  }
};

player.update = function() {
  var speed_modifier, slowdown;
  if(slowdown) {
    speed_modifier = slowspeed;
  } else {
    speed_modifier = 1;
  }

  if(!this.dead) {
    // dash target
    if(CONTROLS.blink) {
      if(this.dash_target) {
        this.dash_target.update();
        if(this.dash_fuel <= 0) {
          // target is active, fuel is spent
          this.move_to_dash_target();
          this.dash_target = false;
          game.current_scene.slowdown = false;
        } else {
          game.current_scene.slowdown = true;
        }
      } else if((!this.dash_target) && (this.dash_fuel > 0)) {
        this.dash_target = new DashTarget();
      } else {
        // no target, no fuel
        this.dash_fuel = 0;
        game.current_scene.slowdown = false;
      }
    } else { // blink is not held down
      if(this.dash_target) {
        this.move_to_dash_target();
        this.dash_target = false;
        game.current_scene.slowdown = false;
      }
    }
    
    if(CONTROLS.spirit) {
      if(this.spirit) {
        // do move the spirit
        this.spirit.update(true);
      } else {
        this.spirit = new Spirit({
          x: this.x,
          y: this.y
        });
      }
    }
    
    if(CONTROLS.slow) {
      this.speed = this.slow_speed;
    } else {
      this.speed = this.fast_speed;
    }
    
    if(!CONTROLS.blink && !CONTROLS.spirit) {
      // blink and spirit are not held, update is go

      if(this.spirit) {
        // do not move the spirit, but still make it do good things
        this.spirit.update(false);
      }
    
      // move the player

      this.dx = this.speed * (CONTROLS.right - CONTROLS.left);
      this.dy = this.speed * (CONTROLS.down - CONTROLS.up);

      this.x += this.dx;
      this.y += this.dy;
    }
    

    if(this.x < 0) this.x = 0;
    if(this.x > game.canvas.width) this.x = game.canvas.width;
    if(this.y < 0) this.y = 0;
    if(this.y > game.canvas.height) this.y = game.canvas.height;
    
    // handle iframes
    if(this.state == "hurt") {
      this.iframes--;
      
      if(this.iframes <= 0) {
        this.state = "fine";
        this.iframes = this.max_iframes;
      }
    }
    
    // hit effect management
    // NB the refactor is going to ruin this
    var next_hit_array = [];
    for(var i = 0; i < this.hit_effects.length; i++) {
      this.hit_effects[i].update();
      if(this.hit_effects[i].alive) {
        next_hit_array.push(this.hit_effects[i]);
      }
    }
    this.hit_effects = next_hit_array;
  }
  
  // draw the result
  // player.draw();
};

player.move_to_dash_target = function() {
  this.x += this.dash_target.x_offset;
  this.y += this.dash_target.y_offset;
  this.dash_target = false;
}

player.get_hurt = function() {
  if(!this.invulnerable) {
    if(this.state != "hurt") {
      this.health--;
      this.state = "hurt";
      this.hit_effects.push(new HitEffect({
        x: this.x,
        y: this.y
      }));
      if(this.health == 0) {
        game.current_scene.game_over();
      }
    }
  }
}

player.graze = function() {
  if(this.dash_fuel < this.max_dash_fuel) {
    this.dash_fuel += 0.1;
  }
}