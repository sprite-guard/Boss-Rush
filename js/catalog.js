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