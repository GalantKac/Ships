
var stage = new PIXI.Container();
var starsManager;

PIXI.loader.add([
    "assets/stars_one.png" ,
    "assets/stars_two.png"
]).load(init);

function init()
{
    renderer.bakcgroundColor = 0x22A7F0;

    starsManager = new StarsManager();

    renderer.render(stage);
    loop();
}

function loop()
{
    starsManager.update();

    requestAnimationFrame(loop);
    renderer.render(stage);
}

