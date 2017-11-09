function Boss(descriptor) {
  // act as container for phases
  // proceed through phases as they are cleared
  // generate new phases from templates as they are needed
  // clean up phases when they are finished
  // manage music playing
  // store sprites
  this.start_x = descriptor.x;
  this.start_y = descriptor.y;

  // these need to have an index and container for each of them
  // just like in "phase.js"
  this.sprite_types = descriptor.sprites; // array of sprite descriptors
  this.phase_types = descriptor.phases; // array of phase descriptors
  
  // optional
  this.start_sprite = descriptor.start_sprite || 0;
  this.start_phase = descriptor.start_phase || 0;
  
  // internal
  this.current_sprite = this.start_sprite;
  
  this.init = function() {
    this.x = this.start_x;
    this.y = this.start_y;
    this.current_sprite = this.start_sprite;
    this.current_phase = this.start_phase;
  }
  
  this.update = function(slowdown,slowspeed) {
    // check if phase is done, update if needed
    // update current phase
  };
  
  this.draw = function() {
    // draw our current sprite
    // draw our current phase
  };
}