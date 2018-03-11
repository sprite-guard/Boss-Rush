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

BulletBehavior.limited_homing = function(parent) {
//  console.log(parent);

  if(parent.homing_timer >= 0) {
    parent.homing_timer --;
    var home_rotation = new ComplexRotation(parent.heading);
    
    var x_offset = player.x - parent.x;
    var y_offset = player.y - parent.y;
    var target_rotation_rad = Math.atan2(y_offset,x_offset);
    var target_rotation = new ComplexRotation(target_rotation_rad);
    
    //console.log(target_rotation);
    var relative_rotation = home_rotation.subtract(target_rotation);
    
    var turn_amount = new ComplexRotation(parent.max_yaw);
    var new_rotation = {};
    
    if(Math.abs(relative_rotation.angle) < parent.max_yaw) {
//      console.log("turning all the way");
      new_rotation.angle = target_rotation_rad;
    } else if(relative_rotation.angle > 0) {
      // turn left
      new_rotation = home_rotation.subtract(turn_amount);
//      console.log("turning left");
    } else if(relative_rotation.angle <= 0) {
      // turn right
      new_rotation = home_rotation.add(turn_amount);
//      console.log("turning right");
    }
//    console.log("new angle is ",new_rotation);
    parent.heading = new_rotation.angle;
  }

}

BulletBehavior.explode = function(spawner) {

};

BulletBehavior.shootback = function(spawner) {

};