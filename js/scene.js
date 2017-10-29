function Scene(descriptor) {
  this.elements = descriptor.elements;
  this.init = descriptor.init;

  this.update = function() {
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].update();
    }
  };
  
  this.draw = function() {
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].draw();
    }
  };
}

var scenes_list = {};

scenes_list.menu = new Scene({
  elements: [
    new Background("#002244"),
    new MenuItem({
      x: 10,
      y: 10,
      w: 238,
      h: 46,
      font: "sans-serif",
      size: "32px",
      text: "Daily Challenge"
    }),
    new Portal({
      x: 268,
      y: 32,
      h: 16,
      destination: "test_scene"
    }),
    player
  ],

  init: function() {
    player.init();
  }
});

scenes_list.test_scene = new Scene({
  elements: [
    new Background("#002244"),
    test_boss,
    player
  ],
  init: function() {
    player.init();
  }
})