// Pattern over spray
// curve pattern bullets to make slightly harder
// curve random bullets to make much harder
// randomize pattern bullets with narrow beam to make somewhat harder

var test_spawner = new RandomBulletSpawner({
  x: 400,
  y: 100,
  heading: 0.5 * Math.PI,
  bullet_type: {
    yaw: 0,
    speed: 1
  },
  spin: 0,
  random_spread: 1,
  
  lifespan: 600,
  delay: 0
});

var other_test_spawner = new BulletSpawner({
  x: 400,
  y: 100,
  heading: 0.6 * Math.PI,
  bullet_type: {
    yaw: 0,
    color: "#000000",
    speed: 2
  },
  spin: 1,
  random_spread: 0.4,
  
  lifespan: 600,
  delay: 0
});

// Moving spray

var test_spawner = new BulletSpawner({
  x: 0,
  y: 100,
  heading: 0.5 * Math.PI,
  bullet_type: {
    yaw: 0,
    speed: 3,
    r: 6,
  },
  spin: 0,
  random_spread: 1,
  dx: 1,
  dy: 0,
  
  lifespan: 600,
  delay: 1
});

var other_test_spawner = new RandomBulletSpawner({
  x: 400,
  y: 100,
  heading: 0.6 * Math.PI,
  bullet_type: {
    yaw: 0.004,
    color: "#000000",
    speed: 2
  },
  spin: 1,
  random_spread: 0,
  
  lifespan: 600,
  delay: 0
});

// Current test pattern 10/11/2017
// spawners
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

game.spawners.push(test_spawner);

var other_test_spawner = new BulletSpawner({
  x: 400,
  y: 100,
  heading: 0.6 * Math.PI,
  bullet_type: {
    yaw: 0.0065,
    r: 8,
    color: "#FFBBFF",
    shell: "#FF0000",
    graze_color: "#000000",
    pit_size: 2,
    style: "gradient",
    speed: 2
  },
  spin: 1,
  random_spread: 0.4,
  
  lifespan: 600,
  delay: 3
});

game.spawners.push(other_test_spawner);

// rain with diagonal bullets
var shower_speed = 2,
    shower_r = 6,
    shower_delay = 8,
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