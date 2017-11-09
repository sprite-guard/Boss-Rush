function Choreography(parent,descriptor) {
  this.attack = parent;
  this.actions_list = descriptor.actions_list || [];
  
  this.current_action = 0;
  
  this.init = function() {
    this.current_action = 0;
  };
  
  this.add_action = function(action) {
    this.actions_list.push(action);
  };
  
  this.update = function(slowdown, slowspeed){
    // NB does not do anything yet
    return true;
  };
}

function Action(descriptor) {

}