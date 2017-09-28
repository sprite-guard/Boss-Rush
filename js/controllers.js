var controllers = {};

controllers.init = function() {
  window.addEventListener("gamepadconnected", function(e) {
    game.gamepads[e.gamepad.index] = e.gamepad;
  });
  
  window.addEventListener("gamepaddisconnected", function(e) {
    game.gamepads[e.gamepad.index] = false;
  });
}