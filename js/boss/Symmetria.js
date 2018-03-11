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
  delay: 40,
  sync: 10,
  lifespan: 820,
  speed_jitter: 0,
  bullet_type: {
    behaviors: [ BulletBehavior.homing ],
    homing_time: 700,
    max_yaw: 0.005,
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
  delay: 60,
  sync: 310,
  lifespan: 820,
  speed_jitter: 0,
  bullet_type: {
    behaviors: [ BulletBehavior.homing ],
    homing_time: 700,
    max_yaw: 0.01,
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

sym_attack.spawners.push({
  sources: [
    { x: 400, y: 50, heading: 0 }
  ],
  spin: 0.2,
  random_spread: 0,
  delay: 1,
  sync: 1130,
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
    style: "gradient",
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
  sync: 1130,
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
    style: "gradient",
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
    style: "gradient",
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
    style: "gradient",
    cull_type: "screen"
  }
});

sym_phase.attacks.push(sym_attack);
symmetria.phases.push(sym_phase);
symmetria.phases.push(sym_exit_phase);