var gameTitle = function(game){}
 
gameTitle.prototype = {
  	create: function(){
        this.game.state.start("TheGame");
		//var playButton = this.game.add.button(game.world.centerX - 95, 400, 'button', playTheGame, this);

		//playButton.anchor.setTo(0.5,0.5);
	},
	/*playTheGame: function(){
		this.game.state.start("TheGame");
	},
    */
}