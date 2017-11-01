function Boss(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.home = {x: this.x, y: this.y}
  this.graphic = descriptor.graphic;
  this.exit = descriptor.exit;
  
  // internal
  this.phase = 0;
  this.phases = [];
  
  this.add_phase = function(descriptor) {
    this.phases.push( new Phase(this, descriptor) );
  }
  
  this.init = function() {
    this.phase = 0;
    this.x = this.home.x;
    this.y = this.home.y;
    for(var i = 0; i < this.phases.length; i++) {
      this.phases[i].init();
    }
  }
  
  this.update = function() {
    var n = this.phase;
    // Loop through attacks for the current phase
    this.phases[n].update();
    
    // check if the end-of-phase condition is met (time, health, sattelites etc)
    if(this.phases[n].is_done()) {
      this.phase++
    }
    
    if(this.phase >= this.phases.length) {
      // nb not done
      game.current_scene = game.scenes_list.menu;
      game.current_scene.init();
      // create the exit portal, despawn bullets, etc
      this.phases[this.phases.length - 1].despawn();
    }
  }
  
  this.draw = function() {
    this.graphic();
    this.phases[this.phase].draw();
  }
}

function Phase(parent,descriptor) {
  this.parent = parent;
  
  // optional
  this.attacks = descriptor.attacks || [];
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
  };
  
  this.is_done = descriptor.end_condition || function() {
    if(this.timer <= 0) return true;
    if(this.health <= 0) return true;
    else return false;
  };
  
  this.add_attack = function(descriptor) {
    this.attacks.push( new Attack(this, descriptor) );
  };
  
  this.update = function() {
    this.timer--;
    
    if(this.current_attack) {
      var a = this.current_attack - 1;
      this.attacks[a].update();
      
      if(this.attacks[a].is_done()) {
        if(this.is_random) {
          this.current_attack = Math.floor(Math.random() * this.attacks.length) + 1;
        } else {
          this.current_attack += 1;
          if(this.current_attack > this.attacks.length) {
            this.current_attack = 1;
          }
        }
      }
    } else {
      if(this.is_random) {
        this.current_attack = Math.floor(Math.random() * this.attacks.length) + 1;
      } else {
        this.current_attack = 1;
      }
    }
    
    
  };
  
  this.draw = function() {
    for(var i = 0; i < this.attacks.length; i++) {
      this.attacks[i].draw();
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
  }
}

function Attack(parent,descriptor) {
  this.parent = parent;
  this.spawners = descriptor.spawners;
  
  // optional
  this.choreography = descriptor.choreography || function() {
    return true;
  };
  
  this.is_done = descriptor.is_done || function() {
  
    // for the sake of one, I shall not destroy it
    for(var i = 0; i < this.spawners.length; i++) {
      if(this.spawners[i].alive) return false;
    }
    
    return true;
  };
  
  // internal
  this.init = function() {
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].init();
    }
  }
  
  this.update = function() {
    this.choreography(this.parent,this.spawners);
    
    for(var i = 0; i < this.spawners.length; i++) {
      this.spawners[i].update();
    }
  };
  
  this.draw = function() {
    // return true;
    
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