function BulletSpawner(descriptor) {
  this.bullet_type = descriptor.bullet_type;
  this.initial_heading = descriptor.heading;
  
  // optional
  this.components = descriptor.components || [];
  
  this.init = function() {
    for(var i = 0; i < this.components.length; i++) {
      this.components[i].init();
    }
  };
  
  this.update = function(slowdown,slowspeed) {
    for(var i = 0; i < this.components.length; i++) {
      this.components[i].update(this,slowdown,slowspeed);
    }
  };
  
  // spawners don't draw themselves, and the boss draws their bullets
  // but we don't want to break generic code
  this.draw = function() {
    return true;
  };

}