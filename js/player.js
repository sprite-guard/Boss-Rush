var player = {
  w: 12,
  h: 16,
  r: 8,
  hb: 0,
  shell_color: "#000000",
  core_color: "#00FFFF",
  pip_color: "#FF6600",
  hurt_color: "#666666",
  speed: 3,
  health: 4,
  iframes: 30,
  max_iframes: 30,
  state: "fine",
  dir: 0,
  is_normalized: false,
  hit_effects: []
};

player.init = function() {
  this.x = game.canvas.width / 2;
  this.y = game.canvas.height * 0.75;
}

player.draw = function() {
  var gradient = game.draw.createRadialGradient( this.x, this.y, this.r,
                                                 this.x, this.y, 0);
  if(this.state == "fine") {
    gradient.addColorStop(0,this.shell_color);
    gradient.addColorStop(1,this.core_color);
  } else if(this.state == "hurt") {
    gradient.addColorStop(0,this.hurt_color);
    gradient.addColorStop(1,this.core_color);
  } else {
    gradient.addColorStop(0,this.shell_color);
    gradient.addColorStop(1,this.core_color);
  }
  
  game.draw.fillStyle = gradient;

  game.draw.beginPath();
  game.draw.ellipse(this.x,this.y, this.w,this.h, 0, 0, 2 * Math.PI);
  game.draw.fill();
};

player.update = function() {

  // move the player

  this.dx = this.speed * (CONTROLS.right - CONTROLS.left);
  this.dy = this.speed * (CONTROLS.down - CONTROLS.up);

  this.x += this.dx;
  this.y += this.dy;
  
  // handle iframes
  if(this.state == "hurt") {
    this.iframes--;
    
    if(this.iframes <= 0) {
      this.state = "fine";
      this.iframes = this.max_iframes;
    }
  }
  
  // hit effect management
  var next_hit_array = [];
  for(var i = 0; i < this.hit_effects.length; i++) {
    console.log("updating hit effect #" + i);
    this.hit_effects[i].update();
    if(this.hit_effects[i].alive) {
      next_hit_array.push(this.hit_effects[i]);
    }
  }
  this.hit_effects = next_hit_array;
    
  
  // draw the result
  player.draw();
};

player.get_hurt = function() {
  if(this.state != "hurt") {
    this.health--;
    this.state = "hurt";
    this.hit_effects.push(new HitEffect({
      x: this.x,
      y: this.y
    }));
    if(this.health == 0) {
      game.pause();
    }
  }
}
