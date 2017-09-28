function HitEffect(descriptor) {
  // required
  this.x = descriptor.x;
  this.y = descriptor.y;
  
  // optional
  this.r_max = descriptor.r_max || 32;
  this.r_min = descriptor.r_min || 4;
  this.color = descriptor.color || "#FF6600";
  
  // internal
  this.r = this.r_min;
  this.alive = true;
  
  this.update = function() {
    if(this.r < this.r_max) {
      this.r += 2;
      this.draw();
    } else {
      console.log(this.r + "," + this.r_min + "," + this.r_max);
      this.alive = false;
    }
  };
  
  this.draw = function() {
    console.log("drawing hit effect at " + this.x + "," + this.y);
    game.draw.beginPath();
    game.draw.strokeStyle = this.color;
    game.draw.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
    game.draw.stroke();
  };
}