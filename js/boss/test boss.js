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
  cull_type: "screen"
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
    style: "gradient"
  },
  spin: 0.1,
  random_spread: 0.9,
  dx: 1,
  dy: 0,
  
  lifespan: 320,
  delay: 2
});

var test_boss = new Boss({
  x: 400,
  y: 100,
  graphic: function() {
    return true;
  },
  exit: new Portal({
    x: 400,
    y: 300,
    h: 32,
    destination: "menu"
  }),
  
});

var test_phase = new Phase(test_boss,{
  attacks: [],
  wells: [
    new SpiritWell({
      x: 100,
      y: 100,
      r: 64
    })
  ]
});

test_phase.add_attack({
  spawners: [
    test_spawner_a,
    test_spawner_b,
    test_spawner_c
  ]
});

test_boss.add_phase(test_phase);