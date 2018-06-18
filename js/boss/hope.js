var hope = {
  x: 0,
  y: 0,
  sprites: [
    { draw: function(x,y) { return true; } }
  ],
  phases: [
     {
      // main
      music: "music/Milana Zilnik - Dream of a Child.wav",
      duration: 6500,
      attacks: [
        {
          spawners: [
            {
              sources: [
                {x: 10, y: 10, heading: 0}
              ],
              x: 0,
              y: 0,
              spin: 0,
              random_spread: 0,
              delay: 160,
              sync: 0,
              lifespan: 600,
              speed_jitter: 0,
              immediate: true,
              bullet_type: {
                behaviors: [ BulletBehavior.explode, BulletBehavior.homing ],
                parameters: {
                  homing_time: 900,
                  max_yaw: 0.03,
                  explode_time: 320,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,6,0,1),
                    x: 0,
                    y: 0,
                    spin: 0,
                    random_spread: 0,
                    delay: 1,
                    sync: 0,
                    lifespan: 1,
                    speed_jitter: 0,
                    immediate: true,
                    bullet_type: {
                      behaviors: [ BulletBehavior.explode ],
                      parameters: {
                        homing_time: 900,
                        max_yaw: 0.03,
                        explode_time: 160,
                        explode_spawner: {
                          sources: helpers.makeRingAttack(400,300,6,0,1),
                          x: 0,
                          y: 0,
                          spin: 0,
                          random_spread: 0,
                          delay: 1,
                          sync: 0,
                          lifespan: 1,
                          speed_jitter: 0,
                          immediate: true,
                          bullet_type: {
                            yaw: 0,
                            speed: 1.5,
                            r: 8,
                            color: "#FF44FF",
                            shell: "#FF66AA",
                            graze_color: "#991199",
                            style: "gradient",
                            cull_type: "screen",
                            max_age: 1000
                          }
                        }
                      },
                      yaw: 0,
                      speed: 1.5,
                      r: 8,
                      color: "#6699FF",
                      shell: "#3333FF",
                      graze_color: "#111199",
                      style: "gradient",
                      cull_type: "screen",
                      max_age: 1000
                    }
                  }
                },
                yaw: 0,
                speed: 1.5,
                r: 8,
                color: "#66CCFF",
                shell: "#3366FF",
                graze_color: "#114499",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000
              }
            },
            {
              sources: [
                {x: 10, y: 590, heading: -Math.PI / 2}
              ],
              x: 0,
              y: 0,
              spin: 0,
              random_spread: 0,
              delay: 160,
              sync: 160,
              lifespan: 600,
              speed_jitter: 0,
              immediate: true,
              bullet_type: {
                behaviors: [ BulletBehavior.explode, BulletBehavior.homing ],
                parameters: {
                  homing_time: 900,
                  max_yaw: 0.03,
                  explode_time: 320,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,6,0,1),
                    x: 0,
                    y: 0,
                    spin: 0,
                    random_spread: 0,
                    delay: 1,
                    sync: 0,
                    lifespan: 1,
                    speed_jitter: 0,
                    immediate: true,
                    bullet_type: {
                      behaviors: [ BulletBehavior.explode ],
                      parameters: {
                        homing_time: 900,
                        max_yaw: 0.03,
                        explode_time: 160,
                        explode_spawner: {
                          sources: helpers.makeRingAttack(400,300,6,0,1),
                          x: 0,
                          y: 0,
                          spin: 0,
                          random_spread: 0,
                          delay: 1,
                          sync: 0,
                          lifespan: 1,
                          speed_jitter: 0,
                          immediate: true,
                          bullet_type: {
                            yaw: 0,
                            speed: 1.5,
                            r: 8,
                            color: "#FF44FF",
                            shell: "#FF66AA",
                            graze_color: "#991199",
                            style: "gradient",
                            cull_type: "screen",
                            max_age: 1000
                          }
                        }
                      },
                      yaw: 0,
                      speed: 1.5,
                      r: 8,
                      color: "#FF9966",
                      shell: "#FF3333",
                      graze_color: "#991111",
                      style: "gradient",
                      cull_type: "screen",
                      max_age: 1000
                    }
                  }
                },
                yaw: 0,
                speed: 1.5,
                r: 8,
                color: "#FF9966",
                shell: "#FF6633",
                graze_color: "#992211",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000
              }
            },
            {
              sources: [
                {x: 790, y: 10, heading: Math.PI / 2},
              ],
              x: 0,
              y: 0,
              spin: 0,
              random_spread: 0,
              delay: 160,
              sync: 120,
              lifespan: 600,
              speed_jitter: 0,
              immediate: true,
              bullet_type: {
                behaviors: [ BulletBehavior.explode, BulletBehavior.homing ],
                parameters: {
                  homing_time: 900,
                  max_yaw: 0.03,
                  explode_time: 320,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,6,0,1),
                    x: 0,
                    y: 0,
                    spin: 0,
                    random_spread: 0,
                    delay: 1,
                    sync: 0,
                    lifespan: 1,
                    speed_jitter: 0,
                    immediate: true,
                    bullet_type: {
                      behaviors: [ BulletBehavior.explode ],
                      parameters: {
                        homing_time: 900,
                        max_yaw: 0.03,
                        explode_time: 160,
                        explode_spawner: {
                          sources: helpers.makeRingAttack(400,300,6,0,1),
                          x: 0,
                          y: 0,
                          spin: 0,
                          random_spread: 0,
                          delay: 1,
                          sync: 0,
                          lifespan: 1,
                          speed_jitter: 0,
                          immediate: true,
                          bullet_type: {
                            yaw: 0,
                            speed: 1.5,
                            r: 8,
                            color: "#FF44FF",
                            shell: "#FF66AA",
                            graze_color: "#991199",
                            style: "gradient",
                            cull_type: "screen",
                            max_age: 1000
                          }
                        }
                      },
                      yaw: 0,
                      speed: 1.5,
                      r: 8,
                      color: "#66AA99",
                      shell: "#338866",
                      graze_color: "#119911",
                      style: "gradient",
                      cull_type: "screen",
                      max_age: 1000
                    }
                  }
                },
                yaw: 0,
                speed: 1.5,
                r: 8,
                color: "#66FF88",
                shell: "#44AA99",
                graze_color: "#119911",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000
              }
            },
            {
              sources: [
                {x: 790, y: 590, heading: Math.PI}
              ],
              x: 0,
              y: 0,
              spin: 0,
              random_spread: 0,
              delay: 160,
              sync: 80,
              lifespan: 600,
              speed_jitter: 0,
              immediate: true,
              bullet_type: {
                behaviors: [ BulletBehavior.explode, BulletBehavior.homing ],
                parameters: {
                  homing_time: 900,
                  max_yaw: 0.03,
                  explode_time: 320,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,6,0,1),
                    x: 0,
                    y: 0,
                    spin: 0,
                    random_spread: 0,
                    delay: 1,
                    sync: 0,
                    lifespan: 1,
                    speed_jitter: 0,
                    immediate: true,
                    bullet_type: {
                      behaviors: [ BulletBehavior.explode ],
                      parameters: {
                        homing_time: 900,
                        max_yaw: 0.03,
                        explode_time: 160,
                        explode_spawner: {
                          sources: helpers.makeRingAttack(400,300,6,0,1),
                          x: 0,
                          y: 0,
                          spin: 0,
                          random_spread: 0,
                          delay: 1,
                          sync: 0,
                          lifespan: 1,
                          speed_jitter: 0,
                          immediate: true,
                          bullet_type: {
                            yaw: 0,
                            speed: 1.5,
                            r: 8,
                            color: "#FF44FF",
                            shell: "#FF66AA",
                            graze_color: "#991199",
                            style: "gradient",
                            cull_type: "screen",
                            max_age: 1000
                          }
                        }
                      },
                      yaw: 0,
                      speed: 1.5,
                      r: 8,
                      color: "#FF44FF",
                      shell: "#FF66AA",
                      graze_color: "#991199",
                      style: "gradient",
                      cull_type: "screen",
                      max_age: 1000
                    }
                  }
                },
                yaw: 0,
                speed: 1.5,
                r: 8,
                color: "#FF88FF",
                shell: "#FF44FF",
                graze_color: "#991199",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,9,0,1),
              x: 0,
              y: 0,
              spin: 0.125*Math.PI,
              random_spread: 0,
              delay: 40,
              sync: 1440,
              lifespan: 500,
              speed_jitter: 0,
              immediate: true,
              bullet_type: {
                behaviors: [ BulletBehavior.explode ],
                parameters: {
                  explode_time: 40,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,5,0,1),
                    x: 0,
                    y: 0,
                    spin: 0,
                    random_spread: 0,
                    delay: 1,
                    sync: 0,
                    lifespan: 1,
                    speed_jitter: 0,
                    yaw_jitter: 0.002,
                    immediate: true,
                    behaviors: [ SpawnerBehavior.freeze, SpawnerBehavior.scatter ],
                    parameters: {
                      freeze_countdown: 40,
                      freeze_duration: 100,
                      scatter_countdown: (40+100),
                      scatter_target: {x: 400, y: 300},
                      scatter_beam_width: Math.PI/4,
                      scatter_direction: 1
                    },
                    bullet_type: {
                      behaviors: [  ],
                      parameters: {
                      },
                      yaw: 0,
                      speed: 3,
                      r: 8,
                      color: "#FF88FF",
                      shell: "#FF44FF",
                      graze_color: "#991199",
                      style: "gradient",
                      cull_type: "screen",
                      max_age: 1000
                    }
                  }
                },
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#FF88FF",
                shell: "#FF44FF",
                graze_color: "#991199",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,6,0,1),
              x: 400, y: 300, heading: 0,
              spin: 0.07,
              delay: 3,
              sync: 1920,
              lifespan: 220,
              random_spread: 0,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#99AACC",
                shell: "#338866",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,6,0,1),
              x: 400, y: 300, heading: 0,
              spin: -0.07,
              delay: 3,
              sync: 1920,
              lifespan: 220,
              random_spread: 0,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#99AACC",
                shell: "#338866",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,6,0,1),
              x: 400, y: 300, heading: 0,
              spin: 0.5,
              delay: 3,
              sync: 2180,
              lifespan: 220,
              random_spread: 0,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                yaw: 0.01,
                speed: 3,
                r: 8,
                color: "#99AACC",
                shell: "#338866",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,6,0,1),
              x: 400, y: 300, heading: 0,
              spin: -0.5,
              delay: 3,
              sync: 2180,
              lifespan: 220,
              random_spread: 0,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                yaw: -0.01,
                speed: 3,
                r: 8,
                color: "#99AACC",
                shell: "#338866",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,24,0,1),
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 40,
              sync: 2440,
              lifespan: 220,
              aimed: true,
              bullet_type: {
                behaviors: [ BulletBehavior.bounce ],
                parameters: {
                  bounces: 3
                },
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#FF5522",
                shell: "#FF5522",
                graze_color: "#FF0000",
                style: "solid",
                cull_type: "screen",
                max_age: 1000
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,24,0,1),
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 40,
              sync: 3500,
              lifespan: 220,
              aimed: true,
              bullet_type: {
                behaviors: [ BulletBehavior.shootback ],
                parameters: {
                  shootback_spawner: {
                    sources: [{
                      x: 0,
                      y: 0,
                      heading: 0
                    }],
                    x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
                    delay: 40,
                    sync: 3500,
                    lifespan: 220,
                    behaviors: [],
                    parameters: {},
                    aimed: true,
                    bullet_type: {
                      behaviors: [  ],
                      parameters: {
                      },
                      yaw: 0,
                      speed: 3,
                      r: 8,
                      color: "#0066FF",
                      shell: "#0044CC",
                      graze_color: "#000000",
                      style: "gradient",
                      cull_type: "screen",
                      max_age: 1000
                    }
                  }
                },
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#0066FF",
                shell: "#0044CC",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000
              }
            }
            
          ],
          choreography: {}
        },
      ],
      spirit_wells: [],
      exits: [],
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