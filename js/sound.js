function Sound(src, loop) {
  this.src = src;
  this.audio = document.createElement("audio");
  this.audio.src = src;
  this.audio.setAttribute("preload","auto");
  this.audio.setAttribute("controls","none");
  this.audio.style.display = "none";
  
  document.body.appendChild(this.audio);
  
  if(loop) {
    this.audio.loop = true;
  }
  
  this.play = function() {
    this.audio.play();
  };
  this.pause = function() {
    this.audio.pause();
  };
  
  this.rewind = function() {
    this.audio.load();
  };
  
  this.setspeed = function(amount) {
    this.audio.playbackRate = amount;
  };
  
  this.setvolume = function(level) {
    this.audio.volume = level;
  };
  
  this.despawn = function() {
    // NB this is probably a memory leak
    document.body.removeChild(this.audio);
  };
}