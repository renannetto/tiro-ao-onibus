var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.TitleState = function () {
    "use strict";
    Engine.LevelState.call(this);
};

TiroAoOnibus.TitleState.prototype = Object.create(Engine.LevelState.prototype);
TiroAoOnibus.TitleState.prototype.constructor = TiroAoOnibus.TitleState;

TiroAoOnibus.TitleState.prototype.init = function (level_data) {
    "use strict";
    Engine.LevelState.prototype.init.call(this, level_data);

    this.prefab_factory = new Engine.PrefabFactory(this, new TiroAoOnibus.ScriptFactory(this));

    this.game.input.onDown.add(this.start_game, this);
};

TiroAoOnibus.TitleState.prototype.start_game = function () {
    "use strict";
    this.game.state.start("BootState", true, false, "LevelState", "assets/levels/level.json");
};
