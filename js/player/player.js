var player = {

};

player.init = function() {
  this.x = game.canvas.width / 2;
  this.y = game.canvas.height * 0.75;
  this.w = 10;
  this.h = 24;
  this.body_width = this.w;
  this.body_height = this.h;
  this.wing_height = 24;
  this.wing_width = 6;
  this.wing_x_offset = 12;
  this.wing_y_offset = 6;
  this.wing_rotation = 0.33;
  this.wing_rotation_max = 0.40;
  this.wing_rotation_min = 0.24;
  this.wing_rotation_speed = 0.02;
  this.wing_rotation_direction = 1;
  this.wing_rotation_modifier = 0;
  this.wing_x_offset_speed = 0.4;
  this.wing_x_offset_modifier = 0;
  this.wing_hurt_x_offset_speed = 0.73;
  this.wing_hurt_rotation_speed = 0.04;
  this.wing_hurt_x_offset_modifier = -3;
  this.wing_hurt_rotation_modifier = -0.15;
  this.r = 8;
  this.graze_radius = 32;
  this.hb = 0;
  this.border_width = 3;
  this.border_color = "#0099AA";
  this.outer_color = "#000011";
  this.inner_color = "#006699";
  this.pip_color = "#FFFFFF";
  this.hurt_color = "#4499AA";
  this.wing_outer_color = "#000033";
  this.wing_inner_color = "#005588";
  this.slow_speed = 2;
  this.fast_speed = 4;
  this.speed = this.fast_speed;
  this.health = 4;
  this.iframes = 60;
  this.max_iframes = 60;
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
  this.health_ring_r = 6;
  this.health_ring_width = 3;
}

