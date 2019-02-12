
var stage = new PIXI.Container();

function init()
{
    renderer.bakcgroundColor = 0x000000;
    renderer.render(stage);
    loop();
}

function loop()
{
    requestAnimationFrame(loop);
    renderer.render(stage);
}
