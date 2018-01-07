function Phase(parent,descriptor) {
  // cycle through attacks
  // manage spirit wells, check if they are full
  // act as container for attacks
  // generate attacks from templates as needed
  
  this.parent = parent;
  
  this.attack_types = descriptor.attacks || [];
  this.spirit_wells = descriptor.spirit_wells || [];
  this.exits = descriptor.exits || [];
  this.max_timer = descriptor.duration || Infinity;
  this.timer = this.max_timer;
  
  this.start_attack_index = descriptor.start_attack || 0;
  this.current_attack_index = this.start_attack_index;
  
  this.is_done = function() {
    // we're only done if every single well is full
    // NB we might want to add a timer condition option if there are no wells.
    var there_is_a_filled_well = false;
    var there_is_an_unfilled_well = false;
    for(var i = 0; i < this.spirit_wells.length; i++) {
      if(this.spirit_wells[i].is_full) {
        // there is at least one well, and it is full.
        there_is_a_filled_well = true;
      } else {
        // we've found a well that isn't full
        // so we are absolutely not done in that sense
        // but if the timer runs out we still want to break
        there_is_an_unfilled_well = true;
      }
    }
      
    if(this.timer <= 0) {
      return true;
    } else {
      // there is at least one well filled
      // and there are no unfilled wells
      return (there_is_a_filled_well && !there_is_an_unfilled_well);
    }
  }
  
  this.init = function() {
    if(this.attack_types.length > 0) {
      // initialize the first attack
      this.current_attack_index = this.start_attack_index;
      var n = this.current_attack_index;
      this.current_attack = new Attack(this, this.attack_types[n]);
      this.current_attack.init();
      this.timer = this.max_timer;
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
    var time_increment = 1;
    if(slowdown) {
      time_increment = slowspeed;
    }
    
    this.timer -= time_increment;
  
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
    
    // update exits
    for(var i = 0; i < this.exits.length; i++) {
      this.exits[i].update(slowdown, slowspeed);
    }
  };
  
  this.draw_sprites = function() {
    
    // spirit wells
    for(var i = 0; i < this.spirit_wells.length; i++) {
      this.spirit_wells[i].draw();
    }
    
    // exits
    for(var i = 0; i < this.exits.length; i++) {
      this.exits[i].draw();
    }
    
    // avoidance timer
    if(this.timer < this.max_timer) {
      var portion_remaining = (this.timer / this.max_timer);
      var health_bar_width = portion_remaining * game.width;
      var health_bar_height = 10; // NB this is a magic number. Maybe move it?
      var health_bar_color = "#FF0000"; // NB same
      game.draw.fillStyle = health_bar_color;
      game.draw.fillRect(0,0,health_bar_width,health_bar_height);
    }
    
  };
  
  this.draw_bullets = function() {
    if(this.current_attack) {
      this.current_attack.draw();
    }
  };
}