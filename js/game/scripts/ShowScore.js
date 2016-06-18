var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.ShowScore = function (game_state, prefab, properties) {
    "use strict";
    Engine.Script.call(this, game_state, prefab, properties);
};

TiroAoOnibus.ShowScore.prototype = Object.create(Engine.Script.prototype);
TiroAoOnibus.ShowScore.prototype.constructor = TiroAoOnibus.ShowScore;

TiroAoOnibus.ShowScore.prototype.update = function () {
    "use strict";
    this.prefab.sprite.text = "Score: " + this.game_state.score;
};
