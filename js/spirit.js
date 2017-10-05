function Spirit(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  
  // optional
  this.speed = descriptor.speed || 3;
  this.dpf = descriptor.dammage || 1;
  this.inner_color = descriptor.inner_color || "#FFFF00";
  this.outer_color = descriptor.outer_color || "#996600";
  this.wing_inner_color = descriptor.wing_inner_color || "#AACC00";
  this.wing_outer_color = descriptor.wing_outer_color || "#555500";
  
  // nb should these be variables?
  this.body_width = 8;
  this.body_height = 32;
  this.wing_width = 6;
  this.wing_height = 24;
  this.wing_x_offset = 12;
  this.wing_y_offset = 6;
  this.wing_rotation = (0.05 * 2 * Math.PI);
  
  // internal
  
  this.update = function(move) {
    if(move) {
      this.dx = this.speed * (CONTROLS.right - CONTROLS.left);
      this.dy = this.speed * (CONTROLS.down - CONTROLS.up);

      this.x += this.dx;
      this.y += this.dy;
    }
    
    if(this.x < 0) this.x = 0;
    if(this.x > game.canvas.width) this.x = game.canvas.width;
    if(this.y < 0) this.y = 0;
    if(this.y > game.canvas.height) this.y = game.canvas.height;
    
    this.draw();
  }
  
  this.draw = function() {
    var body_gradient = game.draw.createRadialGradient(this.x, this.y, this.body_height,
                                                       this.x, this.y, 0);
    body_gradient.addColorStop(0,this.outer_color);
    body_gradient.addColorStop(1,this.inner_color);
    
    var left_wing_x = this.x - this.wing_x_offset;
    var left_wing_y = this.y + this.wing_y_offset;
    var right_wing_x = this.x + this.wing_x_offset;
    var right_wing_y = this.y + this.wing_y_offset;
    
    var left_wing_gradient = game.draw.createRadialGradient(left_wing_x,left_wing_y,this.wing_height,
                                                            left_wing_x,left_wing_y,0);
    left_wing_gradient.addColorStop(0,this.wing_outer_color);
    left_wing_gradient.addColorStop(1,this.wing_inner_color);
    
    var right_wing_gradient = game.draw.createRadialGradient(right_wing_x,right_wing_y,this.wing_height,
                                                             right_wing_x,right_wing_y,0);
    right_wing_gradient.addColorStop(0,this.wing_outer_color);
    right_wing_gradient.addColorStop(1,this.wing_inner_color);
    
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
                      this.wing_rotation, 0, 2 * Math.PI);
    game.draw.fill();
    
    // draw the right wing
    game.draw.beginPath();
    game.draw.fillStyle = right_wing_gradient;
    game.draw.ellipse(right_wing_x, right_wing_y,
                      this.wing_width, this.wing_height,
                      -this.wing_rotation, 0, 2 * Math.PI);
    game.draw.fill();

  }
}