function TextElement(lines) {
  this.text_lines = lines;
  this.draw = function() {
    for(var i = 0; i < this.text_lines.length; i++) {
      this.text_lines[i].draw();
    }
  }
  
  this.init = function() { return true; };
  // NB we might want this to handle opacity
  // later on when we start polishing
  this.update = function() { return true; };
  
}

function TextLine(desc) {
  this.start_x = desc.x;
  this.start_y = desc.y;
  this.font = desc.font;
  this.fill_color = desc.fill_color;
  this.outline_color = desc.outline_color;
  this.line_width = desc.line_width || 2;
  this.text = desc.text;
  
  this.draw = function() {
    if(this.fill_color) {
      game.draw.fillStyle = this.fill_color;
      game.draw.lineWidth = this.line_width;
      game.draw.font = this.font;
      game.draw.fillText(this.text, this.start_x, this.start_y);
    }
    if(this.outline_color) {
      game.draw.strokeStyle = this.outline_color;
      game.draw.beginPath();
      game.draw.strokeText(this.text, this.start_x, this.start_y);
      game.draw.stroke();
    }
  }
  
  this.init = function() { return true; };
  // NB we might want this to handle opacity
  // later on when we start polishing
  this.update = function() { return true; };
}
/*
new TextElement([
      new TextLine({
        fill_color: "#006666",
        outline_color: "#009999",
        font: "128px serif",
        line_width: 2,
        x: 32,
        y: 250,
        text: "Infinite"
      }),
      new TextLine({
        fill_color: "#006666",
        outline_color: "#009999",
        font: "128px serif",
        line_width: 2,
        x: 32,
        y: 400,
        text: "Ritual"
      })
    ])
*/
TextElement.GAMEOVER = new TextElement([
  new TextLine({
    fill_color: "#449999",
    outline_color: "#88FFFF",
    font: "128px serif",
    line_width: 2,
    x: 64,
    y: 250,
    text: "Ritual Failed"
  }),
  new TextLine({
    fill_color: "#449999",
    outline_color: "#88FFFF",
    font: "100px serif",
    line_width: 2,
    x: 64,
    y: 450,
    text: "press r to restart"
  })
])

/*
      game.draw.fillStyle = "#FF9966";
      game.draw.strokeStyle = "#FFFFAA";
      game.draw.lineWidth = 2;
      game.draw.font = "128px serif";
      game.draw.fillText("Ritual Failed",64,250);
      game.draw.beginPath();
      game.draw.strokeText("Ritual Failed",64,250);
      game.draw.stroke();
      game.draw.font = "100px serif";
      game.draw.fillText("press r to restart",64,450);
      game.draw.beginPath();
      game.draw.strokeText("press r to restart",64,450);
      game.draw.stroke();

*/