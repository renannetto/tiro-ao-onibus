var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.MoveCar = function (game_state, prefab, properties) {
    "use strict";
    Engine.Script.call(this, game_state, prefab, properties);
};

TiroAoOnibus.MoveCar.prototype = Object.create(Engine.Script.prototype);
TiroAoOnibus.MoveCar.prototype.constructor = TiroAoOnibus.MoveCar;

TiroAoOnibus.MoveCar.prototype.init = function () {
    "use strict";
    this.prefab.sprite.checkOutOfBounds = true;
    this.prefab.sprite.outOfBoundsKill = true;
};

TiroAoOnibus.MoveCar.prototype.update = function () {
    "use strict";
    this.prefab.sprite.body.velocity.x = this.speed;
};
