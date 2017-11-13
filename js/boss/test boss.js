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

gel_phase = {
  attacks: [],
  spirit_wells: [],
  exits: [],
  duration: 200
};

shower_phase = ({
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

// shower
var spiral_spawner = new BulletSpawner({
  x: 400,
  y: 100,
  heading: 0,
  spin: 1,
  random_spread: 0,
  dx: 0,
  dy: 0,
  delay: 2,
  lifespan: 500,
  bullet_type: {
    yaw: 0.006,
    speed: 3,
    r: 8,
    color: "#0099FF",
    shell: "#004488",
    graze_color: "#3377AA",
    style: "gradient",
    cull_type: "timer",
    max_age: false
  }
});

var shower_speed = 3,
    shower_r = 6,
    shower_delay = 16,
    shower_spread = 1.0,
    shower_y = -170,
    shower_lifespan = 500,
    shower_bullet_life = 1000,
    shower_curving_left = 0.00,
    shower_curving_right = 0.00;

var shower_spawner_a = new BulletSpawner({
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
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});

var shower_spawner_b = new BulletSpawner({
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
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});
var shower_spawner_c = new BulletSpawner({
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
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});
var shower_spawner_d = new BulletSpawner({
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
  spin: 0,
  random_spread: shower_spread,
  dx: 0,
  dy: 0,
  lifespan: shower_lifespan,
  delay: shower_delay
});
var shower_spawner_e = new BulletSpawner({
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

var gel_spawner_a = new BulletSpawner({
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
var gel_spawner_b = new BulletSpawner({
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

test_boss.phases.push(gel_phase);
test_boss.phases.push(shower_phase);
test_boss.phases.push(exit_phase);