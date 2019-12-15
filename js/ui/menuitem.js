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

function Slider(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.w = descriptor.w;
  this.h = descriptor.h;
  this.min = descriptor.min || 0;
  this.max = descriptor.max || 1;
  this.value = descriptor.value || this.min;
  this.binding = descriptor.binding;
  this.line = descriptor.line || "#006699";
  this.mark = descriptor.mark || "#66AACC";
  this.lineWidth = descriptor.lineWidth || 2;
  this.markWidth = descriptor.markWidth || 4;
  
  this.update = function() {
    // check for player's position?
    if(this.binding) {
      this.value = this.binding.getter();
    }
    this.proportion = (this.value - this.min) / (this.max - this.min);
  };
  
  this.draw = function() {
    // left end
    game.draw.strokeStyle = this.line;
    game.draw.lineWidth = this.lineWidth;
    game.draw.beginPath();
    game.draw.moveTo(this.x, this.y);
    game.draw.lineTo(this.x, this.y + this.h);
    game.draw.stroke();
    
    // body
    game.draw.beginPath();
    game.draw.moveTo(this.x, this.y + (this.h/2));
    game.draw.lineTo(this.x + this.w, this.y + (this.h/2));
    game.draw.stroke();
    
    // right end
    game.draw.beginPath();
    game.draw.moveTo(this.x + this.w, this.y);
    game.draw.lineTo(this.x + this.w, this.y + this.h);
    game.draw.stroke();
    
    // slider
    game.draw.strokeStyle = this.mark;
    game.draw.lineWidth = this.markWidth;
    game.draw.beginPath();
    game.draw.moveTo(this.x + (this.w * this.proportion), this.y + (this.h/4));
    game.draw.lineTo(this.x + (this.w * this.proportion), this.y + (3 * (this.h/4)));
    game.draw.stroke();
  }
};