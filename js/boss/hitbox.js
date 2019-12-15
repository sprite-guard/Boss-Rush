const HITBOX_CAPACITY = 180;

function Hitbox(desc) {
  this.x = desc.x;
  this.y = desc.y;
  this.r = desc.r;
  
  // must specify what image we're connected to
  this.layer = desc.layer;
  
  // internal
  this.active = false;
  this.completion = 0;
  this.is_complete = false;
  
  this.update = function(slowdown,slowspeed) {
    var speed_modifier;
    if(slowdown) {
      speed_modifier = slowspeed;
    } else {
      speed_modifier = 1;
    }
    if(this.completion < HITBOX_CAPACITY) {
      if(this.active) {
        this.completion += speed_modifier;
      }
    } else {
      this.is_complete = true;
      this.completion = HITBOX_CAPACITY;
    }
  }
}