player.draw = function() {
  if(this.spirit) {
    this.spirit.draw();
  }
  var outermost_color;
  var wing_inner_color;
  if(this.state == "fine") {
    outermost_color = this.outer_color;
    wing_inner_color = this.wing_inner_color
  } else if(this.state == "hurt") {
    outermost_color = this.hurt_color;
    wing_inner_color = this.hurt_color;
  } else {
    outermost_color = this.outer_color;
    wing_inner_color = this.wing_inner_color;
  }
  
  var body_gradient = game.draw.createRadialGradient(this.x, this.y, this.body_height,
                                                     this.x, this.y, 0);
  body_gradient.addColorStop(0.25,outermost_color);
  body_gradient.addColorStop(0.75,this.inner_color);
  body_gradient.addColorStop(1,this.pip_color);
  
  var left_wing_x = this.x - (this.wing_x_offset + this.wing_x_offset_modifier);
  var left_wing_y = this.y + this.wing_y_offset;
  var right_wing_x = this.x + (this.wing_x_offset + this.wing_x_offset_modifier);
  var right_wing_y = this.y + this.wing_y_offset;
  var current_wing_rotation = this.wing_rotation + this.wing_rotation_modifier;

  var left_wing_gradient = game.draw.createRadialGradient(left_wing_x,left_wing_y,this.wing_height,
                                                          left_wing_x,left_wing_y,0);
  left_wing_gradient.addColorStop(0,this.wing_outer_color);
  left_wing_gradient.addColorStop(1,wing_inner_color);
  
  var right_wing_gradient = game.draw.createRadialGradient(right_wing_x,right_wing_y,this.wing_height,
                                                           right_wing_x,right_wing_y,0);
  right_wing_gradient.addColorStop(0,this.wing_outer_color);
  right_wing_gradient.addColorStop(1,wing_inner_color);
  
  // draw the outline
  game.draw.lineWidth = this.border_width;
  game.draw.strokeStyle = this.border_color;
  // outline the body
  game.draw.beginPath();
  game.draw.ellipse(this.x, this.y, this.body_width, this.body_height, 0, 0, 2 * Math.PI)
  game.draw.stroke();
  // outline the left wing
  game.draw.beginPath();
  game.draw.ellipse(left_wing_x, left_wing_y,
                    this.wing_width, this.wing_height,
                    current_wing_rotation, 0, 2 * Math.PI);
  game.draw.stroke();
  // outline the right wing
  game.draw.beginPath();
  game.draw.ellipse(right_wing_x, right_wing_y,
                    this.wing_width, this.wing_height,
                    -current_wing_rotation, 0, 2 * Math.PI);
  game.draw.stroke();
  
  // draw the body
  game.draw.beginPath();
  game.draw.fillStyle = body_gradient;
  game.draw.ellipse(this.x, this.y, this.body_width, this.body_height, 0, 0, 2 * Math.PI)
  game.draw.fill();
  
  // draw the left wing
  game.draw.beginPath();
  game.draw.fillStyle = left_wing_gradient;
  game.draw.ellipse(left_wing_x, left_wing_y,
                    this.wing_width, this.wing_height,
                    current_wing_rotation, 0, 2 * Math.PI);
  game.draw.fill();
  
  // draw the right wing
  game.draw.beginPath();
  game.draw.fillStyle = right_wing_gradient;
  game.draw.ellipse(right_wing_x, right_wing_y,
                    this.wing_width, this.wing_height,
                    -current_wing_rotation, 0, 2 * Math.PI);
  game.draw.fill();
  
  // draw the health
  var angle_to_draw = 2 * Math.PI;
  var ring_color = "#000000";
  
  if(player.invulnerable) {
    angle_to_draw = 2 * Math.PI;
    ring_color = "#FFFF00";
  } else {
    ring_color = "#00BB88";
    portion = ((player.health - 1) / 3);
    angle_to_draw = portion * 2 * Math.PI;
  }
    
  game.draw.beginPath();
  game.draw.lineWidth = this.health_ring_width;
  game.draw.strokeStyle = ring_color;
  game.draw.ellipse(this.x, this.y, this.health_ring_r, this.health_ring_r, 0, 0, angle_to_draw);
  game.draw.stroke();
    
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
    
    var player_distance_from_center = helpers.distance_between(player,{x: 400, y: 300});
    if(player_distance_from_center > game.corner_buffer) {
      var r = game.corner_buffer,
          A = {x: 400, y: 300},
          B = player,
          C = {};
      C.x = A.x + (r * ((B.x - A.x) / player_distance_from_center));
      C.y = A.y + (r * ((B.y - A.y) / player_distance_from_center));
      player.x = C.x;
      player.y = C.y;
    }
    
    
    // handle iframes
    if(this.state == "hurt") {
      this.iframes--;
      
      if(this.iframes <= 0) {
        this.state = "fine";
        this.iframes = this.max_iframes;
      }
    }
    
    // hit effect management
    var next_hit_array = [];
    for(var i = 0; i < this.hit_effects.length; i++) {
      this.hit_effects[i].update();
      if(this.hit_effects[i].alive) {
        next_hit_array.push(this.hit_effects[i]);
      }
    }
    this.hit_effects = next_hit_array;
  }
  
  // flap the wings
  
  if(this.state == "fine") {
    current_wing_rotation_speed = this.wing_rotation_speed;
    current_wing_x_offset_speed = this.wing_x_offset_speed;
    this.wing_x_offset_modifier = 0;
    this.wing_rotation_modifier = 0;
  } else if(this.state == "hurt") {
    current_wing_rotation_speed = this.wing_hurt_rotation_speed;
    current_wing_x_offset_speed = this.wing_hurt_x_offset_speed;
    this.wing_x_offset_modifier = this.wing_hurt_x_offset_modifier;
    this.wing_rotation_modifier = this.wing_hurt_rotation_modifier;
  }
  
  if(this.wing_rotation >= this.wing_rotation_max) {
    this.wing_rotation_direction = -1;
  }
  
  if(this.wing_rotation <= this.wing_rotation_min) {
    this.wing_rotation_direction = 1;
  }
  
  this.wing_rotation += current_wing_rotation_speed * this.wing_rotation_direction;
  this.wing_x_offset += current_wing_x_offset_speed * this.wing_rotation_direction;
};

player.move_to_dash_target = function() {
  this.x += this.dash_target.x_offset;
  this.y += this.dash_target.y_offset;
  this.dash_target = false;
}

player.get_hurt = function() {
  if(this.state != "hurt") {
    if(!this.invulnerable) this.health--;
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

player.graze = function() {
  if(this.dash_fuel < this.max_dash_fuel) {
    this.dash_fuel += 0.1;
  }
}