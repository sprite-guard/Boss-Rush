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
  //this.sprite_types = descriptor.sprites; // array of sprite descriptors
  this.phase_types = descriptor.phases; // array of phase descriptors

  
  this.persona_type = descriptor.persona;
  
  // optional
  //this.start_sprite = descriptor.start_sprite || 0;
  this.start_phase = descriptor.start_phase || 0;
  
  // internal
  // the boss needs to handle bullets at the top level, so that
  // megaman-style bosses don't have a free period between attacks.
  this.active_bullets = [];
  
  // since bullets are handled at the top level, if we decide to do
  // blitting like madewokherd suggested, then we'll need to store
  // them at the top level too.
  this.cached_sprites = [];
  
  this.preload = function() {
    if(this.persona_type && !this.persona) {
      this.persona = new Persona(this.persona_type);
    }
  }
  
  this.init = function() {
    if(!this.persona) {
      this.preload();
    }
    this.x = this.start_x;
    this.y = this.start_y;
    this.current_phase = this.start_phase;
    this.active_phase = new Phase(this, this.phase_types[this.current_phase]);
    
    // reset all coloring completion values.
    if(this.persona) {
      this.persona.reset();
    }
    
    this.active_phase.init();
  }
  
  this.update = function(slowdown,slowspeed) {
    // check if phase is done, update if needed
    if(this.active_phase.is_done()) {
      // NB the exit phase should not end and it is an error if it does.
      this.current_phase += 1
      this.active_phase = new Phase(this, this.phase_types[this.current_phase]);
      this.active_phase.init();
    } else {
    // update current phase
      this.active_phase.update(slowdown,slowspeed);
    }
    
    if(this.persona && this.active_phase.current_attack) {
      this.persona.update(slowdown,slowspeed);
      this.persona.move_center(this.active_phase.current_attack.choreography.position);
    }
    
    if(this.active_sprite) {
      this.active_sprite.move_center(this.active_phase.current_attack.choreography.position);
    }
  };
  
  this.draw_sprites = function() {
    // draw our current sprite
    //this.active_sprite.draw();
    // draw our current phase
    this.active_phase.draw_sprites();
    
    if(this.persona && this.active_phase.current_attack) {
      this.persona.draw();
    }
  };
  
  this.draw_bullets = function() {
    this.active_phase.draw_bullets();
  }
}