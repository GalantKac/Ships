class EnemyShip {
    constructor(){
        this.speed = 1;
        this.directionX = 0;
        this.directionY = 0;
        this.sprite = new PIXI.Sprite(
            PIXI.loader.resources["assets/enemyShip.png"].texture
          );
        this.sprite.interacrtive = true;
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(renderer.width * 0.3, renderer.height * 0.3);
        this.sprite.scale.set(0.4, 0.4);
    
        stage.addChild(this.sprite);
        


    }

    update() {
        this.sprite.position.x += this.directionX * this.speed;
        this.sprite.position.y += this.directionY * this.speed;  
    }
}