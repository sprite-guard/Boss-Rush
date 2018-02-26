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
  // retarget every n frames
  // NB needs slowdown
  if(parent.homing_timer >= 0) {
    parent.homing_timer --;
    var x_offset = player.x - parent.x;
    var y_offset = player.y - parent.y;
    var target_heading = Math.atan2(y_offset,x_offset);
    parent.heading = target_heading;
  }
/*
  // man cannot live by angles alone
  var x_offset = player.x - parent.x;
  var y_offset = player.y - parent.y;
  var target_heading = Math.atan2(y_offset,x_offset);
  var max_yaw = parent.max_yaw;
  var unsigned_difference = Math.abs(target_heading - parent.heading);
  var heading_sign = Math.sign(parent.heading);
  var target_sign = Math.sign(target_heading);
  
  if(unsigned_difference < max_yaw) {
    parent.heading = target_heading;
  } else if(heading_sign == target_sign) {
    
  }
*/
};

BulletBehavior.explode = function(spawner) {

};

BulletBehavior.shootback = function(spawner) {

};