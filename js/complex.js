function Complex(c) {
  this.r = c.r;
  this.i = c.i;
  this.conjugate_numbers = { r: this.r, i: this.i * -1 };
  this.conjugate = function() {
    return new Complex(this.conjugate_numbers);
  };
  
  this.times = function(other) {
    var a = this.r,
        b = this.i,
        c = other.r,
        d = other.i;
    return new Complex({
      r: (a * c) - (b * d),
      i: (c * b) + (a * d)
    });
  };
  
  this.to_angle = function() {
    return Math.atan2(this.i,this.r);
  };
}

function ComplexRotation(theta,z) {
  this.z = z || new Complex({ r: Math.cos(theta), i: Math.sin(theta) });
  this.angle = this.z.to_angle();
  
  this.add = function(other) {
//    console.log("multiplying ",this.z," by ",other.z);
    return new ComplexRotation(false,this.z.times(other.z));
  };
  
  this.subtract = function(other) {
//    console.log("multiplying ",this.z," by ",other.z.conjugate());
    return new ComplexRotation(false,this.z.times(other.z.conjugate()));
  };
}