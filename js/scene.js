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
  
  this.check_collisions = function() {
  // NB CHANGE EVERYTHING
    var player_hb_squared = 0;
    var player_gb_squared = player.graze_radius * player.graze_radius;
    
    for(var spawner = 0; spawner < game.spawners.length; spawner++) {
      var bullet_radius = game.spawners[spawner].bullet_type.r - 2;
      var bullet_radius_squared = (bullet_radius * bullet_radius);
      
      var striking_distance = bullet_radius_squared + player_hb_squared;
      var grazing_distance = bullet_radius_squared + player_gb_squared;

      for(var i = 0; i < game.spawners[spawner].all_bullets.length; i++) {
        
        var current_bullet = game.spawners[spawner].all_bullets[i];
        
        // collide with player
        var x_distance = Math.abs(current_bullet.x - player.x);
        var y_distance = Math.abs(current_bullet.y - player.y);
        var xsq = (x_distance * x_distance);
        var ysq = (y_distance * y_distance);
        
        if((xsq + ysq) < striking_distance) player.get_hurt();
        
        if((xsq + ysq) < grazing_distance) {
          game.spawners[spawner].all_bullets[i].graze();
          player.graze();
        } else {
          game.spawners[spawner].all_bullets[i].ungraze();
        }

        // collide with shield
        
        // maybe get bombed? I dunno if bombs are even a thing.
      }
    }
  }
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