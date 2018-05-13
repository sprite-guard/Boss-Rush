var hope = {
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
          spawners: [],
          choreography: {}
        }
      ],
      spirit_wells: [],
      exits: [],
      music: "music/",
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