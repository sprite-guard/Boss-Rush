function DashTarget() {
  this.x_offset = 0;
  this.y_offset = 0;
  this.r = 16;
  this.dx = 0;
  this.dy = 0;
  this.speed = 3;
  this.age = 0;
  this.max_age = 60;
  
  this.update = function() {
    this.age++;
    if(this.age < this.max_age) {
      this.dx = this.speed * (CONTROLS.right - CONTROLS.left);
      this.dy = this.speed * (CONTROLS.down - CONTROLS.up);

      this.x_offset += this.dx;
      this.y_offset += this.dy;
      
      this.draw();
    }
  };
  
  this.draw = function() {
    
    var missing_portion = (this.age / this.max_age);
    var angle_to_draw = (2 * Math.PI) - (missing_portion * 2 * Math.PI);
    
    var x = player.x + this.x_offset;
    var y = player.y + this.y_offset;
    
    game.draw.beginPath();
    game.draw.lineWidth = 3;
    game.draw.strokeStyle = "#FFFFFF";
    game.draw.ellipse(x, y, this.r, this.r, 0, 0, angle_to_draw);
    game.draw.stroke();
  }
}