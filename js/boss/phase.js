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
  this.randomize_attacks = descriptor.randomize_attacks;
  this.cycle = descriptor.cycle;
  
  this.music = new Sound(descriptor.music) || false;
  
  this.get_next_attack_index = function() {
    if(this.randomize_attacks) {
      return Math.floor(Math.random() * this.attack_types.length);
    } else {
      return (this.current_attack_index + 1) % (this.attack_types.length);
    }
  }
  
  this.is_done = function() {
    if(this.timer <= 0) {
      return true;
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
    
    if(this.music) {
      game.music = this.music;
      game.music.rewind();
      game.music.play();
    }
  };
  
  
  this.update = function(slowdown,slowspeed) {
    var time_increment = 1;
    
    // slow the music if the framerate wobbles
    var jitter = game.fr / 60;
    
    if(slowdown) {
      time_increment = slowspeed;
      game.music.setspeed(slowspeed * jitter);
    } else {
      game.music.setspeed(1 * jitter);
    }
    
    
    this.timer -= time_increment;
  
    // change current attack if it's done
    if(this.current_attack) {
      if(this.current_attack.is_done && this.cycle) {
        this.current_attack.despawn(false);
        var n = this.get_next_attack_index();
        this.current_attack_index = n;
        this.current_attack = new Attack(this, this.attack_types[n]);
        this.current_attack.init();
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
        
      game.draw.fillStyle = "#FFFFFF";
      game.draw.font = "10px monospace";
      game.draw.fillText(Math.floor(this.max_timer - this.timer),2,7);
    }
    
  };
  
  this.draw_bullets = function() {
    if(this.current_attack) {
      this.current_attack.draw();
    }
  };
}