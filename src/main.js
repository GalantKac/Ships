var stage = new PIXI.Container();
var starsManager;
var playerShip;
var enemyShip;

PIXI.loader
  .add([
    "assets/stars_one.png",
    "assets/stars_two.png",
    "assets/ship.png",
    "assets/rocket.png",
    "assets/enemyShip.png"
  ])
  .load(init);

function init() {
  renderer.backgroundColor = 0x000000;
  starsManager = new StarsManager();
  playerShip = new PlayerShip();
  while(enemyList.length <5 ){
  console.log("tworzymy nowa enenmy");
  enemyShip = new EnemyShip();
  }
  renderer.render(stage);
  loop();
}

function loop() {
  starsManager.update();
  playerShip.update();
  EnemyShip.list.map(element =>{
    element.update();
  });

  Rocket.list.map(element => {
    element.update();
  });
  requestAnimationFrame(loop);
  renderer.render(stage);
}
