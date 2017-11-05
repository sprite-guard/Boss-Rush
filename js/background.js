function Background(color) {
  this.color = color;
  
  this.draw = function() {
    game.draw.fillStyle = this.color;
    game.draw.fillRect(0, 0, game.canvas.width, game.canvas.height);
  }
  
  this.update = function() {
    return true;
  }
}