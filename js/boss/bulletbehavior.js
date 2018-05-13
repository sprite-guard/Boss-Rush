var BulletBehavior = {};

BulletBehavior.bounce = function(parent) {
  if(parent.is_new) {
    // only use new model if legacy model hasn't been used.
    parent.remaining_bounces = parent.bounces || parent.parameters.bounces;
  }
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
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
//  console.log(parent);

  if(parent.is_new) {
    // only use new model if legacy model hasn't been used.
    parent.homing_timer = parent.parameters.homing_time;
    parent.max_yaw = parent.parameters.max_yaw;
  }

  if(parent.homing_timer >= 0) {
    parent.homing_timer -= speed;
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
};

BulletBehavior.explode = function(parent) {
  // speed modifier
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  // initializer
  if(parent.is_new) {
    parent.explode_timer = parent.parameters.explode_time;
    parent.explode_spawner = parent.parameters.explode_spawner;
  }
  // behavior
  if(parent.explode_timer > 0) {
    parent.explode_timer -= speed;
  } else {
    parent.cull();
    // move every spawner to the bullet's location
    for(var i = 0; i < parent.explode_spawner.sources.length; i++) {
      parent.explode_spawner.sources[i].x = parent.x;
      parent.explode_spawner.sources[i].y = parent.y;
    }
  //bullet spawner attack
    var new_spawner = new BulletSpawner(parent.parent.parent,parent.explode_spawner);
    new_spawner.init();
    parent.parent.parent.spawners.push(new_spawner);
  }
};

BulletBehavior.shootback = function(parent) {
  // speed modifier
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  
  if(parent.is_new) {
    // place the spawner
    // move every spawner to the bullet's location
    parent.shootback_spawner = parent.parameters.shootback_spawner;
    for(var i = 0; i < parent.shootback_spawner.sources.length; i++) {
      parent.shootback_spawner.sources[i].x = parent.x;
      parent.shootback_spawner.sources[i].y = parent.y;
      parent.shootback_spawner.sources[i].heading += parent.heading + Math.PI;
    }
    // attack the "follow target" behavior
    console.log(parent.shootback_spawner);
    parent.shootback_spawner.behaviors.push(SpawnerBehavior.followtarget);
    parent.shootback_spawner.parameters.follow_target = parent;
    var new_spawner = new BulletSpawner(parent.parent.parent,parent.shootback_spawner);
    new_spawner.init();
    parent.parent.parent.spawners.push(new_spawner);
  }
  
};

BulletBehavior.template = function(parent) {
  // speed modifier
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  // initializer
  if(parent.is_new) {
    parent.template_timer = parent.params.template_timer;
  }
  // behavior
  if(parent.template_timer > 0) {
    parent.template_timer -= speed;
  } else {
    // do the thing
  }
};

// TODO
// exploders
// shootback