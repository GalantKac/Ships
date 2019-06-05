const stage = new PIXI.Container();

var playerShip;
var starsManager;

var style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 80,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#D3872A', '#F7FF00'], // gradient
  stroke: '#D3872A',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440
});

var styleFooter = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 40,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#F7FF10', '#F7FF00'], // gradient
  stroke: '#D3872A',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 700
});

var logo = new PIXI.Text('Star Ship', style);
var about = new PIXI.Text('Twórcami gry "Star Ship" są studenci Uniwersytetu Łódzkiego Kacper Galantowicz i Piotr Sznajder', styleFooter);

PIXI.loader
  .add([
    "assets/stars_one.png",
    "assets/stars_two.png",
    "assets/settings-work-tool.png",
    "assets/about-us.png",
    "assets/music-player-play.png",
    "assets/ship.png",
    "assets/facebook.png",
    "assets/instagram.png",
    "assets/twitter.png",
  ])
  .load(init);

function init() {
  renderer.backgroundColor = 0x000000;
  starsManager = new StarsManager();
  playerShip = new PlayerShip();
  
  
  logo.position.set(renderer.width * 0.4, renderer.height * 0.1);
  about.position.set(renderer.width * 0.33, renderer.height * 0.4);
  stage.addChild(logo);
  stage.addChild(about);
  
  renderer.render(stage);
  loop();
}

function loop() {
  starsManager.update();
  playerShip.update();
  requestAnimationFrame(loop);
  renderer.render(stage);
  console.log(buttonPlay.x,buttonPlay.y);
}


