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
      duration: 8320,
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
              delay: 240,
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
                    sources: helpers.makeRingAttack(400,300,8,0,1),
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
              delay: 240,
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
                    sources: helpers.makeRingAttack(400,300,8,0,1),
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
              delay: 240,
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
                    sources: helpers.makeRingAttack(400,300,8,0,1),
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
              delay: 240,
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
                    sources: helpers.makeRingAttack(400,300,8,0,1),
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
                      behaviors: [ BulletBehavior.homing ],
                      parameters: {
                        homing_time: 300,
                        homing_delay: 140,
                        max_yaw: 0.01,
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
                r: 10,
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
                r: 10,
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
              lifespan: 320,
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
              lifespan: 320,
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
              sources: [{x: 400, y: 300, heading: 0}],
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 40,
              sync: 2200,
              lifespan: 361,
              aimed: false,
              spin: 1,
              bullet_type: {
                behaviors: [ BulletBehavior.explode, BulletBehavior.homing ],
                parameters: {
                  homing_time: 240,
                  max_yaw: 0.05,
                  explode_time: 240,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,17,0,1),
                    x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
                    delay: 40,
                    sync: 0,
                    lifespan: 40,
                    aimed: true,
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
                      graze_color: "#FF0000",
                      style: "solid",
                      cull_type: "screen",
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
                cull_type: "screen",
                max_age: 1000
              }
            },
            {
              sources: [
                {x: 10, y: 10, heading: 0 }
              ],
              delay: 4,
              sync: 2860,
              lifespan: 100,
              random_spread: 0.5,
              aimed: true,
              immediate: true,
              spin: 0,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#0066FF",
                shell: "#0044CC",
                graze_color: "#000000",
                style: "solid",
                cull_type: "timer",
                max_age: 800,
                max_cycles: 1
              }
            },
            {
              sources: [
                {x: 10, y: 550, heading: 0 }
              ],
              delay: 4,
              sync: 2860,
              lifespan: 100,
              aimed: true,
              immediate: true,
              spin: 0,
              random_spread: 0.5,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#0066FF",
                shell: "#0044CC",
                graze_color: "#000000",
                style: "solid",
                cull_type: "timer",
                max_age: 800,
                max_cycles: 1
              }
            },
            {
              sources: [
                {x: 750, y: 10, heading: 0 }
              ],
              delay: 4,
              sync: 2860,
              lifespan: 100,
              aimed: true,
              immediate: true,
              spin: 0,
              random_spread: 0.5,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#0066FF",
                shell: "#0044CC",
                graze_color: "#000000",
                style: "solid",
                cull_type: "timer",
                max_age: 800,
                max_cycles: 1
              }
            },
            {
              sources: [
                {x: 750, y: 550, heading: 0 }
              ],
              delay: 4,
              sync: 2860,
              lifespan: 100,
              aimed: true,
              immediate: true,
              spin: 0,
              random_spread: 0.5,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                },
                yaw: 0,
                speed: 4,
                r: 8,
                color: "#0066FF",
                shell: "#0044CC",
                graze_color: "#000000",
                style: "solid",
                cull_type: "timer",
                max_age: 800,
                max_cycles: 1
              }
            },
            {
              sources: [{x: 400, y: 300, heading: 0}],
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 2,
              sync: 2700,
              lifespan: 1000,
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
              sources: helpers.makeRingAttack(400,300,4,0,1),
              x: 0, y: 0, heading: 0,
              random_spread: 0,
              delay: 3,
              sync: 3520,
              lifespan: 200,
              aimed: false,
              immediate: true,
              spin: -0.55,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                },
                yaw: 0.01,
                speed: 3,
                r: 8,
                color: "#0066FF",
                shell: "#0044CC",
                graze_color: "#000000",
                style: "solid",
                cull_type: "timer",
                max_age: 800,
                max_cycles: 1
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,48,0,1),
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 80,
              sync: 4300,
              lifespan: 481,
              aimed: true,
              immediate: true,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                  bounces: 1
                },
                yaw: -0.0135,
                speed: 2,
                r: 6,
                color: "#2299FF",
                shell: "#2299FF",
                graze_color: "#004488",
                style: "solid",
                cull_type: "timer",
                max_cycles: 1,
                max_age: false
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,24,0,1),
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 160,
              sync: 4500,
              lifespan: 481,
              aimed: true,
              immediate: true,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                  bounces: 1
                },
                yaw: 0.0135,
                speed: 3,
                r: 6,
                color: "#FF9922",
                shell: "#FF9922",
                graze_color: "#884400",
                style: "solid",
                cull_type: "timer",
                max_cycles: 7,
                max_age: false
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,4,0,1),
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 160,
              sync: 5140,
              lifespan: 1180,
              aimed: false,
              immediate: true,
              bullet_type: {
                behaviors: [ BulletBehavior.explode ],
                parameters: {
                  explode_time: 120,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,13,0,1),
                    x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
                    delay: 220,
                    sync: 0,
                    immediate: true,
                    lifespan: 220,
                    behaviors: [  ],
                    parameters: {
                    },
                    aimed: false,
                    target: {x: 400, y: 300},
                    bullet_type: {
                      behaviors: [  ],
                      parameters: {  },
                      yaw: 0.005,
                      speed: 3,
                      r: 8,
                      color: "#0066FF",
                      shell: "#0044CC",
                      graze_color: "#000000",
                      style: "gradient",
                      cull_type: "timer",
                      max_cycles: 1,
                      max_age: false
                    }
                  }
                },
                yaw: 0.0135,
                speed: 2.8,
                r: 0,
                color: "#FF9922",
                shell: "#FF9922",
                graze_color: "#884400",
                style: "solid",
                cull_type: "timer",
                max_cycles: 7,
                max_age: false
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,4,0,1),
              x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
              delay: 160,
              sync: 5240,
              lifespan: 1180,
              aimed: false,
              immediate: true,
              bullet_type: {
                behaviors: [ BulletBehavior.explode ],
                parameters: {
                  explode_time: 120,
                  explode_spawner: {
                    sources: helpers.makeRingAttack(400,300,13,0,1),
                    x: 0, y: 0, heading: 0, spin: 0, random_spread: 0,
                    delay: 220,
                    sync: 0,
                    immediate: true,
                    lifespan: 220,
                    behaviors: [  ],
                    parameters: {
                    },
                    bullet_type: {
                      behaviors: [ BulletBehavior.homing ],
                      parameters: {
                        homing_time: 100,
                        max_yaw: 0.05
                      },
                      yaw: 0,
                      speed: 1,
                      r: 6,
                      color: "#FFFFFF",
                      shell: "#00FFFF",
                      graze_color: "#000000",
                      style: "gradient",
                      cull_type: "timer",
                      max_cycles: 1,
                      max_age: false
                    }
                  }
                },
                yaw: 0.0135,
                speed: 2.8,
                r: 0,
                color: "#FF9922",
                shell: "#FF9922",
                graze_color: "#884400",
                style: "solid",
                cull_type: "timer",
                max_cycles: 7,
                max_age: false
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,6,0,1),
              x: 0, y: 0, heading: 0,
              random_spread: 1,
              delay: 2,
              sync: 8120,
              lifespan: 100,
              aimed: false,
              immediate: true,
              spin: -0.55,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                },
                yaw: 0.01,
                speed: 4.5,
                r: 6,
                color: "#0066FF",
                shell: "#0044CC",
                graze_color: "#000000",
                style: "solid",
                cull_type: "screen",
                max_age: 800,
                max_cycles: 1
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,6,0,1),
              x: 0, y: 0, heading: 0,
              random_spread: 1,
              delay: 2,
              sync: 8120,
              lifespan: 100,
              aimed: false,
              immediate: true,
              spin: 0.55,
              bullet_type: {
                behaviors: [  ],
                parameters: {
                },
                yaw: -0.01,
                speed: 4.5,
                r: 6,
                color: "#0088DD",
                shell: "#0055BB",
                graze_color: "#000000",
                style: "solid",
                cull_type: "screen",
                max_age: 800,
                max_cycles: 1
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