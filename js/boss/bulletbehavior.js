function BulletBehavior(parent,descriptor) {
  this.parent = parent;
  this.init = descriptor.init || function() { return true; };
  this.update = descriptor.update;
  this.draw = descriptor.draw || function() { return true; };
}

BulletBehavior.Bounce = function(bounces) {
  this.remaining_bounces = bounces;
  this.init = function() {
    this.remaining_bounces = bounces;
  },

  this.update = function(parent) {
    console.log(this.remaining_bounces);
    if(this.remaining_bounces > 0) {
      var did_bounce = false;
      if((parent.x <= 0) || (parent.x >= game.width)) {
        parent.heading = Math.PI - parent.heading;
        did_bounce = true;
      }
      
      if((parent.y <= 0) || (parent.y >= game.height)) {
        parent.heading = (-1) * parent.heading;
        did_bounce = true;
      }
      
      if(did_bounce) {
        this.remaining_bounces--;
      }
    }
  }
};

BulletBehavior.homing = {

};

BulletBehavior.explode = function(spawner) {

};

BulletBehavior.shootback = function(spawner) {

};