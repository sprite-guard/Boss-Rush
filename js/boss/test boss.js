var test_spawner = new BulletSpawner({
  x: 0,
  y: 100,
  heading: 0.5 * Math.PI,
  bullet_type: {
    yaw: -0.006,
    speed: 3,
    r: 16,
    color: "#00FFFF",
    shell: "#0000FF",
    graze_color: "#000000",
    style: "gradient"
  },
  spin: 1,
  random_spread: 0.3,
  dx: 1,
  dy: 0,
  
  lifespan: 800,
  delay: 3
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
  })
});

var test_phase = new Phase(test_boss,{
  attacks: []
});

test_phase.add_attack({
  spawners: [
    test_spawner
  ]
});

test_boss.add_phase(test_phase);