function MenuItem(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.w = descriptor.w;
  this.h = descriptor.h;
  this.text = descriptor.text;
  
  this.font_face = descriptor.font || "serif";
  this.font_size = descriptor.size || "32px";
  this.xbuffer = descriptor.xbuffer || 8;
  this.ybuffer = descriptor.ybuffer || 32;
  this.font = this.font_size + " " + this.font_face;
  this.fill = descriptor.fill || "#006699";
  this.border = descriptor.border || "#006699";
  
  this.update = function() {
    // check for player's presence and action button
    return true;
  };
  
  this.draw = function() {
    game.draw.strokeStyle = this.border;
    game.draw.beginPath();
    game.draw.rect(this.x, this.y, this.w, this.h);
    game.draw.stroke();
    
    game.draw.font = this.font;
    game.draw.fillStyle = this.fill;
    game.draw.fillText(this.text, this.x + this.xbuffer, this.y + this.ybuffer);
  };
}