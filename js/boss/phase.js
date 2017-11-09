function Phase(descriptor) {
  // cycle through attacks
  // manage spirit wells, check if they are full
  // act as container for attacks
  // generate attacks from templates as needed
  
  this.attack_types = descriptor.attacks || [];
  this.spirit_wells = descriptor.spirit_wells || [];
  this.exits = descriptor.exits || [];
  
  this.start_attack_index = descriptor.start_attack || 0;
  this.current_attack_index = this.start_attack_index;
  
  this.is_done() {
    // we're only done if every single well is full
    // NB we might want to add a timer condition option if there are no wells.
    var might_be_done = false;
    for(var i = 0; i < this.spirit_wells.length; i++) {
      if(this.spirit_wells[i].is_full) {
        // there is at least one well, and it is full.
        might_be_done = true;
      } else {
        // we've found a well that isn't full
        // so we break out of the loop entirely
        return false;
      }
    }
    return might_be_done; // will be false if there are no wells
                          // and true if all wells are full
                          // won't be reached if there is a well that isn't full.
  }
  
  this.init = function() {
    if(this.attack_types.length > 0) {
      // initialize the first attack
      var n = this.current_attack_index;
      this.current_attack = new Attack(this, this.attack_types[n]);
    }
    
    if(this.spirit_wells.length > 0) {
      // initialize spirit wells
      for(var i = 0; i < this.spirit_wells.length; i++) {
        this.spirit_wells[i].init();
      }
    }
    
    if(this.exits.length > 0) {
      // initialize exits
      for(var i = 0; i < this.exits.length; i++) {
        this.exits[i].init();
      }
    }
  };
  
  this.update = function(slowdown,slowspeed) {
    // change current attack if it's done
    if(this.current_attack) {
      if(this.current_attack.is_done) {
        this.current_attack.despawn(true);
        var n = this.get_next_attack_index();
        this.current_attack_index = n;
        this.current_attack = new Attack(this, this.attack_types[n]);
      }
    }
    
    // update current attack
    if(this.current_attack) {
      this.current_attack.update(slowdown, slowspeed);
    }
  
    // update spirit wells
    for(var i = 0; i < this.spirit_wells.length; i++) {
      this.spirit_wells[i].update(slowdown, slowspeed);
    }
  };
  
  this.draw = function() {
  
    // spirit wells
    for(var i = 0; i < this.spirit_wells.length; i++) {
      this.spirit_wells[i].draw();
    }
  };
}