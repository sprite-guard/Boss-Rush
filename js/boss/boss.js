function Boss(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.home = {x: this.x, y: this.y}
  this.graphic = descriptor.graphic;
  this.exit = descriptor.exit;
  
  // internal
  this.phase = 0;
  this.phases = [];
  this.is_alive = true;
  
  this.add_phase = function(phase) {
    this.phases.push( phase );
  }
  
  this.init = function() {
    this.phase = 0;
    this.x = this.home.x;
    this.y = this.home.y;
    for(var i = 0; i < this.phases.length; i++) {
      this.phases[i].init();
    }
    this.is_alive = true;
  }
  
  this.update = function(slowdown,slowspeed) {
    if(this.is_alive) {
      var n = this.phase;
      // Loop through attacks for the current phase
      this.phases[n].update(slowdown,slowspeed);
      
      // check if the end-of-phase condition is met (time, health, sattelites etc)
      if(this.phases[n].is_done()) {
        this.phase++
      }
      
      if(this.phase >= this.phases.length) {
        // NB not done
        // game.current_scene = game.scenes_list.menu;
        // game.current_scene.init();
        // create the exit portal, despawn bullets, etc
        // this.phases[this.phases.length - 1].despawn();
        // game.current_scene.elements.push(this.exit);
        this.is_alive = false;
      }
    }
  }
  
  this.draw = function() {
    if(this.is_alive){
      this.graphic();
      this.phases[this.phase].draw();
    }
  }
}

function Phase(parent,descriptor) {
  this.parent = parent;
  
  // optional
  this.attacks = descriptor.attacks || [];
  this.sprites = descriptor.sprites || [];
  this.wells = descriptor.wells || [];
  this.exits = descriptor.exits || [];
  this.is_random = descriptor.random || false;
  this.health = descriptor.health || Infinity;
  this.timer = descriptor.timer || Infinity;
  this.max_iframes = descriptor.iframes || 0;
  
  // internal
  this.iframes = 0;
  this.current_attack = false;
  
  this.init = function() {
    this.iframes = 0;
    this.current_attack = false;
    
    for(var i = 0; i < this.attacks.length; i++) {
      this.attacks[i].init();
    }
    
    for(var i = 0; i < this.wells.length; i++) {
      this.wells[i].init();
    }
    
    for(var i = 0; i < this.exits.length; i++) {
      this.exits[i].init();
    }
  };
  
  this.is_done = descriptor.end_condition || function() {
    var might_be_done = true;
    if(this.timer <= 0) {
      return true;
    }
    else {
      for(var i = 0; i < this.wells.length; i++) {
        if(!this.wells[i].is_full) {
          might_be_done = false;
        } // do not change might_be_done if well is full
      }
      return might_be_done;
    }
  };
  
  this.add_attack = function(descriptor) {
    this.attacks.push( new Attack(this, descriptor) );
  };
  
  this.update = function(slowdown,slowspeed) {
    var timer_increment = 1;
    var speed = 1;
    if(slowdown) {
      timer_increment = slowspeed;
      speed = slowspeed;
    }
  
    this.timer -= timer_increment;
    
    if(this.current_attack && this.attacks[this.current_attack - 1]) {
      var a = this.current_attack - 1;
      this.attacks[a].update(slowdown,slowspeed);
      
      if(this.attacks[a].is_done()) {
        console.log("attack number " + a + " is done");
        this.attacks[a].despawn();
        if(this.is_random) {
          this.current_attack = Math.floor(Math.random() * this.attacks.length) + 1;
        } else {
          this.current_attack += 1;
          if(this.current_attack > this.attacks.length) {
            this.current_attack = 1;
          }
        }
        this.attacks[this.current_attack - 1].init();
      }
    } else {
      // either this.current_attack isn't defined
      // or this current attack isn't
      if(this.is_random) {
        this.current_attack = Math.floor(Math.random() * this.attacks.length) + 1;
      } else {
        this.current_attack = 1;
      }
      if(this.attacks[this.current_attack - 1]) {
        this.attacks[this.current_attack - 1].init();
      }
    }
    
    for(var i = 0; i < this.wells.length; i++) {
      this.wells[i].update(slowdown,slowspeed);
    }
    
    for(var i = 0; i < this.exits.length; i++) {
      this.exits[i].update();
    }
    
  };
  
  this.draw = function() {
    for(var i = 0; i < this.attacks.length; i++) {
      this.attacks[i].draw();
    }
    
    for(var i = 0; i < this.wells.length; i++) {
      this.wells[i].draw();
    }
    
    for(var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].draw();
    }
    
    for(var i = 0; i < this.exits.length; i++) {
      this.exits[i].draw();
    }
  };
  
  this.despawn = function() {
    for(var i = 0; i < this.attacks.length; i++) {
      this.attacks[i].despawn();
    }
  };
  
  this.get_hurt = function() {
    this.health--;
    this.iframes = this.max_iframes;
  };
}

function Attack(parent,descriptor) {
  this.parent = parent;
  this.spawners = descriptor.spawners;
  
  // optional
  this.choreography = descriptor.choreography || false;
  this.max_age = descriptor.max_age;
  
  this.is_done = descriptor.is_done || function() {
  
    if(this.max_age) {
      if(this.age > this.max_age) return true;
    }
  
    // for the sake of one, I shall not destroy it
    for(var i = 0; i < this.spawners.length; i++) {
      if(this.spawners[i].alive) return false;
    }
    
    return true;
  };
  
  // internal
  this.age = 0;
  this.init = function() {
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].init();
    }
  }
  
  this.update = function(slowdown,slowspeed) {
    var speed = 1;
    if(slowdown) {
      speed = slowspeed;
    } else {
      speed = 1;
    }
    
    this.age += slowspeed;
    
    if(this.choreography) {
      this.choreography.advance(this.parent,this.spawners,slowdown,slowspeed);
    }
    
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].update(slowdown,slowspeed);
    }
  };
  
  this.draw = function() {
    
    for(var i = 0; i < this.spawners.length; i++) {
      // console.log(this.spawners[i]);
      this.spawners[i].draw();
    }
  };
  
  this.despawn = function() {
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].despawn();
    }
  };
}