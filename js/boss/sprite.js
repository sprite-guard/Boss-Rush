function Sprite(parent,descriptor) {
  this.start_x = descriptor.x;
  this.start_y = descriptor.y;
  this.x = this.start_x;
  this.y = this.start_y;
  this.width = descriptor.width;
  this.height = descriptor.height;
  this.parent = parent;
  this.scale_factor = parent.scale_factor || 1;
  
  // allow a custom draw function for vector graphics
  this.inner_draw = descriptor.draw;
  
  this.file = descriptor.file;
  
  var img = document.createElement("img");
  img.src = this.file.src;
  document.body.appendChild(img);
  this.img_object = img;
  
  this.draw = function(opacity) {
    if(this.img_object) {
      game.draw.globalAlpha = opacity;
      game.draw.drawImage(this.img_object,this.x,this.y,this.width * this.scale_factor,this.height * this.scale_factor);
      game.draw.globalAlpha = 1;
    }
    
    if(this.inner_draw) {
      this.inner_draw(this);
    }
  }
  
  this.move_center = function(point) {
    this.cx = point.x;
    this.cy = point.y;
    this.x = (this.cx - (this.width / 2.0));
    this.y = (this.cy - (this.height / 2.0));
  }
  
}