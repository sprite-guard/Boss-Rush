var helpers = {};

helpers.makeRingAttack = function(x,y,count) {
  var res = [];
  for(var i = 0; i < count; i++) {
    var h = i * ((2*Math.PI) / count);
    res.push({ x: x, y: y, heading: h });
  }
  return res;
};