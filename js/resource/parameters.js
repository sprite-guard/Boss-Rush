// Shotgun spray:

var test_spawner = new RandomBulletSpawner({
  x: <>,
  y: <>,
  heading: <>,
  bullet_type: {
    yaw: <>,
    speed: 3
  },
  spin: 0,
  randmin: -0.3,
  randmax: 0.3,
  
  lifespan: 600,
  delay: 5
});

/*
Beam width affects how difficult a particular speed is.

With delay 0:
Speed 5 is not reasonable
Speed 4 is fair and easy with a wide beam, unfair with a narrow beam.
*/

shotgun_spray.difficulty = {
  
}

// Cyber Spiral:

var test_spawner = new RandomBulletSpawner({
  x: <>,
  y: <>,
  heading: <>,
  bullet_type: {
    yaw: 0,
    speed: 4
  },
  spin: 0.01,
  randmin: -0.5,
  randmax: 0.5,
  
  lifespan: 600,
  delay: 0
});

/*
I like delay 0 with this one, beam width 1, speeds 1-4
Beam width 0.6 makes low speeds denser/less fair, but shorter and easier.
Beam width 0.4 makes speed 1 unfair but easy. Speed 4 is more fair, but still walls.
