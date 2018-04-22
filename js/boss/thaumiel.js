var thaumiel = {
  x: 0,
  y: 0,
  sprites: [
    { draw: function(x,y) { return true; } }
  ],
  phases: [
    {
      // main
      attacks: [
        {
          spawners: [
            // intro
            {
              sources: [
                {x: 10, y: 10, heading: 0},
                {x: 10, y: 590, heading: -Math.PI / 2},
                {x: 790, y: 10, heading: Math.PI / 2},
                {x: 790, y: 590, heading: Math.PI}
              ],
              spin: 0.15,
              random_spread: 0,
              delay: 1,
              sync: 0,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CCFF",
                shell: "#66CCFF",
                graze_color: "#666666",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: Math.PI / 2 },
                {x: 10, y: 590, heading: 0 },
                {x: 790, y: 10, heading: Math.PI},
                {x: 790, y: 590, heading: -Math.PI / 2}
              ],
              spin: -0.15,
              random_spread: 0,
              delay: 1,
              sync: 0,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CCFF",
                shell: "#66CCFF",
                graze_color: "#666666",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: 0},
                {x: 10, y: 590, heading: -Math.PI / 2},
                {x: 790, y: 10, heading: Math.PI / 2},
                {x: 790, y: 590, heading: Math.PI}
              ],
              spin: 0.15,
              random_spread: 0,
              delay: 1,
              sync: 100,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CCDD",
                shell: "#66CCDD",
                graze_color: "#666666",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: Math.PI / 2 },
                {x: 10, y: 590, heading: 0 },
                {x: 790, y: 10, heading: Math.PI},
                {x: 790, y: 590, heading: -Math.PI / 2}
              ],
              spin: -0.15,
              random_spread: 0,
              delay: 1,
              sync: 100,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CCDD",
                shell: "#66CCDD",
                graze_color: "#666666",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: 0},
                {x: 10, y: 590, heading: -Math.PI / 2},
                {x: 790, y: 10, heading: Math.PI / 2},
                {x: 790, y: 590, heading: Math.PI}
              ],
              spin: 0.15,
              random_spread: 0,
              delay: 1,
              sync: 200,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CCBB",
                shell: "#66CCBB",
                graze_color: "#666666",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: Math.PI / 2 },
                {x: 10, y: 590, heading: 0 },
                {x: 790, y: 10, heading: Math.PI},
                {x: 790, y: 590, heading: -Math.PI / 2}
              ],
              spin: -0.15,
              random_spread: 0,
              delay: 1,
              sync: 200,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CCBB",
                shell: "#66CCBB",
                graze_color: "#666666",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: 0},
                {x: 10, y: 590, heading: -Math.PI / 2},
                {x: 790, y: 10, heading: Math.PI / 2},
                {x: 790, y: 590, heading: Math.PI}
              ],
              spin: 0.15,
              random_spread: 0,
              delay: 1,
              sync: 300,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CC99",
                shell: "#66CC99",
                graze_color: "#666666",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: Math.PI / 2 },
                {x: 10, y: 590, heading: 0 },
                {x: 790, y: 10, heading: Math.PI},
                {x: 790, y: 590, heading: -Math.PI / 2}
              ],
              spin: -0.15,
              random_spread: 0,
              delay: 1,
              sync: 300,
              lifespan: 20,
              speed_jitter: 0,
              yaw_jitter: 0.01,
              bullet_type: {
                //behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#66CC99",
                shell: "#66CC99",
                graze_color: "#666666",
                style: "gradient",
                cull_type: "screen"
              }
            },
            // contrary
            {
              sources: [
                {x: 10, y: 10, heading: 0},
                {x: 10, y: 590, heading: -Math.PI / 2},
                {x: 790, y: 10, heading: Math.PI / 2},
                {x: 790, y: 590, heading: Math.PI}
              ],
              spin: 0.15,
              random_spread: 0,
              delay: 1,
              sync: 400,
              lifespan: 20,
              speed_jitter: 0.5,
              yaw_jitter: 0,
              bullet_type: {
                behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#FF00FF",
                shell: "#0000FF",
                graze_color: "#666666",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: Math.PI / 2 },
                {x: 10, y: 590, heading: 0 },
                {x: 790, y: 10, heading: Math.PI},
                {x: 790, y: 590, heading: -Math.PI / 2}
              ],
              spin: -0.15,
              random_spread: 0,
              delay: 1,
              sync: 420,
              lifespan: 20,
              speed_jitter: 0.5,
              yaw_jitter: 0,
              bullet_type: {
                behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#FF00FF",
                shell: "#0000FF",
                graze_color: "#666666",
                style: "gradient",
                cull_type: "screen"
              }
            },
            // spiral
            {
              sources: [
                {x: 400, y: 300, heading: 0},
                {x: 400, y: 300, heading: Math.PI},
                {x: 400, y: 300, heading: Math.PI / 2},
                {x: 400, y: 300, heading: -Math.PI / 2}
              ],
              spin: 0.05,
              random_spread: 0,
              delay: 1,
              sync: 820,
              lifespan: 140,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                debug: false,
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#00FFFF",
                shell: "#0000FF",
                graze_color: "#003333",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 400, y: 300, heading: 0},
                {x: 400, y: 300, heading: Math.PI},
                {x: 400, y: 300, heading: Math.PI/2},
                {x: 400, y: 300, heading: -Math.PI/2}
              ],
              spin: 1,
              random_spread: 0,
              delay: 1,
              sync: 820,
              lifespan: 140,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                debug: false,
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 5,
                r: 8,
                color: "#22FFCC",
                shell: "#00CC88",
                graze_color: "#003333",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: [
                {x: 400, y: 300, heading: 0},
                {x: 400, y: 300, heading: Math.PI},
                {x: 400, y: 300, heading: Math.PI/2},
                {x: 400, y: 300, heading: -Math.PI/2}
              ],
              spin: 0.3,
              random_spread: 0,
              delay: 1,
              sync: 980,
              lifespan: 140,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                debug: false,
                parameters: {
                  bounces: 1
                },
                yaw: 0,
                speed: 5,
                r: 8,
                color: "#22FFCC",
                shell: "#00CC88",
                graze_color: "#003333",
                style: "gradient",
                cull_type: "screen"
              }
            }
          ],
          choreography: {}
        },
      ],
      spirit_wells: [],
      exits: [],
      music: "music/the one with the vocaloid.flac",
      duration: 6500,
      cycle: false
    },
  
    {
      // exit
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
  ]
}