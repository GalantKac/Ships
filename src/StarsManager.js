class StarsManager 
{
   constructor() {

        this.starsList = [];

        window.setInterval (function()
          {
            const sprite = (Math.random() > 0.5 ? "stars_one" : "stars_two"); //jesli wieksza wieksza od polowy to 1 else 2
            this.stars = new PIXI.Sprite(PIXI.loader.resources["assets/" + sprite + ".png"].texture); //zaladowanie
            this.stars.anchor.set(0.5, 0.5); //pozycja srodek
            this.stars.position.set(renderer.width *1.5, renderer.height * Math.random()); //aby pokazywala sie tlyko od gory do dolu z ograniczeniem szerokosci
            
            let minScale = 2;
            let maxScale = 2.5;
            let scale = Math.random() * (maxScale - minScale) + minScale;
            this.stars.scale.set(scale, scale);

            stage.addChildAt(this.stars, 0); // dodajemy gwiazdy aby tworzyly na poczatku listy dzieki temu statek jest przed
            this.starsList.push(this.stars);
          }.bind(this), 2000);
  }

  update(){
      this.starsList.forEach(function(element, index, array) {
        element.position.x-=4;

        if(element.position.x<-renderer.width *0.1){
          element.destroy();
          array.splice(0, 1);
        }
      })
  };
}


