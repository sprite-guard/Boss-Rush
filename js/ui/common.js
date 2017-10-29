COMMON = {};

COMMON.daily_menu = new MenuItem({
  x: 10,
  y: 10,
  w: 238,
  h: 46,
  font: "sans-serif",
  size: "32px",
  text: "Daily Challenge"
});

COMMON.daily_portal = new Portal({
  x: 268,
  y: 32,
  h: 16,
  destination: "test_scene"
});