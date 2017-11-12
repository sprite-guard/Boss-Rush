var test_spawner_a = new BulletSpawner({
  // blue curving spiral
  x: 0,
  y: 100,
  heading: 0.5 * Math.PI,
  bullet_type: {
    yaw: -0.006,
    speed: 3,
    r: 12,
    color: "#00FFFF",
    shell: "#0000FF",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "timer"
  },
  spin: 1,
  random_spread: 0.0,
  dx: 1,
  dy: 0,
  
  lifespan: 200,
  delay: 2
});

var test_spawner_b = new BulletSpawner({
  // magenta aimed spray
  x: 0,
  y: 300,
  heading: 0.0 * Math.PI,
  bullet_type: {
    yaw: 0,
    speed: 2,
    r: 8,
    color: "#FFCCFF",
    shell: "#FF0066",
    graze_color: "#000000",
    style: "gradient"
  },
  spin: 0.0,
  random_spread: 0.9,
  aimed: true,
  dx: 1,
  dy: 0,
  
  lifespan: 320,
  delay: 2
});

var test_spawner_c = new BulletSpawner({
  // magenta slow spiral spray
  x: 0,
  y: 300,
  heading: 1.0 * Math.PI,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 8,
    color: "#FFCCFF",
    shell: "#FF0066",
    graze_color: "#000000",
    style: "gradient",
    cull_type: "timer"
  },
  spin: 0.1,
  random_spread: 0.9,
  dx: 1,
  dy: 0,
  
  lifespan: 320,
  delay: 2
});

var shower_speed = 4,
    shower_r = 6,
    shower_delay = 10,
    shower_spread = 1.0,
    shower_y = -170,
    shower_lifespan = Infinity,
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

var gel_blast_a = new BulletSpawner({
  x: 800,
  y: 0,
  heading: 0.25 * Math.PI,
  spin: 0,
  random_spread: 0.5 * Math.PI,
  dx: 0,
  dy: 0,
  aimed: true,
  lifespan: 30,
  delay: 0,
  sync: 60,
  bullet_type: {
    yaw: 0,
    speed: 6,
    r: 8,
    color: "#00FFFF",
    shell: "#006699",
    graze_color: "#009999",
    style: "gradient",
    cull_type: "screen"
  }
});

var gel_blast_b = new BulletSpawner({
  x: 0,
  y: 0,
  heading: 0.25 * Math.PI,
  spin: 0,
  random_spread: 0.5 * Math.PI,
  dx: 0,
  dy: 0,
  aimed: true,
  lifespan: 30,
  delay: 0,
  sync: 60,
  bullet_type: {
    yaw: 0,
    speed: 6,
    r: 8,
    color: "#00FFFF",
    shell: "#006699",
    graze_color: "#009999",
    style: "gradient",
    cull_type: "screen"
  }
})

var test_boss = new Boss({
  x: 400,
  y: 100,
  graphic: function() {
    return true;
  }
  
});

var test_phase = new Phase(test_boss,{
  attacks: [],
  wells: [
    new SpiritWell({
      x: 100,
      y: 100,
      r: 32
    }),
    new SpiritWell({
      x: 700,
      y: 100,
      r: 32
    })
  ],
  random: false
});

var gel_phase = new Phase(test_boss,{
  attacks: [],
  wells: [],
  timer: 300
});

gel_phase.add_attack({
  spawners: [
    gel_blast_a,
    gel_blast_b
  ]
});

var exit_phase = new Phase(test_boss,{
  exits: [
    new Portal({
      x: 400,
      y: 300,
      h: 32,
      destination: "menu"
    })
  ],
  end_condition: function() { return false; }
})

test_phase.add_attack({
  spawners: [
    shower_spawner_a,
    shower_spawner_b,
    shower_spawner_c,
    shower_spawner_d,
    shower_spawner_e,
    test_spawner_a
  ]
});

test_boss.add_phase(gel_phase);
test_boss.add_phase(test_phase);
test_boss.add_phase(exit_phase);