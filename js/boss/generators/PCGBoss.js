/*
  We'll build bosses procedurally in more or less the same way
  that we build them by hand, using the same organizational
  principles and delegation that we use for updating bosses.
  
  Phase durations should be inversely proportional to phase count
  
  For a megaman phase, the wells should be large enough to let the
  player see a few cycles, so that they have a good chance of seeing
  most of the attacks. This doesn't need to be perfect. Since that
  means a boss with more attacks will take more time, we need to
  balance against the difficulty of individual attacks too.
  
  But always remember that we want to err on the side of daunting.
  If something seems overwhelming, but technically possible, then
  we want to include it, not nerf it, even when every ounce of
  common sense that we have screams "too much".
  
  Remember Braden.
*/

function PCGBoss(seed) {
  this.seed = seed;
  this.phases = [];
  var number_of_phases = (this.seed % 3) + 3;
  var remaining_seed = (this.seed - (this.seed % 3)) / 3;
  
  for(var i = 0; i < number_of_phases; i++) {
    this.phases.push(new PCGPhase(remaining_seed % 2187));
    remaining_seed = (remaining_seed - (remaining_seed % 2187)) / 2187;
  }
}

