function Choreography(descriptor) {
  this.actions_list = descriptor.actions_list || [];
  
  this.current_action = 0;
  
  this.add_action = function(action) {
    this.actions_list.push(action);
  };
  
  this.advance = function(phase, spawners, slowdown, slowspeed){
    this.actions_list.current_
  };
}

function Action(descriptor) {

}