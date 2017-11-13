function Sprite(parent,descriptor) {
  this.start_x = descriptor.x;
  this.start_y = descriptor.y;
  this.x = this.start_x;
  this.y = this.start_y;
  this.inner_draw = descriptor.draw;
  
  this.draw = function() {
    this.inner_draw(this.x, this.y);
  }
  
}