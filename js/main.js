var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

var dimensions, game;

game = new Phaser.Game("100%", "100%", Phaser.CANVAS);
game.state.add("BootState", new Engine.BootState());
game.state.add("LoadingState", new Engine.LoadingState());
game.state.add("LevelState", new TiroAoOnibus.LevelState());
game.state.add("TitleState", new TiroAoOnibus.TitleState());
game.state.start("BootState", true, false, "TitleState", "assets/levels/title_screen.json");
