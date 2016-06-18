var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.ShootArrow = function (game_state, prefab, properties) {
    "use strict";
    Engine.CreatePrefabFromPool.call(this, game_state, prefab, properties);
};

TiroAoOnibus.ShootArrow.prototype = Object.create(Engine.CreatePrefabFromPool.prototype);
TiroAoOnibus.ShootArrow.prototype.constructor = TiroAoOnibus.ShootArrow;

TiroAoOnibus.ShootArrow.prototype.init = function () {
    "use strict";
    Engine.CreatePrefabFromPool.prototype.init.call(this);
    this.game_state.game.input.onDown.add(this.shoot, this);
};

TiroAoOnibus.ShootArrow.prototype.shoot = function () {
    "use strict";
    var arrow;
    arrow = this.create_object(this.prefab.sprite.x, this.prefab.sprite.y);
    arrow.sprite.body.velocity.y = -this.arrow_speed;
};
