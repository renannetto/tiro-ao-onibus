var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.HitBus = function (game_state, prefab, properties) {
    "use strict";
    Engine.Script.call(this, game_state, prefab, properties);
};

TiroAoOnibus.HitBus.prototype = Object.create(Engine.Script.prototype);
TiroAoOnibus.HitBus.prototype.constructor = TiroAoOnibus.HitBus;

TiroAoOnibus.HitBus.prototype.hit = function (bus, arrow) {
    "use strict";
    var arrow_prefab;
    this.prefab.kill();
    arrow_prefab = this.game_state.prefabs[arrow.name];
    arrow_prefab.kill();
    this.game_state.score += this.score;
};
