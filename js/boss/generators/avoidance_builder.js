if(typeof nw != "undefined") {
  // require things
}

function AvoidanceBuilder(descriptor) {
  this.spawners = descriptor.spawners, // array
  this.total_duration = descriptor.total_duration;
  
  this.build = function() {
    // boss construction boilerplate
    
    var avoidance_boss = {
      x: 0,
      y: 0,
      sprites: [
        { draw: function(x,y) { return true; } }
      ],
      phases: []
    };

    var exit_phase = {
      attacks: [],
      spirit_wells: [],
      exits: [
        new Portal({
          x: 400,
          y: 300,
          h: 45,
          destination: "menu"
        })
      ]
    };

    var avoidance_phase = {
      attacks: [],
      wells: [],
      exits: [],
      duration: this.total_duration
    };

    var avoidance_attack = {
      spawners: [],
      choreography: {}
    };
    
    // construct spawners
    // spawner format: { spawner: <spawner object> sources: <source builder> }
    // source format: { type: <ring or line>, <everything else> }
    
    for(var i = 0; i < this.spawners.length; i++) {
      var source_type = this.spawners[i].sources.type || "point";
      var source_list = [];
      
      if(this.source_type = "line") {
        source_list = helpers.makeLineAttack(this.spawners[i].sources);
      } else if(this.source_type = "ring") {
        source_list = helpers.makeRingAttack(this.spawners[i].sources);
      } else {
        source_list = this.spawners[i].sources;
      }
      
      // now we create a descriptor using what we've built
    }
  }
}