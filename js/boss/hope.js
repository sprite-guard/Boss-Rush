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