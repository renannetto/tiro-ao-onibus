var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.ScaleToFit = function (game_state, prefab, properties) {
    "use strict";
    Engine.Script.call(this, game_state, prefab, properties);
};

TiroAoOnibus.ScaleToFit.prototype = Object.create(Engine.Script.prototype);
TiroAoOnibus.ScaleToFit.prototype.constructor = TiroAoOnibus.ScaleToFit;

TiroAoOnibus.ScaleToFit.prototype.init = function () {
    "use strict";
    var scale_x, scale_y;
    scale_x = this.game_state.game.world.width / this.prefab.sprite.width;
    scale_y = this.game_state.game.world.height / this.prefab.sprite.height;
    this.prefab.sprite.scale.setTo(scale_x, scale_y);
};
