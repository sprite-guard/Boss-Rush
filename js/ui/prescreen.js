function PreScreen(desc) {
  // TBD implement pre-screens, correct all calls to PreScreen
  // prepare the desc
  var prescreen = desc;
  
  // add on some special information
  // unique to prescreens
  prescreen.timeout = 300;
  
  return new Scene(prescreen);
}

scenes_list.dream_intro = PreScreen({
  next_scene: scenes_list.dream_child,
  elements: [
    Background.DEFAULT,
    new TextElement([
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "128px serif",
        line_width: 2,
        x: 32,
        y: 250,
        text: "Dream Child"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "64px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Music: Milana Zilnik"
      })
    ])
  ]
});

scenes_list.thaumiel_intro = PreScreen({
  next_scene: scenes_list.thaumiel,
  elements: [
    Background.DEFAULT,
    new TextElement([
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "128px serif",
        line_width: 2,
        x: 32,
        y: 250,
        text: "Thaumiel"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "64px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Music: 2CO"
      })
    ])
  ]
});

scenes_list.kinetic_intro = PreScreen({
  next_scene: scenes_list.kinetic,
  elements: [
    Background.DEFAULT,
    new TextElement([
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "128px serif",
        line_width: 2,
        x: 32,
        y: 250,
        text: "Kinetic"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "64px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Music: Metaself"
      })
    ])
  ]
});
scenes_list.test_scene = scenes_list.dream_intro;
