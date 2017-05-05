var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
		this.game.load.image('alien', 'assets/smallcoal.gif');
        this.game.load.image('forest','assets/background.jpg');
        this.game.load.image('player', 'assets/obama-sprite.png');
        this.game.load.image('peat','assets/turve.png');
        //   this.game.load.image('blob','assets/blob.gif');
        this.game.load.audio('backgroundmusic', ['assets/gamemusic.mp3', 'assets/gamemusic.ogg']);
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}