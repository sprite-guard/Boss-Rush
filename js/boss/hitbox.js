const HITBOX_CAPACITY = 180;

function Hitbox(parent,desc) {
  this.x = desc.x;
  this.y = desc.y;
  this.r = desc.r;
  this.region = parent;
  
  this.move_center = function(point) {
    this.cx = point.x;
    this.cy = point.y;
    this.x = (this.cx - (this.region.persona.width / 2.0));
    this.y = (this.cy - (this.region.persona.height / 2.0));
  }
}