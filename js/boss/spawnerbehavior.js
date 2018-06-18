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
  }
  
  if(parent.freeze_countdown > 0) {
    parent.freeze_countdown -= speed;
  } else if(parent.freeze_duration > 0) {
    // could cause problems if it's still spawning
    parent.set_bullet_speed(0);
    parent.freeze_duration -= speed;
  } else {
    parent.reset_bullet_speed();
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
    parent.beam_width = parent.parameters.scatter_beam_width || 2*Math.PI;
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
      next_direction += parent.scatter_direction * Math.PI;
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
}