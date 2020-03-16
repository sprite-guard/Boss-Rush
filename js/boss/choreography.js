function Choreography(parent,descriptor) {

  this.parent = parent;
  this.movements = descriptor.movements || [];
  this.position = { x: 0, y: 0 };
  
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
    
    for(var i = 0; i < this.movements.length; i++) {
      var st = this.movements[i].start_time;
      var et = this.movements[i].end_time;
      var ct = this.time_elapsed;
      
      
      if((st <= ct) && (ct < et)) {
        var duration = et - st;
        var relative_time = ct - st;
        var t = relative_time / duration;
        
        var start = {
          x: this.movements[i].start_x,
          y: this.movements[i].start_y
        };
        
        var end = {
          x: this.movements[i].end_x,
          y: this.movements[i].end_y
        };
        
        this.position = helpers.lerp(start,end,t);
      }
    }
    
    this.time_elapsed += speed;
  };
}