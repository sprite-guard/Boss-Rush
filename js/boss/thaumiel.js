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
              spin: -0.3,
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
            },
            // rings
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 1150,
              lifespan: 600,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                debug: false,
                yaw: 0.0135,
                speed: 3,
                r: 8,
                color: "#22FF00",
                shell: "#44CC00",
                graze_color: "#003333",
                style: "gradient",
                cull_type: "timer"
              }
            },
            {
              sources: [{x: 400, y: 300, heading: 0}],
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 1200,
              lifespan: 550,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                debug: false,
                behaviors: [ BulletBehavior.homing ],
                parameters: {
                  max_yaw: 0.05,
                  homing_time: 300
                },
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#CC2200",
                shell: "#CC4400",
                graze_color: "#CC0088",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: -120,
                ex: 820,
                ey: -120,
                count: 12,
                heading: 0.5 * Math.PI
              }),
              sync: 1950,
              lifespan: 300,
              spin: 0,
              delay: 20,
              speed_jitter: 0,
              yaw_jitter: 0.00,
              random_spread: 0.5,
              behaviors: [ SpawnerBehavior.freeze, SpawnerBehavior.scatter ],
              parameters: {
                freeze_countdown: 350,
                freeze_duration: 500,
                scatter_countdown: 850
              },
                bullet_type: {
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#0099FF",
                shell: "#0066FF",
                graze_color: "#0000CC",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: -120,
                ex: 820,
                ey: -120,
                count: 12,
                heading: 0.5 * Math.PI
              }),
              sync: 2350,
              lifespan: 300,
              spin: 0,
              delay: 20,
              speed_jitter: 0,
              yaw_jitter: 0.00,
              random_spread: 0.5,
              behaviors: [ SpawnerBehavior.freeze, SpawnerBehavior.scatter ],
              parameters: {
                freeze_countdown: 350,
                freeze_duration: 300,
                scatter_countdown: 650
              },
                bullet_type: {
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#00FF99",
                shell: "#00FF66",
                graze_color: "#00CC00",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: [{x: 400, y: 300, heading: 0}],
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 2,
              sync: 3150,
              lifespan: 800,
              aimed: false,
              spin: 1,
              bullet_type: {
                behaviors: [ BulletBehavior.shootback ],
                parameters: {
                  shootback_spawner: {
                    sources: [{x: 0, y: 0, heading: 0}],
                    spin: 1,
                    random_spread: 0,
                    delay: 40,
                    sync: 300,
                    lifespan: 41,
                    aimed: true,
                    target: {x: 400, y: 300},
                    immediate: true,
                    bullet_type: {
                      behaviors: [  ],
                      parameters: {
                      },
                      yaw: 0,
                      speed: 1,
                      r: 8,
                      color: "#0066FF",
                      shell: "#0066FF",
                      graze_color: "#0099CC",
                      style: "solid",
                      cull_type: "timer",
                      max_age: 600
                    }
                  }
                },
                yaw: 0,
                speed: 2,
                r: 0,
                color: "#FF5522",
                shell: "#FF5522",
                graze_color: "#FF0000",
                style: "solid",
                cull_type: "timer",
                max_age: 1000
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,7,0,1),
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 40,
              sync: 3000,
              lifespan: 31,
              aimed: false,
              immediate: true,
              spin: 0,
              behaviors: [ SpawnerBehavior.freeze ],
              parameters: {
                freeze_countdown: 190,
                freeze_duration: 370
              },
              bullet_type: {
                behaviors: [ BulletBehavior.shootback ],
                parameters: {
                  shootback_spawner: {
                    sources: [{x: 0, y: 0, heading: 0}],
                    spin: 1,
                    random_spread: 0,
                    delay: 8,
                    sync: 190,
                    lifespan: 370,
                    aimed: false,
                    target: {x: 400, y: 300},
                    immediate: true,
                    bullet_type: {
                      behaviors: [  ],
                      parameters: {
                      },
                      yaw: 0,
                      speed: 2,
                      r: 8,
                      color: "#0066FF",
                      shell: "#0066FF",
                      graze_color: "#0099CC",
                      style: "solid",
                      cull_type: "screen",
                      max_age: false
                    }
                  }
                },
                yaw: 0,
                speed: 2,
                r: 0,
                color: "#FF5522",
                shell: "#FF5522",
                graze_color: "#FF0000",
                style: "solid",
                cull_type: "timer",
                max_age: 2000
              }
            }
          ],
          choreography: {}
        },
      ],
      spirit_wells: [],
      exits: [],
      music: "music/2CO - the one with the vocaloid.flac",
      duration: 10000,
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