var helpers = {};

var TAU = 2 * Math.PI

helpers.distance_between = function(a,b) {
  var x_offset = Math.abs(a.x-b.x);
  var y_offset = Math.abs(a.y-b.y);
  return Math.sqrt((x_offset * x_offset) + (y_offset * y_offset));
}

helpers.signed_angle_to_unsigned = function(theta) {
  theta = theta % Math.PI
  if(theta >= 0) return theta;
  if(theta < 0) return theta + TAU;
};

helpers.makeRingAttack = function(x,y,count,begin,end) {
  //NB USE RATIONAL ANGLES NOT RADIANS
  var total_angle = end - begin;
  
  // if(total_angle < 1) total_angle += (1 / count);
  if((total_angle == 1) && (count > 1)) count--;
  
  var res = [];
  for(var i = 0; i <= count; i++) {
    // evently divide the circle, and add one source for each direction
    var h = i * ((total_angle * TAU) / (count+1)) + (begin * TAU);
    res.push({ x: x, y: y, heading: h });
  }
  return res;
};

helpers.makeLineAttack = function(descriptor) {
  // we need to march along the line, placing one source at each point.
  // descriptor needs to provide start, end, count and heading.
  // vector multiplication is componentwise, so we can take a shortcut here,
  // and ignore the fact that we're using a vector at all.
  var x_move = (descriptor.ex - descriptor.sx) / descriptor.count,
      y_move = (descriptor.ey - descriptor.sy) / descriptor.count,
      count = descriptor.count, // for brevity's sake
      head = descriptor.heading;
  
  var res = [];
  for(var i = 0; i < count; i++) {
    res.push ({
      x: descriptor.sx + (x_move * i),
      y: descriptor.sy + (y_move * i),
      heading: head
    });
  }
  return res;
  
}

helpers.fill_to_hex = function(fill) {
  return parseInt(fill.replace("#","0x"));
}

helpers.lerp = function(start,end,t) {
  var new_x = ((1 - t) * start.x) + (t * end.x);
  var new_y = ((1 - t) * start.y) + (t * end.y);
  
  return { x: new_x, y: new_y };
};

if(PIXI) {
  // reimplement canvas drawing API using PIXI rendering
  helpers.PseudoCanvas = function(graphics) {
    this.graphics = graphics;
    
    this.fillStyle = "#000000";
    this.lineStyle = "#000000";
    
    this.fillRect = function(x,y,w,h) {
      this.graphics.beginFill(helpers.fill_to_hex(this.fillStyle));
      this.graphics.drawRect(x,y,w,h);
      this.graphics.endFill();
    }
    
    this.beginPath = function() {
      this.graphics.beginFill(this.fillStyle);
    }
    
  }
}