let _list = new Array();

class Rocket {
  static get list() {
    return _list;
  }
  static set list(value) {
    _list = value;
  }

  constructor(x, y) {
    this.sprite = new PIXI.Sprite(
      PIXI.loader.resources["assets/rocket.png"].texture
    );

    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(x + 170, y);
    this.speed = 5;
    Rocket.list.push(this);

    stage.addChild(this.sprite);
  }

  update() {
    for(var i = 0; i< enemyList.length; i++)
    { 
      var tmp = enemyList[i];
      console.log(tmp.x,tmp.y);
      var rocketDisX = tmp.x - this.sprite.position.x; 
      var rocketDisY = tmp.y - this.sprite.position.y;
      if(rocketDisX>50)
      {
        console.log("zrobilem obliczenia");
        this.sprite.destroy();
        Rocket.list.splice(Rocket.list.indexOf(this), 1);
      }
    }
    this.sprite.position.x += this.speed;

    if (this.sprite.position.x > renderer.width * 1.1) {
      this.sprite.destroy();
      Rocket.list.splice(Rocket.list.indexOf(this), 1);
    }
  }
}
