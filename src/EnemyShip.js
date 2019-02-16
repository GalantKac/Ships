var enemyList = new Array();
var numEnemy = 3;

class EnemyShip {
  static get list() {
    return enemyList;
  }
  static set list(value) {
    enemyList = value;
  }
  constructor() {
      window.setInterval(
        function() {
          const r = 85;
          this.sprite = new PIXI.Sprite(
            PIXI.loader.resources["assets/enemyShip.png"].texture
          );
          this.sprite.interacrtive = true;
          this.sprite.anchor.set(0.5, 0.5);
          var randomXPosition =
            currentPlayerPositonX + Math.floor(Math.random() * 300) + 200;
          var randomYPosition =
            currentPlayerPositonY + Math.floor(Math.random() * 100) + 1;
          this.sprite.position.set(randomXPosition, randomYPosition);
          this.sprite.scale.set(0.4, 0.4);
          this.overlapping = false;
          for (var i = 0; i < enemyList.length; i++) {
            var tmp = enemyList[i];
            var disctance = Math.sqrt(
              Math.pow(this.sprite.position.x - tmp.x) +
                Math.pow(this.sprite.position.y - tmp.y)
            );
            console.log(disctance);
            if (disctance < 2 * r) {
              this.overlapping = true;
              break;
            }
          }
          if (this.overlapping == false) {
            EnemyShip.list.push(this);
            stage.addChild(this.sprite);
            console.log(enemyList.length);
          }
        }.bind(this),
        4000
      );
  }

  update() {
    this.sprite.position.x -= 1;
  }
}
