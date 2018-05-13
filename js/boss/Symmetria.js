var symmetria = {
  x: 0,
  y: 0,
  sprites: [
    { draw: function(x,y) { return true; } }
  ],
  phases: []
};

var sym_exit_phase = {
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

var sym_phase = {
  attacks: [],
  spirit_wells: [],
  exits: [],
  music: "music/Sam Crowley - Sync.wav",
  duration: 6500,
  cycle: false
};

var sym_attack = {
  spawners: [],
  choreography: {}
};

// lune-atic homing

sym_attack.spawners.push({
  sources: [
    {x: 10, y: 10, heading: 0},
    {x: 10, y: 590, heading: -Math.PI / 2},
    {x: 790, y: 10, heading: Math.PI / 2},
    {x: 790, y: 590, heading: Math.PI}
  ],
  x: 0,
  y: 0,
  spin: 0,
  random_spread: 0,
  delay: 39,
  sync: 10,
  lifespan: 820,
  speed_jitter: 0,
  bullet_type: {
    behaviors: [ BulletBehavior.homing ],
    parameters: {
      homing_time: 700,
      max_yaw: 0.005
    },
    yaw: 0,
    speed: 1.5,
    r: 8,
    color: "#FF9966",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000
  }
});

sym_attack.spawners.push({
  sources: [
    {x: 10, y: 10, heading: 0},
    {x: 10, y: 590, heading: -Math.PI / 2},
    {x: 790, y: 10, heading: Math.PI / 2},
    {x: 790, y: 590, heading: Math.PI}
  ],
  x: 0,
  y: 0,
  spin: 0,
  random_spread: 0,
  delay: 78,
  sync: 310,
  lifespan: 820,
  speed_jitter: 0,
  bullet_type: {
    behaviors: [ BulletBehavior.homing ],
    parameters: {
      homing_time: 700,
      max_yaw: 0.01
    },
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#FFCC66",
    shell: "#FF6633",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000
  }
});

// bursts

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 50, heading: 0 }
  ],
  spin: 0.2,
  random_spread: 0,
  delay: 1,
  sync: 1120,
  lifespan: 80,
  speed_jitter: 0,
  yaw_jitter: 0.01,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CCCC",
    shell: "#66CCFF",
    graze_color: "#666666",
    style: "solid",
    cull_type: "screen"
  }
});

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 50, heading: Math.PI }
  ],
  spin: -0.2,
  random_spread: 0,
  delay: 1,
  sync: 1120,
  lifespan: 80,
  speed_jitter: 0,
  yaw_jitter: 0.01,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CCCC",
    shell: "#66CCFF",
    graze_color: "#666666",
    style: "solid",
    cull_type: "screen"
  }
});

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 50, heading: 0 }
  ],
  spin: 0.2,
  random_spread: 0,
  delay: 1,
  sync: 1250,
  lifespan: 80,
  speed_jitter: 0,
  yaw_jitter: 0.01,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CCCC",
    shell: "#66CCFF",
    graze_color: "#666666",
    style: "solid",
    cull_type: "screen"
  }
});

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 50, heading: Math.PI }
  ],
  spin: -0.2,
  random_spread: 0,
  delay: 1,
  sync: 1250,
  lifespan: 80,
  speed_jitter: 0,
  yaw_jitter: 0.01,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CCCC",
    shell: "#66CCFF",
    graze_color: "#666666",
    style: "solid",
    cull_type: "screen"
  }
});

// four way madness

sym_attack.spawners.push({
  sources: [
    { x: 50, y: 50, heading: 0 }
  ],
  sync: 1630,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 750, y: 50, heading: 0 }
  ],
  sync: 1630,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 50, y: 550, heading: 0 }
  ],
  sync: 1630,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 750, y: 550, heading: 0 }
  ],
  sync: 1630,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 50, y: 50, heading: 0 }
  ],
  sync: 1830,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
  speed_jitter: 1,
  yaw_jitter: 0.00,
  random_spread: 0.5,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 750, y: 50, heading: 0 }
  ],
  sync: 1830,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
  speed_jitter: 1,
  yaw_jitter: 0.00,
  random_spread: 0.5,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 50, y: 550, heading: 0 }
  ],
  sync: 1830,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
  random_spread: 0.5,
  speed_jitter: 1,
  yaw_jitter: 0.00,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 750, y: 550, heading: 0 }
  ],
  sync: 1830,
  lifespan: 200,
  spin: 0.5,
  delay: 1,
  speed_jitter: 1,
  yaw_jitter: 0.00,
  random_spread: 0.5,
    bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#66CC22",
    shell: "#66FF66",
    graze_color: "#996622",
    style: "gradient",
    cull_type: "screen"
  }

});

// cw Orange

