function Scene(descriptor) {
  this.elements = descriptor.elements;
  this.boss_type = descriptor.boss;
  this.player = descriptor.player;
  this.timeout = descriptor.timeout || Infinity;
  this.time_remaining = this.timeout;
  this.next_scene = descriptor.next_scene;
  this.no_reset = descriptor.no_reset;

  if(descriptor.music) {
    if(typeof descriptor.music === "string") {
      this.music = new Sound(descriptor.music, true);
    } else {
      this.music = descriptor.music;
    }
  }

  this.special_init = descriptor.init || function() { return true; };

  // internal
  this.slowdown_speed = 1;
  this.slowdown = false;

  this.init = function() {
    this.time_remaining = this.timeout;
    if(game.music) {
      game.music.pause();
      if(!this.no_reset) {
        game.music.rewind();
      }
    }
    if(this.music) {
      game.music = this.music;
      game.music.pause();
      if(!this.no_reset) {
        game.music.rewind();
      }
      game.music.play();
    }
    this.special_init();
    
    if(this.boss_type) {
      this.boss = new Boss(this.boss_type);
      this.boss.init();
    }
    this.slowdown = false;
  };
  
  this.update = function() {
      
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].update(this.slowdown, this.slowdown_speed);
    }
    
    if(this.boss) {
      this.boss.update(this.slowdown, this.slowdown_speed);
    }
    
    if(this.player) {
      this.player.update(this.slowdown, this.slowdown_speed);
    }
    this.time_remaining--
    
    if((this.time_remaining <= 0)&&this.next_scene) {
      game.current_scene = this.next_scene;
      game.current_scene.init();
    }
    
    if(game.music) {
      game.music.setvolume(game.volume);
    }
  };
  
  this.draw = function() {
  
    // draw order:
    // UI
    // spirit wells + boss
    // player
    // bullets
    // should spirit be above bullets?
  
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].draw();
    }
    
    if(this.boss) {
      this.boss.draw_sprites();
    }
    
    if(this.player) {
      this.player.draw();
    }
    
    if(this.boss) {
      this.boss.draw_bullets();
    }
    
    if(player.dead) {
      TextElement.GAMEOVER.draw();
    }
    // if(this.prescreen.is_showing) {
      // this.prescreen.draw();
    // }
  };
  
  this.game_over = function() {
    player.spirit = false;
    player.dash_target = false;
    player.dead = true;
  }
  
  this.check_collisions = function() {
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
/*
var scenes_list = {};

var top_line = "Infinite",
    bottom_line = "Ritual";

scenes_list.menu = new Scene({
//  prescreen: PreScreen.Default(),
  elements: [
    Background.DEFAULT,
    new MenuItem({
      x: 10,
      y: 10,
      w: 160,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Test Boss"
    }),
    new Portal({
      x: 200,
      y: 32,
      h: 16,
      destination: "test_scene"
    }),
    new MenuItem({
      x: 610,
      y: 10,
      w: 130,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Settings"
    }),
    new Portal({
      x: 770,
      y: 32,
      h: 16,
      destination: "settings"
    }),
    new TextElement([
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "128px serif",
        line_width: 2,
        x: 32,
        y: 250,
        text: "Infinite"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "128px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Ritual"
      })
    ])

  ],
  player: player,
  init: function() {
    player.init();
  },
  music: "music/GlitchCat7 - Bullet_Hell_baseline.mp3",
  no_reset: true
});

scenes_list.settings = new Scene({
  elements: [
    Background.DEFAULT,
    new MenuItem({
      x: 10,
      y: 10,
      w: 175,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Main Menu"
    }),
    new MenuItem({
      x: 10,
      y: 100,
      w: 175,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Volume"
    }),
    new Slider({
      x: 195,
      y: 100,
      w: 300,
      h: 44,
      min: 0,
      max: 1,
      value: 1,
      binding: game.volume
    }),
    new Portal({
      x: 210,
      y: 32,
      h: 16,
      destination: "menu"
    })
  ],
  player: player,
  music: "music/GlitchCat7 - Bullet_Hell_baseline.mp3",
  no_reset: true
});

scenes_list.thaumiel = new Scene({
  elements: [ Background.INGAME ],
  init: function() {
    player.init();
  },
  boss: thaumiel,
  player: player,
 // prescreen: new PreScreen(thaumiel.metadata)
});

scenes_list.dream_child = new Scene({
  elements: [ Background.INGAME ],
  init: function() {
    player.init();
  },
  boss: hope,
  player: player,
 // prescreen: new PreScreen(thaumiel.metadata)
});

scenes_list.kinetic = new Scene({
  elements: [ Background.INGAME ],
  init: function() {
    player.init();
  },
  boss: kinetic,
  player: player,
});

scenes_list.symmetria = new Scene({
  elements: [ Background.INGAME ],
  init: function() {
    player.init();
  },
  boss: symmetria,
  player: player,
});
*/