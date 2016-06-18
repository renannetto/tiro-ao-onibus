var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.LevelState = function () {
    "use strict";
    Engine.LevelState.call(this);

};

TiroAoOnibus.LevelState.prototype = Object.create(Engine.LevelState.prototype);
TiroAoOnibus.LevelState.prototype.constructor = TiroAoOnibus.LevelState;

TiroAoOnibus.LevelState.prototype.init = function (level_data, extra_parameters) {
    "use strict";
    Engine.LevelState.prototype.init.call(this, level_data);

    this.prefab_factory = new Engine.PrefabFactory(this, new TiroAoOnibus.ScriptFactory(this));

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 0;

    this.score = 0;
};

TiroAoOnibus.LevelState.prototype.create = function () {
    "use strict";
    Engine.LevelState.prototype.create.call(this);

    this.hud = this.game.plugins.add(Engine.HUD, this, this.level_data.hud);
};

TiroAoOnibus.LevelState.prototype.game_over = function () {
    "use strict";
    this.game.state.start("BootState", true, false, "TitleState", "assets/levels/title_screen.json");
};

//TiroAoOnibus.LevelState.prototype.render = function () {
//    "use strict";
//    var prefab_name;
//    for (prefab_name in this.prefabs) {
//        if (this.prefabs.hasOwnProperty(prefab_name)) {
//            this.game.debug.body(this.prefabs[prefab_name].sprite);
//        }
//    }
//};
