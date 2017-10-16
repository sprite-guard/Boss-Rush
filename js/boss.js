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
    if(this.phases[n].is_done) {
      this.phase++
    }
    
    if(this.phase >= this.phases.length) {
      game.current_scene.victory();
    }
  }
}