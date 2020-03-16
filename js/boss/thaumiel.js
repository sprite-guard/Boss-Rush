var THAUMIEL_SCALE = 0.25;
var thaumiel = {
  x: 0,
  y: 0,
  metadata: {
    title: "Thaumiel",
    composer: "2CO",
    artist: "Dan Ellis",
    background: Background.DEFAULT
  },

  persona: {
    x: 400,
    y: 100,
    width: 300,
    height: 380,
    scale_factor: 1,
    lineart: {
      file: {
        src: "art/Fox/Line Art.png",
        name: "lineart"
      },
      x: 400,
      y: 100,
      width: 300,
      height: 380
    },
    regions: [
      {
        hitboxes: [
          {x:104,y:125,r:14}, // ear lower
          {x:105,y:100,r:8}, // ear upper
          {x:210,y:255,r:40}, // tail
          {x:172,y:110,r:32}, // shoulder mid
          {x:133,y:93,r:8}, // upper hair straggler
          {x:136,y:113,r:6}, // lower hair straggler
          {x:147,y:85,r:6}, // upper shoulder straggler
          {x:120,y:141,r:9}, // forward neck
          {x:105,y:141,r:6}, // under ear
          {x:137,y:135,r:10}, // inner neck
          {x:150,y:138,r:7}, // chest notch a
          {x:164,y:141,r:7}, // chest notch b
          {x:176,y:148,r:7}, // chest notch c
          {x:223,y:163,r:43}, // lower back
          {x: 146, y: 259, r: 27}, // upper tail
          {x: 168, y: 236, r: 11}, // upper tail left nook
          {x: 183, y: 222, r: 11}, // upper tail mid nook
          {x: 193, y: 207, r: 13}, // upper tail right nook
          {x: 233, y: 210, r: 29}, // tail base main
          {x: 226, y: 235, r: 32}, // tail base corner
          {x: 243, y: 178, r: 28}, // lower back corner
          {x: 185, y: 285, r: 23}, // lower tail right edge
          {x: 157, y: 290, r: 30}, // lower tail edge
          {x: 200, y: 121, r: 33}, // upper back mid
          {x: 225, y: 130, r: 22}, // upper back edge
          {x: 126, y: 103, r: 6}, // between crown
          {x: 198, y: 286, r: 24} // stray hair
        ],
        fill_rate: 0.1,
        sprites: [ // TODO: should legs be their own region?
          {
            file: {
              src: "art/Fox/Body.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          }
        ]
      },
      {
        hitboxes: [
          {x:91,y:163,r:8}, // top
          {x: 88, y: 171, r: 8} // bottom
        ],
        fill_rate: 0.01,
        sprites: [
        {
          file: {
            src: "art/Fox/Pupil.png",
          },
          x: 400,
          y: 100,
          width: 300,
          height: 380
        },
        {
          file: { src: "art/Fox/Eye Black.png" },
          x: 400,
          y: 100,
          width: 300,
          height: 380
        }
       ]
      },
      {
        hitboxes: [
          {x: 61, y: 118, r: 9}, // center
          {x: 56, y: 132, r: 8}, // bottom left
          {x: 60, y: 104, r: 9}, // top
          {x: 68, y: 121, r: 6}  // right
        ],
        fill_rate: 0.01,
        sprites: [
        {
          file: {
            src: "art/Fox/Ear.png",
          },
          x: 400,
          y: 100,
          width: 300,
          height: 380
        }
       ]
      },
      {
        hitboxes: [
          {x: 83, y: 260, r: 34}, // main
          {x: 91, y: 278, r: 32}, // lower main
          {x: 52, y: 240, r: 20}, // lower tip
          {x: 55, y: 213, r: 12}, // mid tip
          {x: 106, y: 305, r: 16}, // left base
          {x: 58, y: 195, r: 9}, // upper tip
          {x: 126, y: 314, r: 14}, // lower base
          {x: 75, y: 274, r: 34} // fuzz
        ],
        fill_rate: 0.01,
        sprites: [
        {
          file: {
            src: "art/Fox/Tail Tip.png",
          },
          x: 400,
          y: 100,
          width: 300,
          height: 380
        },
        {
          file: {
            src: "art/Fox/Tail Straggler.png",
          },
          x: 400,
          y: 100,
          width: 300,
          height: 380
        }
       ]
      },
      
      {
        hitboxes: [
          {x: 73, y: 148, r: 19}, // dome
          {x: 81, y: 133, r: 10}, // top corner
          {x: 65, y: 168, r: 14}, // forehead
          {x: 102, y: 152, r: 9}, // temple
          {x: 77, y: 196, r: 17}, // nose bridge
          {x: 73, y: 216, r: 12}, // nose tip
          {x: 94, y: 184, r: 7}, // cheek bottom
          {x: 99, y: 176, r: 7}, // cheek lower mid
          {x: 103, y: 167, r: 7} // cheek upper mid
        ],
        fill_rate: 0.01,
        sprites: [
        {
          file: {
            src: "art/Fox/Mask.png",
          },
          x: 400,
          y: 100,
          width: 300,
          height: 380
        }
       ]
      },
      {
        hitboxes: [
          {x: 122, y: 86, r: 13}, // upper left
          {x: 118, y: 103, r: 8}, // lower left
          {x: 122, y: 119, r: 11}, // bottom
          {x: 136, y: 102, r: 11}, // right
        ],
        fill_rate: 0.01,
        sprites: [
        {
          file: {
            src: "art/Fox/Hair Right.png",
          },
          x: 400,
          y: 100,
          width: 300,
          height: 380
        }
       ]
      },
      {
        hitboxes: [
          {x: 82, y: 107, r: 14}, // center
          {x: 96, y: 91, r: 11}, // right mid
          {x: 100, y: 68, r: 12}, // right upper
          {x: 74, y: 88, r: 8}, // mid mid
          {x: 71, y: 75, r: 7}, // mid top
          {x: 56, y: 93, r: 8}, // left center
          {x: 45, y: 121, r: 7} // far left
        ],
        fill_rate: 0.01,
        sprites: [
          {
            file: {
              src: "art/Fox/Hair Center Left.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Hair Left.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Hair Center.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
        ]
      },
      
      {
        hitboxes: [
          {x:145,y:186,r:40}, // main
          {x:108,y:215,r:15}, // corner
          {x: 131, y: 205, r: 31} // toe
        ],
        fill_rate: 0.01,
        sprites: [
          {
            file: {
              src: "art/Fox/Hind Leg Toe.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Middle Leg FG.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Middle Leg Top BG.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Middle Leg Bottom BG.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Front Leg Straggler BG.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Front Leg Top BG.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          {
            file: {
              src: "art/Fox/Front Leg Bottom BG.png"
            },
            x: 400,
            y: 100,
            width: 300,
            height: 380
          },
          
        ]
      }
    ]
  },
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
              delay: 2,
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
              delay: 2,
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
              sources: helpers.makeLineAttack({
                sx: 10,
                sy: -20,
                ex: 820,
                ey: -20,
                count: 12,
                heading: 0.5 * Math.PI
              }),
              spin: 0,
              random_spread: 0.9,
              delay: 5,
              sync: 95,
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
                cull_type: "timer"
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
              spin: 0,
              random_spread: 0.9,
              delay: 5,
              sync: 95,
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
                cull_type: "timer"
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
              spin: 0,
              random_spread: 0.9,
              delay: 5,
              sync: 195,
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
                cull_type: "timer"
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
              spin: 0,
              random_spread: 0.9,
              delay: 5,
              sync: 195,
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
                cull_type: "timer"
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
              delay: 2,
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
              delay: 2,
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
            },
            // calm and storm
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 9000,
              immediate: true,
              lifespan: 500,
              speed_jitter: 0.5,
              yaw_jitter: 0.005,
              behaviors: [ SpawnerBehavior.speedup, SpawnerBehavior.scatter ],
              parameters: {
                bullet_speedup_delay: 570,
                bullet_speedup: 0.1,
                max_bullet_speed: 5,
                min_bullet_speed: 1.5,
                scatter_countdown: 570,
                scatter_target: { x: 400, y: 300 },
                scatter_beam_width: 0.1,
                scatter_direction: 1
              },
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: 0.015,
                speed: 1.5,
                r: 8,
                color: "#CC66AA",
                shell: "#886644",
                graze_color: "#663333",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 9000,
              immediate: true,
              lifespan: 500,
              speed_jitter: 0.5,
              yaw_jitter: 0.005,
              behaviors: [ SpawnerBehavior.speedup, SpawnerBehavior.scatter ],
              parameters: {
                bullet_speedup_delay: 570,
                bullet_speedup: 0.1,
                max_bullet_speed: 5,
                min_bullet_speed: 1.5,
                scatter_countdown: 570,
                scatter_target: { x: 400, y: 300 },
                scatter_beam_width: 0.1,
                scatter_direction: 1
              },
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: -0.015,
                speed: 1.5,
                r: 8,
                color: "#9966CC",
                shell: "#8844AA",
                graze_color: "#663333",
                style: "gradient",
                cull_type: "screen"
              }
            },
            // echoes
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 9250,
              immediate: true,
              lifespan: 110,
              speed_jitter: 0.5,
              yaw_jitter: 0.005,
              behaviors: [ SpawnerBehavior.speedup, SpawnerBehavior.scatter ],
              parameters: {
                bullet_speedup_delay: 570,
                bullet_speedup: 0.1,
                max_bullet_speed: 5,
                min_bullet_speed: 3,
                scatter_countdown: 570,
                scatter_target: { x: 400, y: 300 },
                scatter_beam_width: 0.1,
                scatter_direction: 1
              },
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: 0.015,
                speed: 3,
                r: 8,
                color: "#CC66AA",
                shell: "#886644",
                graze_color: "#663333",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 9250,
              immediate: true,
              lifespan: 110,
              speed_jitter: 0.5,
              yaw_jitter: 0.005,
              behaviors: [ SpawnerBehavior.speedup, SpawnerBehavior.scatter ],
              parameters: {
                bullet_speedup_delay: 570,
                bullet_speedup: 0.1,
                max_bullet_speed: 5,
                min_bullet_speed: 3,
                scatter_countdown: 570,
                scatter_target: { x: 400, y: 300 },
                scatter_beam_width: 0.1,
                scatter_direction: 1
              },
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: -0.015,
                speed: 3,
                r: 8,
                color: "#9966CC",
                shell: "#8844AA",
                graze_color: "#663333",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 9490,
              immediate: true,
              lifespan: 60,
              speed_jitter: 0.5,
              yaw_jitter: 0.005,
              behaviors: [ SpawnerBehavior.speedup, SpawnerBehavior.scatter ],
              parameters: {
                bullet_speedup_delay: 60,
                bullet_speedup: 0.1,
                max_bullet_speed: 5,
                min_bullet_speed: 3,
                scatter_countdown: 60,
                scatter_target: { x: 400, y: 300 },
                scatter_beam_width: 0.1,
                scatter_direction: 1
              },
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: 0.015,
                speed: 3,
                r: 8,
                color: "#CC66AA",
                shell: "#886644",
                graze_color: "#663333",
                style: "gradient",
                cull_type: "screen"
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,20,0,1),
              spin: 0,
              random_spread: 0,
              delay: 50,
              sync: 9490,
              immediate: true,
              lifespan: 60,
              speed_jitter: 0.5,
              yaw_jitter: 0.005,
              behaviors: [ SpawnerBehavior.speedup, SpawnerBehavior.scatter ],
              parameters: {
                bullet_speedup_delay: 60,
                bullet_speedup: 0.1,
                max_bullet_speed: 5,
                min_bullet_speed: 3,
                scatter_countdown: 60,
                scatter_target: { x: 400, y: 300 },
                scatter_beam_width: 0.1,
                scatter_direction: 1
              },
              bullet_type: {
                behaviors: [ BulletBehavior.stopyaw ],
                parameters: {
                  stopyaw_timer: 100
                },
                debug: false,
                yaw: -0.015,
                speed: 3,
                r: 8,
                color: "#9966CC",
                shell: "#8844AA",
                graze_color: "#663333",
                style: "gradient",
                cull_type: "screen"
              }
            },
          ],
          choreography: {
            // TODO
            movements: [
              {
                start_time: 0,
                end_time: 60,
                start_x: 400,
                start_y: 300,
                end_x: 400,
                end_y: 300
              }
            ]
          }
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