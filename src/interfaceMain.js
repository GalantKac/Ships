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
  fontSize: 20,
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

var logo = new PIXI.Text('Star Ship', style);
var footer = new PIXI.Text(' © Copyright 2019, All Rights Reserved', styleFooter);
PIXI.loader
  .add([
    "assets/stars_one.png",
    "assets/stars_two.png",
    "assets/settings-work-tool.png",
    "assets/about-us.png",
    "assets/music-player-play.png",
    "assets/ship.png",
  ])
  .load(init);





function init() {
  renderer.backgroundColor = 0x000000;
  starsManager = new StarsManager();
  playerShip = new PlayerShip();
  
  
  logo.position.set(renderer.width * 0.4, renderer.height * 0.1);
  footer.position.set(renderer.width * 0.4, renderer.height * 0.95);
  stage.addChild(logo);
  stage.addChild(footer);
  
  buttonPlay = new PIXI.Sprite(PIXI.loader.resources["assets/music-player-play.png"].texture);
  buttonPlay.scale.set(0.2, 0.2);
  buttonPlay.x = renderer.width * 0.5;
  buttonPlay.y = renderer.height * 0.3;
  buttonPlay.interactive = true;
  buttonPlay.buttonMode = true;
  buttonPlay.on('mousedown', onClickPlay);
  buttonPlay.on('mouseover', Over);
  buttonPlay.on('mouseout', Out);
  stage.addChild(buttonPlay);
  
  buttonSettings = new PIXI.Sprite(PIXI.loader.resources["assets/settings-work-tool.png"].texture);
  buttonSettings.scale.set(0.2, 0.2);
  buttonSettings.x = renderer.width * 0.5;
  buttonSettings.y = renderer.height * 0.5;
  buttonSettings.interactive = true;
  buttonSettings.buttonMode = true;
  buttonSettings.on('mousedown', onClickPlay);
  buttonSettings.on('mouseover', Over);
  buttonSettings.on('mouseout', Out);
  stage.addChild(buttonSettings);
  
  buttonAbout = new PIXI.Sprite(PIXI.loader.resources["assets/about-us.png"].texture);
  buttonAbout.scale.set(0.2, 0.2);
  buttonAbout.x = renderer.width * 0.5;
  buttonAbout.y = renderer.height * 0.7;
  buttonAbout.interactive = true;
  buttonAbout.buttonMode = true;
  buttonAbout.on('mousedown', onClickPlay);
  buttonAbout.on('mouseover', Over);
  buttonAbout.on('mouseout', Out);
  stage.addChild(buttonAbout);
  
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

function onClickPlay() {
  window.open('index.html','_self');
}

function Over()
{
  this.scale.set(0.25, 0.25);
}

function Out()
{
  this.scale.set(0.20, 0.20);
}

