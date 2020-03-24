function Region(parent,desc) {
  this.fill_rate = desc.fill_rate || 0.001;
  this.persona = parent;
  this.scale_factor = this.persona.scale_factor || 1;
  this.hb_edit = desc.hb_edit;
  
  this.doneness = 0;
  
  this.sprites = [];
  for(var i = 0; i < desc.sprites.length; i++) {
    this.sprites.push(new Sprite(this,desc.sprites[i]));
    // TODO: Force the sprites to load and draw
  }
  
  this.hitboxes = [];
  for(var i = 0; i < desc.hitboxes.length; i++) {
    this.hitboxes.push(new Hitbox(this,desc.hitboxes[i]));
  }
  
  this.update = function(slowdown,slowspeed) {
    var speed_modifier;
    if(slowdown) {
      speed_modifier = slowspeed;
    } else {
      speed_modifier = 1;
    }
    
    if(this.doneness < .5) {
      if(this.is_active()) {
        this.doneness += this.fill_rate * speed_modifier;
      }
    } else {
      this.is_complete = true;
      this.doneness = 1;
    }
  };
  
  this.move_center = function(point) {
    for(var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].move_center(point);
    }
  }
  
  this.is_active = function() {
    if(player.spirit) {
      var spirit_x = player.spirit.x;
      // use the spirit's nose instead of its core
      var spirit_y = player.spirit.y - player.spirit.body_height;
      
      for(var i = 0; i < this.hitboxes.length; i++) {
        var abs_x = this.hitboxes[i].x + this.persona.x;
        var abs_y = this.hitboxes[i].y + this.persona.y;
        var r = this.hitboxes[i].r;
        
        var dx = Math.abs(abs_x - spirit_x);
        var dy = Math.abs(abs_y - spirit_y);
        var dsq = ((dx * dx) + (dy * dy));
        var rsq = r * r;
        
        
        if(dsq < rsq) {
          return true;
        } else {
          // do nothing
        }
      }
      // we only get here if none of the hitboxes were active
      return false;
    }
  };
  
  this.draw = function() {
    for(var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].draw(this.doneness);
    }
    
    if(this.hb_edit) {
      for(var i = 0; i < this.hitboxes.length; i++) {
        if(this.is_active()) {
          game.draw.fillStyle = "#FFFF00";
        } else {
          game.draw.fillStyle = "#000000";
        }
        var hbx = this.hitboxes[i].x + this.persona.x;
        var hby = this.hitboxes[i].y + this.persona.y;
        var hbr = this.hitboxes[i].r;
        game.draw.fillRect(hbx-1,hby-1,3,3);
        debug_circle_theta = 2*Math.PI;
        game.draw.lineWidth = 1;
        game.draw.beginPath();
        game.draw.strokeStyle = "#FFFFFF";
        game.draw.ellipse(hbx,hby,hbr,hbr,0,0,debug_circle_theta);
        game.draw.stroke();
      }
    }
  };
}