function PreScreen(desc) {
  var prescreen = desc;
  prescreen.timeout = 300;
  
  var next_scene = new Scene(prescreen);

  return next_scene;
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

scenes_list.watergod_intro = PreScreen({
  next_scene: scenes_list.symmetria,
  elements: [
    Background.DEFAULT,
    new TextElement([
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "120px serif",
        line_width: 2,
        x: 32,
        y: 250,
        text: "The Water God"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "64px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Music: Sam Crowley"
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
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "64px serif",
        line_width: 2,
        x: 32,
        y: 500,
        text: "Art: Dan Ellis"
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

scenes_list.weaver_intro = PreScreen({
  next_scene: scenes_list.weaver,
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
        text: "The Weaver"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "48px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Music: Seth SirrMan Sotolongo"
      })
    ])
  ]
});
scenes_list.avoidance_intro = PreScreen({
  next_scene: scenes_list.avoidance,
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
        text: "TEST"
      }),
      new TextLine({
        fill_color: "#449999",
        outline_color: "#88FFFF",
        font: "64px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Music: Sam Crowley"
      })
    ])
  ]
});
