var SpawnerBehavior = {};

SpawnerBehavior.freeze = function(parent) {
  var speed = 1;
  if(game.current_scene.slowdown) {
    speed = game.current_scene.slowdown_speed;
  }
  
  if(parent.is_new) {
    // no legacy model for you!
    game.freeze_countdown = parent.parameters.freeze_countdown + parent.sync;
    game.freeze_duration = parent.parameters.freeze_duration;
  }
  
  if(game.freeze_countdown > 0) {
    game.freeze_countdown -= speed;
  } else if(game.freeze_duration > 0) {
    // could cause problems if it's still spawning
    console.log("freezing all of the bullets now");
    parent.set_bullet_speed(0);
    game.freeze_duration -= speed;
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
      parent.all_bullets[i].heading = Math.random() * 2 * Math.PI;
    }
    parent.has_not_scattered = false;
  } else {
    // do nothing
  }
}