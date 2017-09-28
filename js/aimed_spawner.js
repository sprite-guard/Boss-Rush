function AimedBulletSpawner(descriptor) {
  this.x = descriptor.x;
  this.y = descriptor.y;
  this.heading = descriptor.heading;
  this.bullet_type = descriptor.bullet_type;
  this.lifespan = descriptor.lifespan;
  
  // optional
  this.spin = descriptor.spin || 0;
  this.delay = descriptor.delay || 0;
  this.sync = descriptor.sync || 0;
  
  this.randmin = descriptor.randmin || 0;
  this.randmax = descriptor.randmax || 0;
  this.randrange = (this.randmax - this.randmin);
  
  // internal
  this.timer = (descriptor.delay + descriptor.sync) || 0;
  this.life_remaining = this.lifespan;
  this.alive = true;
  this.all_bullets = [];
  
  this.update = function() {
  
    //nb not implemented yet
  
    console.log("AIMED BULLETS NOT IMPLEMENTED YET");
    game.pause();
    if(this.life_remaining > 0) {
      if(this.timer == 0) {
        var next_direction;

        var rand_offset = (Math.random() * this.randrange) + this.randmin;
        
        next_direction = rand_offset + this.heading;

        var next_bullet = this.bullet_type;
        next_bullet.heading = next_direction;
        next_bullet.x = this.x;
        next_bullet.y = this.y;
        
        this.heading += this.spin;

        this.life_remaining--;
        this.all_bullets.push(new Bullet(next_bullet));
        
        this.timer = this.delay;
      } else {
        this.timer--;
      }
    } else {
      if(this.all_bullets.length == 0) this.alive = false;
    }
    
    for(var i = 0; i < this.all_bullets.length; i++) {
      this.all_bullets[i].update();
    }
    this.gc();
  }
  
  this.gc = function() {
    var res = [];
    for(var i = 0; i < this.all_bullets.length; i++) {
      if(this.all_bullets[i].exists) {
        res.push(this.all_bullets[i]);
      }
    }
    this.all_bullets = res;
  }
}