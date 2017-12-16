function Attack(parent, descriptor) {
  // move boss and/or spawners around (choreography)
  // act as container for spawners
  // create spawners from a stored template when required
  // destroy them and clean up
  // trigger sprites
  
  this.phase = parent;
  
  this.max_duration = descriptor.max_duration || Infinity;
  
  // descriptors
  this.spawner_types = descriptor.spawners || [];
  this.choreography_type = descriptor.choreography || {};
  
  // internal
  this.spawners = [];
  
  this.init = function() {
    this.total_duration = 0;
    
    for(var i = 0; i < this.spawner_types.length; i++) {
      this.spawners[i] = new BulletSpawner(this.spawner_types[i]);
      this.spawners[i].init();
    }
    
    this.choreography = new Choreography(this, this.choreography_type);
    this.choreography.init();
  };
  
  this.despawn = function(hard) {
    // despawn each spawner
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].despawn(hard);
    }
    
    // clear temporary objects
    this.spawners = [];
    this.choreography = false;
  };
  
  this.update = function(slowdown,slowspeed) {
    // apply slowdown
    var speed = 1;
    if(slowdown) {
      speed = slowspeed;
    } else {
      speed = 1;
    }
    
    // update elements
    this.total_duration += speed;
    this.choreography.update(slowdown,slowspeed);
    
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].update(slowdown,slowspeed);
    }
  };
  
  this.draw = function() {
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].draw();
    }
  };
}