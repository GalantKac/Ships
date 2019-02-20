var enemyList = [];
const r = 100;
var enemyDistance = 50;
var odleglosc = playerPositionX +200;
class EnemyShip {
  static get list() {
    return enemyList;
  }
  static set list(value) {
    enemyList = value;
  }
  constructor() {
    this.speed = 2;
    this.sprite = new PIXI.Sprite(
      PIXI.loader.resources["assets/enemyShip.png"].texture
    );
    this.sprite.interacrtive = true;
    this.sprite.anchor.set(0.5, 0.5);
    var randomXPosition =
      Math.floor(Math.random() * renderer.width * 1.2) + renderer.width * 1;
    var randomYPosition =
      Math.floor(Math.random() * renderer.height * 0.8) + renderer.height * 0.2;
    this.sprite.position.set(randomXPosition, randomYPosition);
    this.sprite.scale.set(0.4, 0.4);
    this.overlapping = false;
    for (var i = 0; i < enemyList.length; i++) {
      var tmp = enemyList[i];
      var distance = Math.sqrt(
        Math.pow(this.sprite.position.x - tmp.x, 2) +
          Math.pow(this.sprite.position.y - tmp.y, 2)
      );
      var twoR = 2 * r;
      if (distance < twoR) {
        console.log("zla pozycja");
        this.overlapping = true;
      }
    }
    if (!this.overlapping) {
      console.log("dodano enenmy");
      console.log("dane: " + randomXPosition, randomYPosition);
      this.odl = enemyDistance;
      enemyDistance += 50;
      EnemyShip.list.push(this);
      console.log(enemyList.length);
      stage.addChild(this.sprite);
    } else {
      this.sprite.destroy();
    }
  }

  update() {  
    if (
      this.sprite.position.x >= renderer.width - 100 ||
      this.sprite.position.x > playerPositionX + this.odl
    ) {
      this.sprite.position.x -= this.speed;
    }
    if (this.sprite.position.x <= playerPositionX + this.odl) {
      this.sprite.position.x += this.speed;
    }
  }
}
