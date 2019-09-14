function Background(color,drop_color) {
  this.color = color;
  this.drop_color = drop_color;
  
  this.draw = function() {
    if(this.drop_color) {
      game.draw.fillStyle = this.drop_color;
      game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);
    }
    game.draw.fillStyle = this.color;
    game.draw.beginPath();
    game.draw.ellipse(400, 300, 450, 450, 0, 0, 2 * Math.PI);
    game.draw.fill();
  }
  
  this.update = function() {
    return true;
  }
}

Background.DEFAULT = new Background("#002244","#002244");
Background.INGAME = new Background("#002244","#000000");