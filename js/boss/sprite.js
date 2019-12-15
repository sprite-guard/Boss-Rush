function Sprite(parent,descriptor) {
  this.start_x = descriptor.x;
  this.start_y = descriptor.y;
  this.x = this.start_x;
  this.y = this.start_y;
  
  // allow a custom draw function for vector graphics
  this.inner_draw = descriptor.draw;
  
  // the normal way to do this is a stack of sprites
  // that are all drawn at different opacities
  // TODO
  this.files = [] //descriptor.files;
  this.opacities = [];
  
  
  for(var i = 0; i < this.files.length; i++) {
    if(i === 0) {
      this.opacities.push(1);
    } else {
      this.opacities.push(0);
    }
  }
  
  this.draw = function() {
    if(this.file) {
      // draw the file
    }
    
    if(this.inner_draw) {
      this.inner_draw(this);
    }
  }
  
}