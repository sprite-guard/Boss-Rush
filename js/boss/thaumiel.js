var thaumiel = {
  x: 0,
  y: 0,
  metadata: {
    title: "Thaumiel",
    composer: "2CO",
    background: Background.DEFAULT
  },
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
                shell: "#FF0000",
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
                shell: "#FF0000",
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
                color: "#FFFF00",
                shell: "#FF0000",
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
            // flower
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
            // rain, stop and scatter
            {
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: -120,
                ex: 820,
                ey: -120,
                count: 7,
                heading: 0.5 * Math.PI
              }),
              sync: 1950,
              lifespan: 300,
              spin: 0,
              delay: 25,
              speed_jitter: 0,
              yaw_jitter: 0.00,
              random_spread: 0.5,
              behaviors: [
                  SpawnerBehavior.freeze
                , SpawnerBehavior.scatter
                , SpawnerBehavior.speedup
              ],
              parameters: {
                  freeze_countdown: 350
                , freeze_duration: 500
                , scatter_countdown: 850
                , scatter_target: player
                , scatter_beam_width: 0.4
                , bullet_speedup_delay: 850
                , bullet_speedup: 0.03
                , max_bullet_speed: 4
                , min_bullet_speed: 0.3
              },
                bullet_type: {
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#FF9900",
                shell: "#FF6600",
                graze_color: "#CC0000",
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
                count: 7,
                heading: 0.5 * Math.PI
              }),
              sync: 2350,
              lifespan: 300,
              spin: 0,
              delay: 25,
              speed_jitter: 0,
              yaw_jitter: 0.00,
              random_spread: 0.5,
              behaviors: [
                  SpawnerBehavior.freeze
                , SpawnerBehavior.scatter
                , SpawnerBehavior.speedup
              ],
              parameters: {
                  freeze_countdown: 350
                , freeze_duration: 300
                , scatter_countdown: 650
                , scatter_target: player
                , scatter_beam_width: 0.4
                , bullet_speedup_delay: 650
                , bullet_speedup: 0.03
                , max_bullet_speed: 4
                , min_bullet_speed: 0.3
              },
                bullet_type: {
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#99FF00",
                shell: "#66FF00",
                graze_color: "#00CC00",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            // inward piano
            {
              sources: [{x: 400, y: 300, heading: 0}],
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0.5,
              delay: 1,
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
                      color: "#FF5522",
                      shell: "#FF5522",
                      graze_color: "#CC9900",
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
            // third roar
            {
              sources: helpers.makeRingAttack(400,300,8,0,1),
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
                    spin: 0,
                    random_spread: 1,
                    delay: 16,
                    sync: 200,
                    lifespan: 370,
                    aimed: true,
                    target: {x:400, y:300},
                    immediate: true,
                    bullet_type: {
                      behaviors: [  ],
                      parameters: {
                      },
                      yaw: 0,
                      speed: 2,
                      r: 8,
                      color: "#FF6600",
                      shell: "#FF6600",
                      graze_color: "#CC9900",
                      style: "solid",
                      cull_type: "timer",
                      max_age: 1000
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
            },
            // piano slow
            {
              sources: [
                {x: 0, y: 0, heading: (Math.PI / 4)},
                {x: 0, y: 600, heading: -(Math.PI/4)},
                {x: 800, y: 600, heading: -3*(Math.PI/4)},
                {x: 800, y: 0, heading: 3*(Math.PI/4)}
              ],
              sync: 4540,
              immediate: true,
              lifespan: 1200,
              spin: 0,
              delay: 140,
              speed_jitter: 0,
              yaw_jitter: 0.00,
              random_spread: 0,
              behaviors: [  ],
              parameters: {
                freeze_countdown: 350,
                freeze_duration: 500,
                scatter_countdown: 850
              },
              bullet_type: {
                behaviors: [ BulletBehavior.shootback ],
                parameters: {
                  shootback_spawner: {
                    sources: [{x: 0, y: 0, heading: 0}],
                    spin: 1,
                    random_spread: 1,
                    delay: 20,
                    sync: 0,
                    lifespan: 800,
                    aimed: false,
                    //target: {x: 400, y: 300},
                    immediate: true,
                    bullet_type: {
                      behaviors: [  ],
                      parameters: {
                      },
                      yaw: 0,
                      speed: 1,
                      r: 4,
                      color: "#996600",
                      shell: "#FFAA00",
                      graze_color: "#442200",
                      style: "gradient",
                      cull_type: "screen"
                    }
                  }
                },
                yaw: 0,
                speed: 2,
                r: 2,
                color: "#FF9900",
                shell: "#FF6600",
                graze_color: "#CC0000",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            // layered rings
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 5480,
              lifespan: 600,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                debug: false,
                yaw: 0.012,
                speed: 3,
                r: 8,
                color: "#449999",
                shell: "#44AAAA",
                graze_color: "#003333",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 5480,
              lifespan: 600,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                debug: false,
                yaw: -0.012,
                speed: 3,
                r: 8,
                color: "#449999",
                shell: "#44AAAA",
                graze_color: "#003333",
                style: "solid",
                cull_type: "screen"
              }
            },
            // quick rings
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 6100,
              lifespan: 500,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: 0.015,
                speed: 2,
                r: 8,
                color: "#449999",
                shell: "#44AAAA",
                graze_color: "#003333",
                style: "solid",
                cull_type: "screen"
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 6100,
              lifespan: 500,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: -0.015,
                speed: 2,
                r: 8,
                color: "#449999",
                shell: "#44AAAA",
                graze_color: "#003333",
                style: "solid",
                cull_type: "screen"
              }
            },
            // spray and slide
            {
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: -20,
                ex: 820,
                ey: -20,
                count: 12,
                heading: 0.5 * Math.PI
              }),
              sync: 6650,
              lifespan: 320,
              spin: 0,
              delay: 30,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 0.25*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#FF9900",
                shell: "#FF6600",
                graze_color: "#CC0000",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: 620,
                ex: 820,
                ey: 620,
                count: 12,
                heading: -0.5 * Math.PI
              }),
              sync: 6650,
              lifespan: 320,
              spin: 0,
              delay: 30,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 1.25*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#99FF00",
                shell: "#66FF00",
                graze_color: "#00CC00",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: -20,
                ex: 820,
                ey: -20,
                count: 12,
                heading: 0.5 * Math.PI
              }),
              sync: 7230,
              lifespan: 320,
              spin: 0,
              delay: 30,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 0.75*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#FF9966",
                shell: "#FF6666",
                graze_color: "#CC0066",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: 620,
                ex: 820,
                ey: 620,
                count: 12,
                heading: -0.5 * Math.PI
              }),
              sync: 7230,
              lifespan: 320,
              spin: 0,
              delay: 30,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 1.75*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#99FF66",
                shell: "#66FF66",
                graze_color: "#00CC66",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: -20,
                sy: -20,
                ex: -20,
                ey: 620,
                count: 12,
                heading: 0
              }),
              sync: 7810,
              lifespan: 320,
              spin: 0,
              delay: 30,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 0.25*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#FF9966",
                shell: "#FF6666",
                graze_color: "#CC0066",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: 820,
                sy: -20,
                ex: 820,
                ey: 620,
                count: 12,
                heading: -1 * Math.PI
              }),
              sync: 7810,
              lifespan: 320,
              spin: 0,
              delay: 40,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 1.25*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#99FF66",
                shell: "#66FF66",
                graze_color: "#00CC66",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: -20,
                sy: -20,
                ex: -20,
                ey: 620,
                count: 12,
                heading: 0
              }),
              sync: 8380,
              lifespan: 320,
              spin: 0,
              delay: 30,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 1.75*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#FF9999",
                shell: "#FF6699",
                graze_color: "#CC0099",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            },
            {
              sources: helpers.makeLineAttack({
                sx: 820,
                sy: -20,
                ex: 820,
                ey: 620,
                count: 12,
                heading: -1 * Math.PI
              }),
              sync: 8380,
              lifespan: 320,
              spin: 0,
              delay: 40,
              speed_jitter: 0.5,
              yaw_jitter: 0.00,
              random_spread: 1,
              behaviors: [ SpawnerBehavior.juke ],
              parameters: {
                juke_countdown: 320,
                juke_direction: 0.75*Math.PI,
                juke_beam_width: 0,
              },
                bullet_type: {
                yaw: 0,
                speed: 2,
                r: 8,
                color: "#99FF99",
                shell: "#66FF99",
                graze_color: "#00CC99",
                style: "gradient",
                cull_type: "timer",
                max_age: 1200
              }
            }
          ],
          choreography: {}
        },
      ],
      spirit_wells: [],
      exits: [],
      music: "music/2CO - the one with the vocaloid.flac",
      duration: 12200,
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