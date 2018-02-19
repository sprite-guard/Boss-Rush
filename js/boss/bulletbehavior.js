var BulletBehavior = {};
BulletBehavior.bounce = function(parent) {

  if(parent.remaining_bounces > 0) {
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
      parent.remaining_bounces--;
    }
  }

};

BulletBehavior.homing = function(parent) {
  var x_offset = player.x - parent.x;
  var y_offset = player.y - parent.y;
  var target_heading = Math.atan2(y_offset,x_offset);
  var max_y = parent.max_yaw;
  var unsigned_difference = Math.abs(target_heading - parent.heading);
  var heading_sign = Math.sign(parent.heading);
  // convert to unsigned angle
  
  if(unsigned_difference > Math.PI) {
    my_heading = helpers.signed_angle_to_unsigned(parent.heading);
    their_heading = helpers.signed_angle_to_unsigned(target_heading);
  } else {
    // turn toward zero
  }
  // normalize the heading to (-pi, pi]
};

BulletBehavior.explode = function(spawner) {

};

BulletBehavior.shootback = function(spawner) {

};