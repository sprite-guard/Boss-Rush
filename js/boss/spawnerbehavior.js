var SpawnerBehavior = {};

SpawnerBehavior.freeze = function(parent) {
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  
  if(parent.is_new) {
    // no legacy model for you!
    parent.freeze_countdown = parent.parameters.freeze_countdown + parent.sync;
    parent.freeze_duration = parent.parameters.freeze_duration;
    parent.freeze_is_done = false;
  }
  
  if(parent.freeze_countdown > 0) {
    parent.freeze_countdown -= speed;
  } else if(parent.freeze_duration > 0) {
    // could cause problems if it's still spawning
    parent.set_bullet_speed(0);
    parent.freeze_duration -= speed;
  } else if(!parent.freeze_is_done) {
    parent.reset_bullet_speed();
    parent.freeze_is_done = true;
  }
};

SpawnerBehavior.pop_in = function(parent) {
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  
  if(parent.is_new) {
    parent.pop_timings = parent.parameters.pop_timings;
    parent.pop_index = 0;
    parent.current_pop_timer = parent.parameters.pop_timings[parent.pop_index];
    parent.current_pop_state = parent.parameters.start_pop || "in";
    parent.pop_loop = parent.parameters.pop_loop;
    parent.pop_r = parent.parameters.pop_r;
  }
  
  if(parent.current_pop_timer > 0) {
    parent.current_pop_timer -= speed;
  } else {
    // swap the state
    if(parent.current_pop_state == "in") {
      parent.current_pop_state = "out";
      for(var i = 0; i < parent.all_bullets.length; i++) {
        parent.all_bullets[i].r = 0;
        parent.all_bullets[i].halo = parent.pop_r;
      }
    } else if(parent.current_pop_state == "out") {
      parent.current_pop_state = "in";
      for(var i = 0; i < parent.all_bullets.length; i++) {
        parent.all_bullets[i].r = parent.pop_r;
        parent.all_bullets[i].halo = 0;
      }
    }
    // increment index and reset timer
    parent.pop_index++;
    if(parent.pop_index > parent.pop_timings.length) {
      if(parent.pop_loop) {
        // loop
        parent.pop_index = 0;
        parent.current_pop_timer = parent.pop_timings[parent.pop_index];
      } else {
        // set pop timer to +Infinity
        parent.current_pop_timer = Infinity;
      }
    } else {
      parent.current_pop_timer = parent.pop_timings[parent.pop_index];
    }
  }
  
};

SpawnerBehavior.scatter = function(parent) {
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  if(parent.is_new) {
    parent.scatter_countdown = parent.parameters.scatter_countdown + parent.sync;
    parent.has_not_scattered = true;
    parent.target = parent.parameters.scatter_target || {x: 0, y:0};
    parent.beam_width = parent.parameters.scatter_beam_width;
    parent.scatter_direction = parent.parameters.scatter_direction || 1;
  }
  
  if(parent.scatter_countdown > 0) {
    parent.scatter_countdown -= speed;
  } else if(parent.has_not_scattered) {
    // scatter all of the bullets
    for(var i = 0; i < parent.all_bullets.length; i++) {
      var bullet = parent.all_bullets[i];
      // find the target's direction from this particular source
      var x_offset = parent.target.x - bullet.x;
      var y_offset = parent.target.y - bullet.y;
      var h = Math.atan2(y_offset,x_offset);
      var next_direction = h;
      // reverse if necessary
      if(parent.scatter_direction < 0) {
        next_direction += Math.PI;
      }
      // add the beam spread
      var randomization = (Math.random() * parent.beam_width) - (parent.beam_width / 2);
      next_direction += randomization;
      parent.all_bullets[i].heading = next_direction;
    }
    parent.has_not_scattered = false;
  } else {
    // do nothing
  }
};

SpawnerBehavior.followtarget = function(parent) {

  if(parent.is_new) {
    parent.follow_target = parent.parameters.follow_target;
  }
  // move every source to the bullet's location
  for(var i = 0; i < parent.sources.length; i++) {
    parent.sources[i].x = parent.follow_target.x;
    parent.sources[i].y = parent.follow_target.y;
  }
};

SpawnerBehavior.juke = function(parent) {
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  if(parent.is_new) {
    parent.juke_countdown = parent.parameters.juke_countdown + parent.sync;
    parent.has_not_juked = true;
    parent.juke_beam_width = parent.parameters.juke_beam_width || 0;
    parent.juke_direction = parent.parameters.juke_direction || 0;
  }
  
  if(parent.juke_countdown > 0) {
    parent.juke_countdown -= speed;
  } else if(parent.has_not_juked) {
    // juke all of the bullets
    for(var i = 0; i < parent.all_bullets.length; i++) {
      var bullet = parent.all_bullets[i];
      var next_direction = parent.juke_direction;
      // add the beam spread
      var randomization = (Math.random() * parent.juke_beam_width) - (parent.juke_beam_width / 2);
      next_direction += randomization;
      parent.all_bullets[i].heading = next_direction;
    }
    parent.has_not_juked = false;
  } else {
    // do nothing
  }
};

SpawnerBehavior.speedup = function(parent) {
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  
  if(parent.is_new) {
    parent.bullet_speedup_delay = parent.parameters.bullet_speedup_delay + parent.sync;
    parent.bullet_speedup = parent.parameters.bullet_speedup;
    parent.max_bullet_speed = parent.parameters.max_bullet_speed;
    parent.min_bullet_speed = parent.parameters.min_bullet_speed;
    parent.speedup_has_begun = false;
  }
  
  if(parent.bullet_speedup_delay > 0) {
    parent.bullet_speedup_delay --;
    return;
  }
  
  if(parent.bullet_speedup_delay === 0 && !parent.speedup_has_begun) {
    parent.bullet_speed = parent.min_bullet_speed;
    parent.speedup_has_begun = true;
  }
  
  if(parent.bullet_speed < parent.max_bullet_speed) {
    parent.bullet_speed += parent.bullet_speedup;
    parent.set_bullet_speed(parent.bullet_speed);
  } else {
    // do nothing?
  }
};