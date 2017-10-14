var angle;
var tree = [];
var counter = 0;
var song;
var amplitude;

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('mario.mp3')
}

function setup() {
  // put setup code here

  song.setVolume(0.1);
  amplitude = new p5.Amplitude();
  song.play();
  angle = PI / 2.5;
  createCanvas(400, 400);

  var a = createVector(width/2, height)
  var b = createVector(width/2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed() {
  for(var i = tree.length - 1; i >= 0; i--) {
    if(!tree[i].finished) {
      tree.push(tree[i].branchA())
      tree.push(tree[i].branchB())
    }
    
    tree[i].finished = true
  }
}

function draw() {
  background(51);

  var level = amplitude.getLevel();
  for(var i = 0; i < tree.length; i++){
    tree[i].jitter(level);
    tree[i].show()
    // tree[i].jitter()
  }
  // put drawing code here
}

