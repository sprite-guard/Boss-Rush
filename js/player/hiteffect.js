function HitEffect(descriptor) {
  // required
  this.x = descriptor.x;
  this.y = descriptor.y;
  
  // optional
  this.r_max = descriptor.r_max || 64;
  this.r_min = descriptor.r_min || 4;
  this.color = descriptor.color || "#FFAA44";
  
  // internal
  this.r = this.r_min;
  this.alive = true;
  
  this.update = function(draw_only) {
    if(this.r < this.r_max) {
      if(!draw_only) {
        this.r += 3;
      }
      this.draw();
    } else {
      this.alive = false;
    }
  };
  
  this.draw = function() {
    game.draw.beginPath();
    game.draw.strokeStyle = this.color;
    game.draw.lineWidth = 5;
    game.draw.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
    game.draw.stroke();
    game.draw.lineWidth = 1;
  };
}