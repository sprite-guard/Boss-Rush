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
  duration: 6000
};

var avoidance_attack = {
  spawners: [],
  choreography: {}
};

rain_spawners = helpers.makeLineAttack({
  sx: 0,
  sy: 0,
  ex: 800,
  ey: 0,
  count: 10,
  heading: 0.5 * Math.PI
});

avoidance_attack.spawners.push({
  sources: rain_spawners,
  x: 0,
  y: 0,
  heading: 0.5 * Math.PI,
  spin: 0,
  random_spread: 1,
  delay: 35,
  sync: 0,
  lifespan: 820,
  bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#FF9966",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000
  }
});

var corner_rings = helpers.makeRingAttack(0,0,8,0,.25).concat( 
                   helpers.makeRingAttack(0,600,8,.75,1)).concat(
                   helpers.makeRingAttack(800,0,8,.25,.5)).concat(
                   helpers.makeRingAttack(800,600,8,.5,.75));

avoidance_attack.spawners.push({
  sources: corner_rings,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 15,
  sync: 300,
  lifespan: 60,
  bullet_type: {
    behavior: "bounce",
    bounces: 1,
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

var spiral_spawners = helpers.makeRingAttack(400,300,5,0,1);

avoidance_attack.spawners.push({
  sources: spiral_spawners,
  x: 400,
  y: 300,
  heading: 0,
  spin: 0.8,
  random_spread: 0,
  delay: 1,
  sync: 720,
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

avoidance_attack.spawners.push({
  sources: center_rings,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 10,
  sync: 780,
  lifespan: 130,
  bullet_type: {
    behavior: "bounce",
    bounces: 1,
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

var crime_and_punishment = helpers.makeRingAttack(700,100,15,0,1);

avoidance_attack.spawners.push({
sources: crime_and_punishment,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 20,
  sync: 1050,
  lifespan: 830,
  random_spread: 0.3,
  speed_jitter: 1,
  yaw_jitter: 0,
  bullet_type: {
    yaw: 0.006,
    speed: 3,
    r: 6,
    color: "#222222",
    shell: "#000000",
    graze_color: "#990000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000
  }
});

avoidance_attack.spawners.push({
sources: crime_and_punishment,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 20,
  sync: 1050,
  lifespan: 830,
  random_spread: 0.3,
  speed_jitter: 1,
  yaw_jitter: 0,
  bullet_type: {
    yaw: -0.006,
    speed: 3,
    r: 6,
    color: "#222222",
    shell: "#000000",
    graze_color: "#990000",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000
  }
});

avoidance_attack.spawners.push({
  x: 400,
  y: 300,
  heading: 0,
  spin: 1,
  random_spread: 0,
  delay: 1,
  sync: 1330,
  lifespan: 60,
  bullet_type: {
    yaw: 0,
    speed: 2,
    r: 12,
    color: "#007788",
    shell: "#003388",
    graze_color: "#FFFFFF",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000
  }
});

var fireworks = helpers.makeLineAttack({
  sx: 100,
  sy: 600,
  ex: 800,
  ey: 600,
  count: 4,
  heading: 1.5 * Math.PI
});

avoidance_attack.spawners.push({
  sources: fireworks,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 7,
  sync: 2030,
  lifespan: 60,
  random_spread: 0.5,
  speed_jitter: 1,
  yaw_jitter: 0.012,
  bullet_type: {
    yaw: -0.006,
    speed: 5,
    r: 8,
    color: "#669900",
    shell: "#669900",
    graze_color: "#990000",
    style: "solid",
    cull_type: "screen",
    max_age: 1000
  }
});

var fallingworks = helpers.makeLineAttack({
  sx: 100,
  sy: 0,
  ex: 800,
  ey: 0,
  count: 4,
  heading: 0.5 * Math.PI
});

avoidance_attack.spawners.push({
  sources: fallingworks,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 7,
  sync: 2030,
  lifespan: 60,
  random_spread: 0.5,
  speed_jitter: 1,
  yaw_jitter: 0.012,
  bullet_type: {
    yaw: -0.006,
    speed: 5,
    r: 8,
    color: "#0066FF",
    shell: "#0066FF",
    graze_color: "#990000",
    style: "solid",
    cull_type: "screen",
    max_age: 1000
  }
});

var leftworks = helpers.makeLineAttack({
  sx: 0,
  sy: 100,
  ex: 0,
  ey: 600,
  count: 4,
  heading: 0 * Math.PI
});

avoidance_attack.spawners.push({
  sources: leftworks,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 7,
  sync: 2030,
  lifespan: 60,
  random_spread: 0.5,
  speed_jitter: 1,
  yaw_jitter: 0.012,
  bullet_type: {
    yaw: -0.006,
    speed: 5,
    r: 8,
    color: "#0066FF",
    shell: "#0066FF",
    graze_color: "#990000",
    style: "solid",
    cull_type: "screen",
    max_age: 1000
  }
});

var rightworks = helpers.makeLineAttack({
  sx: 800,
  sy: 100,
  ex: 800,
  ey: 600,
  count: 4,
  heading: 1 * Math.PI
});

avoidance_attack.spawners.push({
  sources: rightworks,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 7,
  sync: 2030,
  lifespan: 60,
  random_spread: 0.5,
  speed_jitter: 1,
  yaw_jitter: 0.012,
  bullet_type: {
    yaw: -0.006,
    speed: 5,
    r: 8,
    color: "#669900",
    shell: "#669900",
    graze_color: "#990000",
    style: "solid",
    cull_type: "screen",
    max_age: 1000
  }
});

avoidance_phase.attacks.push(avoidance_attack);
avoidance_boss.phases.push(avoidance_phase);
avoidance_boss.phases.push(exit_phase);