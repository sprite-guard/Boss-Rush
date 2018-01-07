function BulletSpawner(descriptor) {
  this.bullet_type = descriptor.bullet_type;
  this.initial_heading = descriptor.heading;
  
  
  this.sync = descriptor.sync || 0;
  this.lifespan = descriptor.lifespan + this.sync;
  
  // optional
  this.source_homes = descriptor.sources || [{x: descriptor.x, y: descriptor.y, heading: descriptor.heading}];
  this.aimed = descriptor.aimed;
  this.spin = descriptor.spin || 0;
  this.delay = descriptor.delay || 0;
  this.target = descriptor.target || player;
  // randomize everything
  this.random_spread = descriptor.random_spread || 0;
  this.yaw_jitter = descriptor.yaw_jitter || 0;
  this.speed_jitter = descriptor.speed_jitter || 0;
  // simplify ring-source spawners
  this.x = descriptor.x || 0;
  this.y = descriptor.y || 0;
  
  // internal
  this.sources = [];
  this.all_bullets = [];
  this.heading = this.initial_heading;
  
  this.init = function(){
    this.all_bullets = [];
    this.life_remaining = this.lifespan;
    this.timer = (this.delay + this.sync);
    this.alive = true;
    
    // initialize every source
    for(var i = 0; i < this.source_homes.length; i++) {
      this.sources[i] = {};
      this.sources[i].x = this.source_homes[i].x || this.x;
      this.sources[i].y = this.source_homes[i].y || this.y;
      this.sources[i].heading = this.source_homes[i].heading;
    }
  };
  
  this.update = function(slowdown, slowspeed) {
  
    // apply slowdown
    var speed_modifier;
    if(slowdown) {
      speed_modifier = slowspeed;
    } else {
      speed_modifier = 1;
    }
    
    if(this.life_remaining > 0) {
      if(this.timer <= 0) {
        // it is time to shoot
        // iterate over every source
        // update its heading
        // fire a bullet
        for(var i = 0; i < this.sources.length; i++) {
          // apply scatter
          var scatter = 0;
          
          if(this.random_spread > 0) {
            var offset = this.random_spread / 2;
            scatter = (Math.random() * this.random_spread) - offset;
          }
          // apply heading
          var next_direction = this.sources[i].heading;
          
          if(this.aimed) {
            // find the target's direction from this particular source
            var x_offset = this.target.x - this.sources[0].x;
            var y_offset = this.target.y - this.sources[0].y;
            var h = Math.atan2(y_offset,x_offset);
            next_direction += h;
          } else { // not aimed, it's a spinner or a sprayer
            next_direction += this.spin;
            this.sources[i].heading = next_direction;
          }
          
          // randomize speed and curvature
          var next_yaw_offset = Math.random() * this.yaw_jitter,
              next_speed_offset = Math.random() * this.speed_jitter;
          
          // fire bullet
          var next_bullet = new Bullet(this.bullet_type);
              next_bullet.heading = next_direction + scatter;
              next_bullet.x = this.sources[i].x;
              next_bullet.y = this.sources[i].y;
              next_bullet.yaw = next_bullet.yaw + next_yaw_offset;
              next_bullet.speed = next_bullet.speed + next_speed_offset;
              
          this.all_bullets.push( next_bullet );
          // housekeeping
          this.timer = this.delay;
        }
      } else {
        this.timer -= speed_modifier;
      }
      this.life_remaining -= speed_modifier;
    } else { // life is not remaining
      if(this.all_bullets.length == 0) this.alive = false;
    }
    
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].update(slowdown,slowspeed);
    }
    this.gc();
  };
  
  this.draw = function() {
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].draw();
    }
  };
  
  this.gc = function() {
    var res = [];
    for(var i = 0; i < this.all_bullets.length; i++) {
      if(this.all_bullets[i].exists) {
        res.push(this.all_bullets[i]);
      }
    }
    this.all_bullets = res;
  };
}