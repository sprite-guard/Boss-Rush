function Choreography(parent,descriptor) {

  this.parent = parent;
  this.start_time = descriptor.start_time;
  this.duration = descriptor.duration;
  this.actions = descriptor.actions;
  
  // internal
  this.time_elapsed = 0;
  
  this.init = function() {
    this.time_elapsed = 0;
  }

  this.update = function(slowdown, slowspeed) {
    // apply slowdown
    var speed = 1;
    if(slowdown) {
      speed = slowspeed;
    } else {
      speed = 1;
    }
    if(this.parent.total_duration >= this.start_time) {
      
    } else {
    
    }
    
    this.time_elapsed += speed;
  };
}