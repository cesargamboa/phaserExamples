
//widht and height of the game 
var game = new Phaser.Game(600, 400, Phaser.AUTO);
//adding the state 1 to the game
game.state.add('state1', demo.state1);
game.state.start('state1');