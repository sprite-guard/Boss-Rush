var test_boss = {
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
}

var gel_phase = {
  attacks: [],
  spirit_wells: [],
  exits: [],
  duration: 200
};

var ring_phase = {
  attacks: [],
  spirit_wells: [],
  exits: [],
  duration: 500
};

var ring_points = [];
var ring_density = 36;
var ring_x = 400;
var ring_y = 200;

for(var i = 0; i < ring_density; i++) {
  var h = i * ((2*Math.PI) / ring_density);
  ring_points.push({ x: ring_x, y: ring_y, heading: h });
}

var ring_spawner = {
  x: ring_x,
  y: ring_y,
  heading: 0,
  lifespan: 90,
  sources: ring_points,
  spin: 0,
  aimed: false,
  delay: 15,
  sync: 300,
  bullet_type: {
    yaw: 0,
    speed: 4,
    r: 8,
    color: "#FFFF66",
    shell: "#996600",
    graze_color: "#3333AA",
    style: "gradient",
    cull_type: "screen",
    max_age: false
  }
};

var shower_phase = ({
  attacks: [],
  spirit_wells: [
    new SpiritWell({
      x: 100,
      y: 100,
      r: 32
    }),
    new SpiritWell({
      x: 700,
      y: 100,
      r: 32
    }),
    new SpiritWell({
      x: 100,
      y: 500,
      r: 32
    }),
    new SpiritWell({
      x: 700,
      y: 500,
      r: 32
    })
  ],
  exits: []
});

// spiral
var spiral_spawner = ({
  x: 400,
  y: 100,
  heading: 0,
  spin: 0.5,
  random_spread: 0,
  dx: 0,
  dy: 0,
  delay: 1,
  lifespan: Infinity,
  bullet_type: {
    yaw: 0.006,
    speed: 2,
    r: 8,
    color: "#00FFFF",
    shell: "#006699",
    graze_color: "#3333AA",
    style: "gradient",
    cull_type: "timer",
    max_age: false
  }
});

// shower

var shower_speed = 3,
    shower_r = 6,
    shower_delay = 16,
    shower_spread = 0.5,
    shower_y = -170,
    shower_lifespan = Infinity,
    shower_bullet_life = 1000,
    shower_curving_left = 0.00,
    shower_curving_right = 0.00,
    shower_aimed = false;

var shower_spawner_a = ({
  x: 10,
  y: shower_y,
  heading: 0.5*Math.PI,
  bullet_type: {
    yaw: shower_curving_right,
    speed: shower_speed,
    r: shower_r,
    color: "#FF9999",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "timer",
    max_age: shower_bullet_life
  },
  aimed: shower_aimed,
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});

var shower_spawner_b = ({
  x: 210,
  y: shower_y,
  heading: 0.5*Math.PI,
  bullet_type: {
    yaw: shower_curving_right,
    speed: shower_speed,
    r: shower_r,
    color: "#FF9999",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "timer",
    max_age: shower_bullet_life
  },
  aimed: shower_aimed,
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});
var shower_spawner_c = ({
  x: 410,
  y: shower_y,
  heading: 0.5*Math.PI,
  bullet_type: {
    yaw: 0,
    speed: shower_speed,
    r: shower_r,
    color: "#FF9999",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "timer",
    max_age: shower_bullet_life
  },
  aimed: shower_aimed,
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});
var shower_spawner_d = ({
  x: 610,
  y: shower_y,
  heading: 0.5*Math.PI,
  bullet_type: {
    yaw: shower_curving_left,
    speed: shower_speed,
    r: shower_r,
    color: "#FF9999",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "timer",
    max_age: shower_bullet_life
  },
  aimed: shower_aimed,
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});
var shower_spawner_e = ({
  x: 810,
  y: shower_y,
  heading: 0.5*Math.PI,
  bullet_type: {
    yaw: shower_curving_left,
    speed: shower_speed,
    r: shower_r,
    color: "#FF9999",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "timer",
    max_age: shower_bullet_life
  },
  aimed: shower_aimed,
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});

shower_attack = {
  spawners: [
    shower_spawner_a,
    shower_spawner_b,
    shower_spawner_c,
    shower_spawner_d,
    shower_spawner_e,
    spiral_spawner
  ],
  choreography: {}
};

shower_phase.attacks.push(shower_attack);

// gel
var gel_speed = 6,
    gel_r = 6,
    gel_delay = 0,
    gel_spread = 0.5 * Math.PI,
    gel_y = 0,
    gel_lifespan = 40,
    gel_bullet_life = 1000,
    gel_curving_left = 0.00,
    gel_curving_right = 0.00;

var gel_spawner_a = ({
  x: 0,
  y: gel_y,
  heading: 0.5*Math.PI,
  bullet_type: {
    yaw: gel_curving_right,
    speed: gel_speed,
    r: gel_r,
    color: "#FF9999",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "screen",
    max_age: gel_bullet_life
  },
  aimed: true,
  spin: 0,
  random_spread: gel_spread,
  dx: 0,
  dy: 0,
  lifespan: gel_lifespan,
  delay: gel_delay
});
var gel_spawner_b = ({
  x: 800,
  y: gel_y,
  heading: 0.5*Math.PI,
  bullet_type: {
    yaw: gel_curving_right,
    speed: gel_speed,
    r: gel_r,
    color: "#FF9999",
    shell: "#FF3333",
    graze_color: "#991111",
    style: "gradient",
    cull_type: "screen",
    max_age: gel_bullet_life
  },
  aimed: true,
  spin: 0,
  random_spread: gel_spread,
  dx: 0,
  dy: 0,
  lifespan: gel_lifespan,
  delay: gel_delay
});

gel_attack = {
  spawners: [
    gel_spawner_a,
    gel_spawner_b
  ],
  choreography: {}
};

gel_phase.attacks.push(gel_attack);

var ring_attack = {
  spawners: [
    ring_spawner,
    shower_spawner_a,
    shower_spawner_b,
    shower_spawner_c,
    shower_spawner_d,
    shower_spawner_e
    ],
  choreography: {}
};

ring_phase.attacks.push(ring_attack);

test_boss.phases.push(ring_phase);
test_boss.phases.push(gel_phase);
test_boss.phases.push(shower_phase);
test_boss.phases.push(exit_phase);