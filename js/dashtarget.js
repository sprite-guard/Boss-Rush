function DashTarget() {
  this.x_offset = 0;
  this.y_offset = 0;
  this.r = 16;
  this.dx = 0;
  this.dy = 0;
  this.speed = 3;
  
  this.update = function() {
    if(player.dash_fuel >= 1) {
      this.dx = this.speed * (CONTROLS.right - CONTROLS.left);
      this.dy = this.speed * (CONTROLS.down - CONTROLS.up);

      this.x_offset += this.dx;
      this.y_offset += this.dy;
      
      this.draw();
      player.dash_fuel--;
    } else {
      // prevent microfuel
      player.dash_fuel = 0;
    }
  };
  
  this.draw = function() {
    var angle_to_draw = ((player.dash_fuel / player.max_dash_fuel) * 2 * Math.PI);
    
    var x = player.x + this.x_offset;
    var y = player.y + this.y_offset;
    
    game.draw.beginPath();
    game.draw.lineWidth = 3;
    game.draw.strokeStyle = "#FFFFFF";
    game.draw.ellipse(x, y, this.r, this.r, 0, 0, angle_to_draw);
    game.draw.stroke();
  }
}