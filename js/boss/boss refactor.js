function Boss(descriptor) {
  this.start_x = descriptor.x;
  this.start_y = descriptor.y;
  this.graphics = descriptor.graphics;
  this.phases = descriptor.phases;
  
  // optional
  this.components = descriptor.components || [];
  this.max_age = descriptor.max_age || Infinity;
  
  // internal
  this.age = 0;
  this.current_phase = 0;
  this.bullets = [];
  this.cached_bullet_sprites = [];
  
  this.init = function() {
    this.age = 0;
    this.current_phase = 0;
    this.active_phase = new Phase(this.phases[this.current_phase]);
    this.active_phase.init();
    this.x = start_x;
    this.y = start_y;
    
    for(var i = 0; i < this.components.length; i++) {
      this.components[i].update(this,slowdown,slowspeed);
    }
  };
  
  this.update = function(slowdown,slowspeed) {
    for(var i = 0; i < this.components.length; i++) {
      this.components[i].update(this,slowdown,slowspeed);
    }
    
    for(var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].update(slowdown,slowspeed);
    }
    
    // clean up bullets that went offscreen
    this.gc();
  };
  
  this.draw = function() {
    for(var i = 0; i < this.components.length; i++) {
      this.graphics[i].draw(this);
    }
    
    for(var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(this.cached_bullet_sprites);
    }
  };
  
  this.gc = function() {
    var res = [];
    for(var i = 0; i < this.bullets.length; i++) {
      if(this.bullets[i].is_alive()) {
        res.push(this.bullets[i]);
      }
    }
    this.bullets = res;
  };
}