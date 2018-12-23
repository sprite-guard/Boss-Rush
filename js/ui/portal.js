function Portal(descriptor) {
  this.destination = descriptor.destination;
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.h = descriptor.h;
  this.tilt = 0;
  this.tilt_speed = 0.03;
  
  // optional
  this.normal_color = descriptor.color || "#006699";
  this.graze_color = descriptor.color || "#00AACC";
  this.color = this.normal_color;
  
  // internal
  this.wmax = this.h / 2;
  this.w = this.wmax -1;
  this.animation_direction = 1;
  
  this.init = function() {
    this.wmax = this.h / 2;
    this.w = this.wmax -1;
    this.animation_direction = 1;
  };
  
  this.check_collisions = function(player_hb_squared,player_gb_squared) {
    var x_offset = Math.abs(this.x - player.x);
    var y_offset = Math.abs(this.y - player.y);
    
    var distance_squared = (x_offset * x_offset) + (y_offset * y_offset);
    
    if(distance_squared < (player_gb_squared + (this.h * this.h))) {
      this.color = this.graze_color;
    } else {
      this.color = this.normal_color;
    }
    
    if(distance_squared < (player_hb_squared + (this.h * this.h))) {
      game.current_scene = scenes_list[this.destination];
      game.current_scene.init();
    }
  }
  
  this.update = function() {
    // animate
    this.w += this.animation_direction;
    
    if(this.tilt > Math.PI) this.tilt = 0;
    this.tilt += this.tilt_speed;
    
    if(this.w <= 0) {
      this.w = 0;
      this.animation_direction = 1;
    } else if(this.w >= this.wmax) {
      this.w = this.wmax;
      this.animation_direction = -1;
    }
    
    // check collision
    if(!player.dead) {
      this.check_collisions(0,2 * player.graze_radius * player.graze_radius);
    }
    
    this.draw();
  };
  
  this.draw = function() {
    if(!PIXI) {
      game.draw.lineWidth = 2;
      game.draw.strokeStyle = this.color;
      game.draw.beginPath();
      game.draw.ellipse(this.x, this.y, this.w, this.h, this.tilt + Math.PI/4, 0, 2 * Math.PI);
      game.draw.stroke();
      game.draw.beginPath();
      game.draw.ellipse(this.x, this.y, this.w, this.h, (this.tilt*2) + 7*(Math.PI/4), 0, 2 * Math.PI);
      game.draw.stroke();
      game.draw.beginPath();
      game.draw.ellipse(this.x, this.y, this.wmax - this.w, this.h, (this.tilt*3), 0, 2*Math.PI);
      game.draw.stroke();
    } else {
      
    }
  }
}