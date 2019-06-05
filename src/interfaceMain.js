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
  fill: ['#F7FF10', '#F7FF00'], // gradient
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
var about = new PIXI.Text(' © Copyright 2019, All Rights Reserved', styleFooter);
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
  about.position.set(renderer.width * 0.4, renderer.height * 0.95);
  stage.addChild(logo);
  stage.addChild(about);
  
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
 // buttonSettings.on('mousedown', onClickPlay);
  buttonSettings.on('mouseover', Over);
  buttonSettings.on('mouseout', Out);
  stage.addChild(buttonSettings);
  
  buttonAbout = new PIXI.Sprite(PIXI.loader.resources["assets/about-us.png"].texture);
  buttonAbout.scale.set(0.2, 0.2);
  buttonAbout.x = renderer.width * 0.5;
  buttonAbout.y = renderer.height * 0.7;
  buttonAbout.interactive = true;
  buttonAbout.buttonMode = true;
  buttonAbout.on('mousedown', onClickAbout);
  buttonAbout.on('mouseover', Over);
  buttonAbout.on('mouseout', Out);
  stage.addChild(buttonAbout);

  fb = new PIXI.Sprite(PIXI.loader.resources["assets/facebook.png"].texture);
  fb.scale.set(0.05, 0.05);
  fb.x = renderer.width * 0.65;
  fb.y = renderer.height * 0.95;
  fb.interactive = true;
  fb.buttonMode = true;
  fb.on('mousedown', onClickFb);
  stage.addChild(fb);

  instagram = new PIXI.Sprite(PIXI.loader.resources["assets/instagram.png"].texture);
  instagram.scale.set(0.05, 0.05);
  instagram.x = renderer.width * 0.67;
  instagram.y = renderer.height * 0.95;
  instagram.interactive = true;
  instagram.buttonMode = true;
  instagram.on('mousedown', onClickInstagram);
  stage.addChild(instagram);
  
  twitter = new PIXI.Sprite(PIXI.loader.resources["assets/twitter.png"].texture);
  twitter.scale.set(0.05, 0.05);
  twitter.x = renderer.width * 0.69;
  twitter.y = renderer.height * 0.95;
  twitter.interactive = true;
  twitter.buttonMode = true;
  twitter.on('mousedown', onClickTwitter);
  stage.addChild(twitter);

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

function onClickFb() {
  window.open('https://www.facebook.com/','_self');
}

function onClickInstagram() {
  window.open('https://www.instagram.com/','_self');
}

function onClickTwitter() {
  window.open('https://twitter.com/?lang=pl','_self');
}

function onClickAbout(){
  window.open('about.html','_self');
}

function Over()
{
  this.scale.set(0.25, 0.25);
}

function Out()
{
  this.scale.set(0.20, 0.20);
}

