function Persona(desc) {
  if(!desc) return false;
  this.width = desc.width;
  this.height = desc.height;
  this.x = desc.x;
  this.y = desc.y;
  this.cx = desc.x + (this.width / 2.0);
  this.cy = desc.y + (this.height / 2.0);
  this.scale_factor = desc.scale_factor || 1;
  this.regions = [];
  
  if(desc.lineart) {
    this.lineart = new Sprite(this,desc.lineart);
  }

  for(var i in desc.regions) {
    this.regions.push(new Region(this,desc.regions[i]));
  }
  
  this.update = function(slowdown,slowspeed) {    
    for(var i in this.regions) {
      this.regions[i].update(slowdown, slowspeed);
    }
  }
  
  this.reset = function() {
    for(var i in this.regions) {
      this.regions[i].reset();
    }
  }
  
  this.move_center = function(point) {
    this.cx = point.x;
    this.cy = point.y;
    this.x = (this.cx - (this.width / 2.0));
    this.y = (this.cy - (this.height / 2.0));
    
    this.lineart.move_center(point);
    
    for(var i = 0; i < this.regions.length; i++) {
      this.regions[i].move_center(point);
    }
  }
  
  this.draw = function() {
    for(var i = 0; i < this.regions.length; i++) {
      this.regions[i].draw();
    }
    this.lineart.draw(1);
  }
}