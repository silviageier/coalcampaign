/*
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create , update: update});
*/


//var game = new Phaser.Game(800, 600, Phaser.AUTO,'game');

//var game = new Phaser.Game(800, 600, Phaser.CANVAS, "game");
        //        var game = new Phaser.Game(800, 600, Phaser.AUTO,'game');

var score = 0;
var scoreText;
var blobSpeed = -40;

var theGame = function() {
   

var player;
var aliens;
var blobs;

var music;

};
//theGame.Play = {};

theGame.prototype = {
/*preload: function() {

    game.load.image('alien', 'assets/smallcoal.gif');
    game.load.image('forest','assets/background.jpg');
    game.load.image('player', 'assets/obama-sprite.png');
    game.load.image('peat','assets/turve.png');
 //   game.load.image('blob','assets/blob.gif');
    game.load.audio('backgroundmusic', ['assets/gamemusic.mp3', 'assets/gamemusic.ogg']);

},
*/
/*


var player;
var aliens;
var blobs;
var counter = 0;
var music;
*/


create: function() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    
function createAliens(y) {
    var alien = aliens.create((game.width-40)*Math.random()+40, Math.random() * game.height, 'alien');
    alien.width = 40;
    alien.height = 40;
    alien.checkWorldBounds = true;
}
    

function createBlobs(y) {
    var blob = blobs.create((game.width-25) * Math.random() + 25, y * Math.random(), 'peat');
    blob.width = 50;
    blob.height = 50;
    blob.checkWorldBounds = true;
    blob.body.velocity.x = -100 + Math.random() * -200;
    blob.body.velocity.y = Math.random() * -200;
    game.physics.enable(blob, Phaser.Physics.ARCADE);
    blob.body.collideWorldBounds = true;
    blob.body.bounce.setTo(1, 1);  
}
        
    var b = game.add.sprite(0, 0, 'forest');
    b.height=600;
    b.width=800;
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
    //  We only want world bounds on the left and right
    game.physics.setBoundsToWorld();
    
    music = game.add.audio('backgroundmusic');
    coalSound = game.add.audio('coal');
    loseSound = game.add.audio('sad');
    music.loopFull();

    player = game.add.sprite(game.width/2, game.height/2, 'player');
    player.anchor.setTo(0.5, 0.5);
    player.width = 50;
    player.height = 50;
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    

    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    
    blobs = game.add.group();
    blobs.enableBody = true;
    blobs.physicsBodyType = Phaser.Physics.ARCADE;
    
    
    for (var y = 0; y < 4; y++)
    {
        createAliens(y);
    }
    
    for (var y = 0; y < 4; y++)
    {
        createBlobs(y);
    }

  

},

update: function() {



    
function createAliens(y) {
    var alien = aliens.create((game.width-40)*Math.random(), Math.random() * game.height, 'alien');
    alien.width = 40;
    alien.height = 40;
    alien.checkWorldBounds = true;
}
    

    
function collisionHandler(player, alien) {
    aliens.remove(alien);
    var newY = Math.random() * 3;
    createAliens(newY);  
    console.log(score);
    coalSound.play();
    score += 1;
    scoreText.text = 'Score: ' + score;
}

function blobCollision(player, blob) {
    console.log("MOIII");
    loseSound.play();
    //this.game.start("GameOver")
}
    game.physics.arcade.overlap(player, aliens, collisionHandler, null, this);
    game.physics.arcade.overlap(player, blobs, blobCollision, null, this);
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        player.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        player.y += 4;
    }

},


};


            



//    game.state.add('game',theGame);
  //  game.state.start('game');












