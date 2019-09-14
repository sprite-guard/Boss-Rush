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
    if(parent.parameters.homing_delay) {
      parent.homing_delay = parent.parameters.homing_delay;
    } else {
      parent.homing_delay = 0;
    }
  }

  if((parent.homing_timer >= 0) && (parent.homing_delay <= 0)) {
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
  } else if(parent.homing_delay > 0) {
    parent.homing_delay --;
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
    parent.shootback_spawner = new BulletSpawner(parent,parent.parameters.shootback_spawner);
    parent.shootback_spawner.init();
  }
  
  parent.shootback_spawner.move_to(parent.x, parent.y);
  parent.shootback_spawner.update();
  parent.deferred_draw(parent.shootback_spawner);
  
  // NB we might need to cull these spawners manually

};

BulletBehavior.phasing = function(parent) {
  // speed modifier
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  // initializer
  if(parent.is_new) {
    // phase in and out based on an array of timers
    parent.phase_state_list = parent.parameters.phase_state_list;
    parent.phase_timer = parent.phase_state_list[0];
    // phased in or out?
    parent.is_present = parent.parameters.start_phase;
    // where in the list?
    parent.current_phase_state = 0;
    // transition
    parent.phase_transition_time = parent.parameters.transition_time;
    parent.max_r = parent.parameters.max_r || parent.parameters.r;
    parent.min_r = parent.parameters.min_r || 0;
  }
  // behavior
  if(parent.phase_timer > 0) {
    parent.phase_timer -= speed;
    // if we're within transition time of a switch
    // set the size based on what % of the way through the transition we are
    // otherwise set it to max/min based on which phase we're in
    
    // are we at the end of the phase?
    if(parent.phase_timer < parent.phase_transition_time) {
      // how far are we from the end of the phase?
      var distance_from_transition = parent.phase_timer / parent.phase_transition_time;
      
      var r_span = parent.max_r - parent.min_r;
      // which phase are we in?
      if(parent.is_present) {
        // shrink the bullet
        parent.r = min_r + (distance_from_transition * r_span);
      } else {
        // grow the bullet
        parent.r = max_r - (distance_from_transition * r_span);
      }
    }
  } else {
    // switch phase
    // reset phase timer
    // TODO
  }
};

BulletBehavior.stopyaw = function(parent) {
  // speed modifier
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  // initializer
  if(parent.is_new) {
    parent.stopyaw_timer = parent.parameters.stopyaw_timer;
  }
  // behavior
  if(parent.stopyaw_timer > 0) {
    parent.stopyaw_timer -= speed;
  } else {
    parent.yaw = 0;
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
    parent.template_timer = parent.parameters.template_timer;
  }
  // behavior
  if(parent.template_timer > 0) {
    parent.template_timer -= speed;
  } else {
    // do the thing
  }
};
