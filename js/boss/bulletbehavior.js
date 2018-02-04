function BulletBehavior(parent,descriptor) {
  this.parent = parent;
  this.init = descriptor.init || function() { return true; };
  this.update = descriptor.update;
  this.draw = descriptor.draw || function() { return true; };
}

BulletBehavior.bounce = function(bounces) {
  return {
    init: function() {
      this.remaining_bounces = bounces;
    },

    update: function() {
      if(this.remaining_bounces > 0) {
        var did_bounce = false;
        if((this.parent.x <= 0) || (this.parent.x >= game.width)) {
          this.parent.heading = Math.PI - this.parent.heading;
          did_bounce = true;
        }
        
        if((this.parent.y <= 0) || (this.parent.y >= game.height)) {
          this.parent.heading = (-1) * this.parent.heading;
          did_bounce = true;
        }
        
        if(did_bounce) {
          this.remaining_bounces--;
        }
      }
    }
  };
};

BulletBehavior.homing = {

};

BulletBehavior.explode = function(spawner) {

};

BulletBehavior.shootback = function(spawner) {

};