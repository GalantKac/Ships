var stage = new PIXI.Container();
var starsManager;
var playerShip;

PIXI.loader
  .add([
    "assets/stars_one.png",
    "assets/stars_two.png",
    "assets/ship.png",
    "assets/rocket.png"
  ])
  .load(init);

function init() {
  // renderer.bakcgroundColor = 0x22A7F0;

  starsManager = new StarsManager();
  playerShip = new PlayerShip();

  renderer.render(stage);
  loop();
}

function loop() {
  starsManager.update();
  playerShip.update();

  Rocket.list.map(element => {
    element.update();
  });
  requestAnimationFrame(loop);
  renderer.render(stage);
}
