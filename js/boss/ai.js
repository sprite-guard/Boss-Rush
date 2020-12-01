/* Infinite Ritual AI

Boss has some homes, and an AI state.
AI state tells the boss to move to different homes
based on time or player location

Boss needs to call AI every time it reaches a home.
Also need to be able to control speed, and do "bee lines"
where the boss changes direction mid-movement to reach
an important location.

*/

function AI(parent,desc) {

  this.parent = parent;
  
  this.homes = desc.homes;
  this.events = desc.events;
  this.target = desc.first_target || { x: 400, y: 300 };
  this.speed = desc.speed || 3;
  this.state = desc.start_state;
  this.tempo = desc.tempo || 120;
  
  this.current_home = 0;
  this.last_home = 0;
  this.tick = 0;
  
  this.update = function() {
    if(this.tick >= this.tempo) {
      this.tick = 0;
      this.advance();
    } else {
      this.tick ++;
    }
  }
  
  this.other_homes = function() {
    var res = [];
    for(var i = 0; i < this.homes.length; i++) {
      if(i !== this.current_home && i !== this.last_home) {
        res.push(this.homes[i]);
      } else {
        res.push(false);
      }
    }
    return res;
  };
  
  this.advance = function() {
    // fetch the next destination
    // update the home value to new destination
    var choices = this.other_homes();
    var home_index = AI.behaviors[this.state](choices);
    var new_home = home_index;
    this.last_home = this.current_home;
    this.current_home = new_home;
  }
  
  this.destination = function() {
    return this.homes[this.current_home];
  }
  
  this.origin = function() {
    return this.homes[this.last_home];
  }

}

AI.behaviors = {
  flee: function(options) {
    var target = {
      x: player.spirit.x || player.x,
      y: player.spirit.y || player.y
    };
    
    var best_distance = 0;
    var best_point = 0;
    
    for(var i = 0; i < options.length; i++) {
      if(options[i]) {
        var distance = helpers.distance_between(target,options[i]);
        if(distance > best_distance) {
          best_distance = distance;
          best_point = i;
        }
      }
    }
    
    return best_point;
  }
}