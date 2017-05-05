var gameTitle = function(game){}
 
gameTitle.prototype = {
  	create: function(){
		var playButton = this.game.add.button(game.world.centerX - 95, 400, 'button', playTheGame, this, 2, 1, 0););
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}