var kinetic = {
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
            {
              x: 400, y: 300, heading: 0,
              sources: helpers.makeRingAttack(400,300,5,0,1),
              spin: 0.5,
              delay: 3,
              immediate: true,
              sync: 0,
              lifespan: 136,
              random_spread: 0.5,
              speed_jitter: 0.5,
              yaw_jitter: -0.007,
              behaviors: [ SpawnerBehavior.freeze ],
              parameters: {
                freeze_countdown: 40,
                freeze_duration: 96,
              },
              bullet_type: {
                yaw: 0.003,
                speed: 5,
                r: 8,
                color: "#CC6699",
                shell: "#662233",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            },
            {
              x: 400, y: 300, heading: 0,
              sources: helpers.makeRingAttack(400,300,5,0,1),
              spin: 0.5,
              delay: 3,
              immediate: true,
              sync: 160,
              lifespan: 144,
              random_spread: 0.5,
              speed_jitter: 0.5,
              yaw_jitter: -0.007,
              behaviors: [ SpawnerBehavior.freeze ],
              parameters: {
                freeze_countdown: 40,
                freeze_duration: 120,
              },
              bullet_type: {
                yaw: 0.003,
                speed: 5,
                r: 8,
                color: "#CC6699",
                shell: "#662233",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            },
            {
              x: 400, y: 300, heading: 0,
              sources: helpers.makeRingAttack(400,300,5,0,1),
              spin: 0.5,
              delay: 3,
              immediate: true,
              sync: 344,
              lifespan: 136,
              random_spread: 0.5,
              speed_jitter: 0.5,
              yaw_jitter: -0.007,
              behaviors: [ SpawnerBehavior.freeze ],
              parameters: {
                freeze_countdown: 40,
                freeze_duration: 96,
              },
              bullet_type: {
                yaw: 0.003,
                speed: 5,
                r: 8,
                color: "#CC6699",
                shell: "#662233",
                graze_color: "#000000",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            },
            {
              sources: helpers.makeRingAttack(400,300,6,0,1),
              x: 400, y: 300, heading: 0,
              spin: 0.1,
              delay: 4,
              sync: 384,
              immediate: true,
              lifespan: 96,
              random_spread: 0,
              speed_jitter: 0,
              yaw_jitter: 0,
              bullet_type: {
                yaw: 0,
                speed: 3,
                r: 8,
                color: "#2288FF",
                shell: "#0066CC",
                graze_color: "#000099",
                style: "gradient",
                cull_type: "screen",
                max_age: 1000,
              }
            }
          ],
          choreography: {}
        }
      ],
      spirit_wells: [],
      exits: [],
      music: "music/Metaself - Kinetic Elevation Rites.wav",
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