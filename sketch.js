var player;

function preload() {

}

function setup() {
  createCanvas(600, 1000);

  ;
  player = createSprite(300, 890);
}

function draw() {
  edges = createEdgeSprites();

  background("lightblue");

  drawSprites();


}