sym_attack.spawners.push({
  sources: helpers.makeRingAttack(400,300,6,0,1),
  sync: 2310,
  lifespan: 400,
  spin: 0,
  delay: 64,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    behaviors: [ BulletBehavior.shootback ],
    parameters: {
      shootback_spawner: {
        sources: [
          { x: 750, y: 550, heading: 0 }
        ],
        behaviors: [],
        parameters: {},
        sync: 0,
        lifespan: 200,
        spin: 0,
        delay: 16,
        speed_jitter: 0,
        yaw_jitter: 0.00,
        random_spread: 0,
          bullet_type: {
          yaw: 0,
          speed: 3,
          r: 8,
          color: "#66CC22",
          shell: "#66FF66",
          graze_color: "#996622",
          style: "gradient",
          cull_type: "screen"
        }
      }
    },
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#CC9922",
    shell: "#CC6633",
    graze_color: "#993300",
    style: "gradient",
    cull_type: "screen"
  }

});

// doubles

var doubles_heading = (Math.PI / 2);

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3530,
  lifespan: 580,
  spin: 0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});
sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3530,
  lifespan: 580,
  spin: -0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3545,
  lifespan: 540,
  spin: 0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});
sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3545,
  lifespan: 540,
  spin: -0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3560,
  lifespan: 500,
  spin: 0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});
sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3560,
  lifespan: 500,
  spin: -0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3575,
  lifespan: 460,
  spin: 0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});
sym_attack.spawners.push({
  sources: [
    { x: 400, y: 100, heading: doubles_heading }
  ],
  sync: 3575,
  lifespan: 460,
  spin: -0.1,
  delay: 1,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0,
    bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "screen"
  }

});
/* Dotkid Miku Wall
var rain_spawners = helpers.makeLineAttack({
  sx: 10,
  sy: 720,
  ex: 820,
  ey: 720,
  count: 12,
  heading: -0.5 * Math.PI
});

sym_attack.spawners.push({
  sources: rain_spawners,
  sync: 4000,
  lifespan: 600,
  spin: 0,
  delay: 10,
  speed_jitter: 0,
  yaw_jitter: 0.00,
  random_spread: 0.5,
  behaviors: [ SpawnerBehavior.scatter ],
  parameters: {
    scatter_countdown: 800,
  },
    bullet_type: {
    yaw: 0,
    speed: 1,
    r: 8,
    color: "#0099FF",
    shell: "#0066FF",
    graze_color: "#0000CC",
    style: "gradient",
    cull_type: "timer",
    max_age: 1000
  }

});
*/
// sphere
sym_attack.spawners.push({
  x: 400, y: 300, heading: 0,
  spin: 1,
  delay: 1,
  sync: 4140,
  lifespan: 500,
  random_spread: 0,
  speed_jitter: 0.5,
  yaw_jitter: -0.005,
  bullet_type: {
    yaw: 0.003,
    speed: 1,
    r: 8,
    color: "#CC6699",
    shell: "#662233",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

sym_attack.spawners.push({
  x: 400, y: 300, heading: 0,
  spin: 1,
  delay: 1,
  sync: 4140,
  lifespan: 500,
  random_spread: 0,
  speed_jitter: 0.5,
  yaw_jitter: 0.005,
  bullet_type: {
    yaw: -0.003,
    speed: 1,
    r: 8,
    color: "#9966CC",
    shell: "#332266",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

var spiral_rings = helpers.makeRingAttack(400,300,6,0,1);

sym_attack.spawners.push({
  sources: spiral_rings,
  x: 400, y: 300, heading: 0,
  spin: 0.1,
  delay: 4,
  sync: 4440,
  lifespan: 220,
  random_spread: 0,
  speed_jitter: 0,
  yaw_jitter: 0,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#99AACC",
    shell: "#338866",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000,
  }
});

// double dash
var spiral_spawners = helpers.makeRingAttack(400,300,5,0,1);

sym_attack.spawners.push({
  sources: spiral_spawners,
  x: 400,
  y: 300,
  heading: 0,
  spin: 0.8,
  random_spread: 0,
  delay: 1,
  sync: 4800,
  lifespan: 250,
  bullet_type: {
    yaw: 0,
    speed: 2,
    r: 8,
    color: "#FFFFFF",
    shell: "#444444",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "timer",
    max_age: 1000
  }
});

var center_rings = helpers.makeRingAttack(400,300,24,0,1);

sym_attack.spawners.push({
  sources: center_rings,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 10,
  sync: 4800,
  lifespan: 130,
  aimed: true,
  bullet_type: {
    behaviors: [ BulletBehavior.bounce ],
    parameters: {
      bounces: 1
    },
    yaw: 0,
    speed: 3,
    r: 6,
    color: "#FF9922",
    shell: "#FF9922",
    graze_color: "#884400",
    style: "solid",
    cull_type: "screen",
    max_age: 1000
  }
});


sym_phase.attacks.push(sym_attack);
symmetria.phases.push(sym_phase);
symmetria.phases.push(sym_exit_phase);