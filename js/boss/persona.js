function Persona(desc) {
  if(!desc) return false;
  this.width = desc.width;
  this.height = desc.height;
  this.x = desc.x;
  this.y = desc.y;
  this.hitboxes = [];
  for(var i in desc.hitboxes) {
    this.hitboxes.push(new Hitbox(desc.hitboxes[i]));
  }
  
  this.update = function(slowdown,slowspeed) {
    if(player.spirit) {
      var spirit_x = player.spirit.x;
      
      // use the spirit's nose instead of its core
      var spirit_y = player.spirit.y - player.spirit.body_height;
      
      for(var i = 0; i < this.hitboxes.length; i++) {
        var abs_x = this.hitboxes[i].x + this.x;
        var abs_y = this.hitboxes[i].y + this.y;
        var r = this.hitboxes[i].r;
        
        console.log("hbx:", abs_x, "hby:", abs_y, "px:", spirit_x, "py:", spirit_y);
        
        var dx = Math.abs(abs_x - spirit_x);
        var dy = Math.abs(abs_y - spirit_y);
        var dsq = ((dx * dx) + (dy * dy));
        var rsq = r * r;
        
        if(dsq < rsq) {
          this.hitboxes[i].active = true;
        } else {
          this.hitboxes[i].active = false;
        }
        
        this.hitboxes[i].update(slowdown,slowspeed);
      }
    }
  }
  
  this.draw = function() {
    for(var i = 0; i < this.hitboxes.length; i++) {
      if(this.hitboxes[i].active) {
        game.draw.fillStyle = "#FFFFFF";
      } else {
        game.draw.fillStyle = "#000000";
      }
      var hbx = this.hitboxes[i].x + this.x;
      var hby = this.hitboxes[i].y + this.y;
      var hbr = this.hitboxes[i].r;
      game.draw.fillRect(hbx-1,hby-1,3,3);
      debug_circle_theta = (this.hitboxes[i].completion / HITBOX_CAPACITY) * 2*Math.PI;
      game.draw.beginPath();
      game.draw.strokeStyle = "#FFFFFF";
      game.draw.ellipse(hbx,hby,hbr,hbr,0,0,debug_circle_theta);
      game.draw.stroke();
    }
  }
}