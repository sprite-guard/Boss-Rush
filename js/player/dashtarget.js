function DashTarget() {
  this.x_offset = 0;
  this.y_offset = 0;
  this.r = 16;
  this.inner_r = 12;
  this.core_r = 5;
  this.dx = 0;
  this.dy = 0;
  this.speed = 4;
  
  this.update = function() {
    if(player.dash_fuel >= 1) {
      this.dx = this.speed * (CONTROLS.right - CONTROLS.left);
      this.dy = this.speed * (CONTROLS.down - CONTROLS.up);

      this.x_offset += this.dx;
      this.y_offset += this.dy;
      
      this.x = player.x + this.x_offset;
      this.y = player.y + this.y_offset;
      
      if(this.x < 0) this.x = 0;
      if(this.x > game.canvas.width) this.x = game.canvas.width;
      if(this.y < 0) this.y = 0;
      if(this.y > game.canvas.height) this.y = game.canvas.height;
      
      this.draw();
      player.dash_fuel--;
    } else {
      // prevent microfuel
      player.dash_fuel = 0;
    }
  };
  
  this.draw = function() {
    var angle_to_draw = ((player.dash_fuel / player.max_dash_fuel) * 2 * Math.PI);
    
    
    game.draw.beginPath();
    game.draw.lineWidth = 3;
    game.draw.strokeStyle = "#FFFFFF";
    game.draw.ellipse(this.x, this.y, this.r, this.r, 0, 0, angle_to_draw);
    game.draw.stroke();
    game.draw.beginPath();
    game.draw.ellipse(this.x, this.y, this.inner_r, this.inner_r, 0, 0, (2 * Math.PI) - angle_to_draw, true);
    game.draw.stroke();
    game.draw.beginPath();
    game.draw.fillStyle = "#999900";
    game.draw.ellipse(this.x, this.y, this.core_r, this.core_r, 0, 0, (2 * Math.PI));
    game.draw.fill();
  }
}