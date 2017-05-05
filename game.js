var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create , update: update});

function preload() {

    game.load.image('alien', 'assets/smallcoal.gif');
    game.load.image('forest','assets/background.jpg');
    game.load.image('player', 'assets/obama-sprite.png');
    game.load.image('peat','assets/turve.png');
 //   game.load.image('blob','assets/blob.gif');
    game.load.audio('backgroundmusic', ['assets/gamemusic.mp3', 'assets/gamemusic.ogg']);

}

var blobSpeed = -40;

var player;
var aliens;
var blobs;
var counter = 0;
var music;

function createAliens(y) {
    var alien = aliens.create(0, 30 + y * 55, 'alien');
    alien.width = 40;
    alien.height = 40;
    alien.checkWorldBounds = true;
    alien.events.onOutOfBounds.add(alienOut, this);
    alien.body.velocity.x = 50 + Math.random() * 100;
}

function createBlobs(y) {
    var blob = blobs.create(game.width, 50 + y * 140, 'peat');
    blob.width = 50;
    blob.height = 50;
    blob.checkWorldBounds = true;
    blob.events.onOutOfBounds.add(blobOut, this);
    blob.body.velocity.x = -100 + Math.random() * -200;
    
}


function create() {
    
    var b = game.add.sprite(0, 0, 'forest');
    b.height=600;
    b.width=800;
    
    //  We only want world bounds on the left and right
    game.physics.setBoundsToWorld();
    
    music = game.add.audio('backgroundmusic');
    music.play();

    player = game.add.sprite(game.width/2, game.height/2, 'player');
    player.anchor.setTo(0.5, 0.5);
    player.width = 50;
    player.height = 50;
    game.physics.arcade.enable(player);
    

    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;
    
    blobs = game.add.group();
    blobs.enableBody = true;
    blobs.physicsBodyType = Phaser.Physics.ARCADE;
    
    for (var y = 0; y < 10; y++)
    {
        createAliens(y);
    }
    
    for (var y = 0; y < 4; y++)
    {
        createBlobs(y);
    }

  

}

function alienOut(alien) {

    //  Move the alien to the top of the screen again
    alien.reset(0, alien.y);

    //  And give it a new random velocity
    alien.body.velocity.x = 50 + Math.random() * 100;

}

function blobOut(blob) {
    blobSpeed -= 10;
    blob.reset(game.width, blob.y)
    blob.body.velocity.x = blobSpeed + Math.random() * -100;
}


function update() {
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

}


function collisionHandler (player, alien) {
    aliens.remove(alien);
    var newY = Math.random() * 9;
    createAliens(newY);  
    counter += 1;
    console.log(counter);
}

function blobCollision (player, blob) {
    console.log("MOIII");
}



















