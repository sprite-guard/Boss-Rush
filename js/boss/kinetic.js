var kinetic = {
  x: 0,
  y: 0,
  sprites: [
    { draw: function(parent) { return true; } }
  ],
  phases: [
     {
      // main
      attacks: [{
        spawners: [],
        choreography: {}
      }],
      spirit_wells: [],
      exits: [],
      music: "music/Metaself - Kinetic Elevation Rites.wav",
      duration: 6500,
      cycle: false
    },
  
    {
      // exit
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
    }
  ]
}

// freeze pulse
kinetic.phases[0].attacks[0].spawners.push({
  x: 400, y: 300, heading: 0,
  sources: helpers.makeRingAttack(400,300,5,0,1),
  spin: 0.5,
  delay: 3,
  immediate: true,
  sync: 0,
  lifespan: 136,
  random_spread: 0.5,
  speed_jitter: 0.5,
  yaw_jitter: -0.007,
  behaviors: [ SpawnerBehavior.freeze ],
  parameters: {
    freeze_countdown: 40,
    freeze_duration: 96,
  },
  bullet_type: {
    yaw: 0.003,
    speed: 5,
    r: 8,
    color: "#CC6699",
    shell: "#662233",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

kinetic.phases[0].attacks[0].spawners.push({
  x: 400, y: 300, heading: 0,
  sources: helpers.makeRingAttack(400,300,5,0,1),
  spin: 0.5,
  delay: 3,
  immediate: true,
  sync: 160,
  lifespan: 144,
  random_spread: 0.5,
  speed_jitter: 0.5,
  yaw_jitter: -0.007,
  behaviors: [ SpawnerBehavior.freeze ],
  parameters: {
    freeze_countdown: 40,
    freeze_duration: 120,
  },
  bullet_type: {
    yaw: 0.003,
    speed: 5,
    r: 8,
    color: "#CC6699",
    shell: "#662233",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

kinetic.phases[0].attacks[0].spawners.push({
  x: 400, y: 300, heading: 0,
  sources: helpers.makeRingAttack(400,300,5,0,1),
  spin: 0.5,
  delay: 3,
  immediate: true,
  sync: 344,
  lifespan: 136,
  random_spread: 0.5,
  speed_jitter: 0.5,
  yaw_jitter: -0.007,
  behaviors: [ SpawnerBehavior.freeze ],
  parameters: {
    freeze_countdown: 40,
    freeze_duration: 96,
  },
  bullet_type: {
    yaw: 0.003,
    speed: 5,
    r: 8,
    color: "#CC6699",
    shell: "#662233",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

kinetic.phases[0].attacks[0].spawners.push({
  x: 400, y: 300, heading: 0,
  sources: helpers.makeRingAttack(400,300,5,0,1),
  spin: 0.5,
  delay: 3,
  immediate: true,
  sync: 540,
  lifespan: 136,
  random_spread: 0.5,
  speed_jitter: 0.5,
  yaw_jitter: -0.007,
  behaviors: [ SpawnerBehavior.freeze ],
  parameters: {
    freeze_countdown: 40,
    freeze_duration: 96,
  },
  bullet_type: {
    yaw: 0.003,
    speed: 5,
    r: 8,
    color: "#CC6699",
    shell: "#662233",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

// spiral
kinetic.phases[0].attacks[0].spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  x: 400, y: 300, heading: 0,
  spin: 0.1,
  delay: 4,
  sync: 384,
  immediate: true,
  lifespan: 96,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#2288FF",
    shell: "#0066CC",
    graze_color: "#000099",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

kinetic.phases[0].attacks[0].spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  x: 400, y: 300, heading: 0,
  spin: 0.1,
  delay: 4,
  sync: 578,
  immediate: true,
  lifespan: 96,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#2288FF",
    shell: "#0066CC",
    graze_color: "#000099",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

// poppers
kinetic.phases[0].attacks[0].spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  x: 400, y: 300, heading: 0,
  spin: 0.2,
  delay: 4,
  sync: 720,
  immediate: true,
  lifespan: 120,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#88CCFF",
    shell: "#6666CC",
    graze_color: "#222299",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});
kinetic.phases[0].attacks[0].spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  x: 400, y: 300, heading: 0,
  spin: -0.2,
  delay: 4,
  sync: 720,
  immediate: true,
  lifespan: 120,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#8888FF",
    shell: "#6666CC",
    graze_color: "#222299",
    style: "gradient",
    cull_type: "screen",
    max_age: 500,
  }
});

kinetic.phases[0].attacks[0].spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  x: 400, y: 300, heading: 0,
  spin: 0.2,
  delay: 4,
  sync: 940,
  immediate: true,
  lifespan: 120,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  behaviors: [ SpawnerBehavior.freeze, SpawnerBehavior.scatter ],
  parameters: {
    freeze_countdown: 180,
    freeze_duration: 40,
    scatter_countdown: (180+40),
    scatter_target: {x: 400, y: 300},
    scatter_beam_width: Math.PI/4,
    scatter_direction: 1
  },
  bullet_type: {
    yaw: 0.01,
    speed: 3,
    r: 8,
    color: "#88CCFF",
    shell: "#6666CC",
    graze_color: "#222299",
    style: "gradient",
    cull_type: "screen",
    max_age: 500,
  }
});
kinetic.phases[0].attacks[0].spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  x: 400, y: 300, heading: 0,
  spin: -0.2,
  delay: 4,
  sync: 940,
  immediate: true,
  lifespan: 120,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  behaviors: [ SpawnerBehavior.freeze, SpawnerBehavior.scatter ],
  parameters: {
    freeze_countdown: 180,
    freeze_duration: 40,
    scatter_countdown: (180+40),
    scatter_target: {x: 400, y: 300},
    scatter_beam_width: Math.PI/4,
    scatter_direction: 1
  },
  bullet_type: {
    yaw: -0.01,
    speed: 3,
    r: 8,
    color: "#8888FF",
    shell: "#6666CC",
    graze_color: "#222299",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

kinetic.phases[0].attacks[0].spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  x: 400, y: 300, heading: 0,
  spin: 0.1,
  delay: 4,
  sync: 1340,
  immediate: true,
  lifespan: 96,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  behaviors: [ SpawnerBehavior.speedup ],
  parameters: {
    min_bullet_speed: 1,
    bullet_speedup: 0.2,
    max_bullet_speed: 4
  },
  bullet_type: {
    yaw: 0,
    speed: 1,
    r: 8,
    color: "#2288FF",
    shell: "#0066CC",
    graze_color: "#000099",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});