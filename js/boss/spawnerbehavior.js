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
  }
  
  if(parent.scatter_countdown > 0) {
    parent.scatter_countdown -= speed;
  } else if(parent.has_not_scattered) {
    // scatter all of the bullets
    for(var i = 0; i < parent.all_bullets.length; i++) {
      // what quadrant are we in?
      /*
        0|1
        -+-
        2|3
      */
      var bullet = parent.all_bullets[i];
      var next_heading = Math.random()*Math.PI/2;
      var heading_transform = -1;
      if(bullet.y < 300) heading_transform = 1;
      if(bullet.x > 400) heading_transform += (Math.PI/2)*heading_transform;
      parent.all_bullets[i].heading = heading_transform+next_heading;
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