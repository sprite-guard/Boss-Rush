var helpers = {};

helpers.makeRingAttack = function(x,y,count) {
  var res = [];
  for(var i = 0; i < count; i++) {
    // evently divide the circle, and add one source for each direction
    var h = i * ((2*Math.PI) / count);
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