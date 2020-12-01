var scenes_list = {};

var top_line = "Infinite",
    bottom_line = "Ritual";
    
scenes_list.shared_music = {
  title_music: new Sound("music/GlitchCat7 - Bullet_Hell_baseline.mp3",true)
}

scenes_list.menu = new Scene({
  elements: [
    Background.DEFAULT,
    new MenuItem({
      x: 450,
      y: 180,
      w: 195,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Test Boss"
    }),
    new Portal({
      x: 670,
      y: 202,
      h: 16,
      destination: "test_scene"
    }),
    new MenuItem({
      x: 10,
      y: 10,
      w: 130,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Settings"
    }),
    new Portal({
      x: 170,
      y: 32,
      h: 16,
      destination: "settings"
    }),
    new MenuItem({
      x: 450,
      y: 80,
      w: 195,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Thaumiel"
    }),
    new Portal({
      x: 670,
      y: 102,
      h: 16,
      destination: "thaumiel_intro"
    }),
    new MenuItem({
      x: 450,
      y: 130,
      w: 195,
      h: 44,
      font: "sans-serif",
      size: "32px",
      text: "Dream Child"
    }),
    new Portal({
      x: 670,
      y: 152,
      h: 16,
      destination: "dream_intro"
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
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: false,
        font: "16px serif",
        line_width: 2,
        x: 32,
        y: 580,
        text: "Title music by GlitchCat7"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: false,
        font: "16px serif",
        line_width: 2,
        x: 32,
        y: 560,
        text: "Programming and design by SpriteGuard"
      })
    ])

  ],
  player: player,
  init: function() {
    player.init();
  },
  music: scenes_list.shared_music.title_music,
  no_reset: true
});

scenes_list.splash = new Scene({
  elements: [
    new JumpPortal({
      destination: "menu",
      trigger: function() { return CONTROLS.any; }
    }),
    Background.DEFAULT,
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
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: false,
        font: "16px serif",
        line_width: 2,
        x: 32,
        y: 580,
        text: "Title music by GlitchCat7"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: false,
        font: "16px serif",
        line_width: 2,
        x: 32,
        y: 560,
        text: "Programming and design by SpriteGuard"
      })
    ])
  ],
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
      binding: {
        getter: function() { return game.volume },
        setter: function(n) { game.volume = n }
      }
    }),
    new Portal({
      x: 210,
      y: 32,
      h: 16,
      destination: "menu"
    })
  ],
  player: player,
  music: scenes_list.shared_music.title_music,
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
  boss: dreamchild,
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

scenes_list.avoidance = new Scene({
  elements: [ Background.INGAME ],
  init: function() {
    player.init();
  },
  boss: avoidance_boss,
  player: player
});

scenes_list.weaver = new Scene({
  elements: [ Background.INGAME ],
  init: function() {
    player.init();
  },
  boss: weaver,
  player: player
})
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
  music: game.shared_music_pool.menu,
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
      binding: {
        getter: function() { return game.volume },
        setter: function(n) { game.volume = n }
      }
    }),
    new Portal({
      x: 210,
      y: 32,
      h: 16,
      destination: "menu"
    })
  ],
  player: player,
  music: game.shared_music_pool.menu,
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
});*/