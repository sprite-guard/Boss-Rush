function SpiritWell(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.r = descriptor.r;
  
  this.start_x = descriptor.x;
  this.start_y = descriptor.y;
  this.start_r = descriptor.r;
  
  // optional
  this.capacity = descriptor.capacity || 400;
  this.outer_color = descriptor.color || "#000000";
  this.fill_color = descriptor.fill_color || "#FFFF00";
  this.full_border = descriptor.full_border || "#FFFFFF";
  
  // internal
  this.fullness = 0;
  this.is_full = false;
  this.is_filling = false;
  
  this.init = function() {
    this.fullness = 0;
    this.x = this.start_x;
    this.y = this.start_y;
    this.r = this.start_r;
  }
  
  this.update = function(slowdown,slowspeed) {
    var fillrate = 1;
    if(slowdown) {
      fillrate = slowspeed;
    } else {
      fillrate = 1;
    }
    
    if(player.spirit) {
      // NB consolidate collision code
      var hbsq = this.r * this.r,
          spirit_hbsq = (player.spirit.hitbox * player.spirit.hitbox),
          x_offset = Math.abs(this.x - player.spirit.x),
          y_offset = Math.abs(this.y - player.spirit.y),
          dsq = (x_offset * x_offset) + (y_offset * y_offset);
          
      if(dsq <= (hbsq + spirit_hbsq)) {
        this.fullness += fillrate;
        this.is_filling = true;
      } else {
        this.is_filling = false;
      }
      
      if(this.fullness >= this.capacity) {
        this.fullness = this.capacity;
        this.is_full = true;
        this.is_filling = true;
      } else {
        this.is_full = false;
      }
    } else {
      this.is_filling = false;
      if(this.fullness >= this.capacity) {
        this.is_full = true;
      } else {
        this.is_full = false;
      }
    }
  }
  
  this.draw = function() {
    var full_percent = (1.0 * this.fullness) / this.capacity,
        inner_radius = Math.ceil(full_percent * this.r);
    
    if(this.is_full) {
      outer_color = this.full_border;
    } else {
      outer_color = this.outer_color;
    }
    // draw the inner circle
    game.draw.fillStyle = this.fill_color;
    game.draw.beginPath();
    game.draw.ellipse(this.x, this.y, inner_radius, inner_radius, 0, 0, 2*Math.PI);
    game.draw.fill();
    // draw the outer ring
    game.draw.strokeStyle = outer_color;
    if(this.is_filling) {
      game.draw.lineWidth = 3;
    } else {
      game.draw.lineWidth = 1;
    }
    game.draw.beginPath();
    game.draw.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
    game.draw.stroke();
  }
}