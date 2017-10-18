function Boss(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.draw = descriptor.draw;
  this.phases = descriptor.phases;
  
  // internal
  this.phase = 0;
  
  this.update = function() {
    var n = this.phase;
    // Loop through attacks for the current phase
    this.phases[n].update();
    this.draw();
    
    // check if the end-of-phase condition is met (time, health, sattelites etc)
    if(this.phases[n].is_done()) {
      this.phase++
    }
    
    if(this.phase >= this.phases.length) {
      // nb not done
      game.current_scene = game.scenes_list.menu;
      game.current_scene.init();
      // create the exit portal, despawn bullets, etc
    }
  }
}

function Phase(descriptor) {
  this.timer = descriptor.timer;
  this.spawners = descriptor.spawners;
  this.choreography = descriptor.choreography;
  
  // optional
  this.health = descriptor.health || 1;
  
  this.is_done = descriptor.end_condition || function() {
    if(this.timer > 0) return false;
    else return true;
  };
  
  this.update = function() { 
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].update();
    }
  };
  
  this.draw = function() {
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].draw();
    }
  };
}