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
  lifespan: 600,
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

var corner_rings = helpers.makeRingAttack(0,0,32).concat( 
                   helpers.makeRingAttack(0,600,32)).concat(
                   helpers.makeRingAttack(800,0,32)).concat(
                   helpers.makeRingAttack(800,600,32));

avoidance_attack.spawners.push({
  sources: corner_rings,
  x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
  delay: 10,
  sync: 300,
  lifespan: 500,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 6,
    color: "#FFFF99",
    shell: "#FF9922",
    graze_color: "#884400",
    style: "gradient",
    cull_type: "screen",
    max_age: 1000
  }
});

avoidance_attack.spawners.push({
  x: 400,
  y: 200,
  heading: 0,
  spin: 1,
  random_spread: 0,
  delay: 2,
  sync: 800,
  lifespan: 800,
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
})

avoidance_phase.attacks.push(avoidance_attack);
avoidance_boss.phases.push(avoidance_phase);
avoidance_boss.phases.push(exit_phase);