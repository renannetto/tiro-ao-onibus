var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.HitCar = function (game_state, prefab, properties) {
    "use strict";
    Engine.Script.call(this, game_state, prefab, properties);
};

TiroAoOnibus.HitCar.prototype = Object.create(Engine.Script.prototype);
TiroAoOnibus.HitCar.prototype.constructor = TiroAoOnibus.HitCar;

TiroAoOnibus.HitCar.prototype.init = function () {
    "use strict";
    //this.prefab.sprite.frame = this.game_state.game.rnd.between(0, this.number_of_frames);
};

TiroAoOnibus.HitCar.prototype.reset = function () {
    "use strict";
    //this.prefab.sprite.frame = this.game_state.game.rnd.between(0, this.number_of_frames);
};

TiroAoOnibus.HitCar.prototype.hit = function (car, arrow) {
    "use strict";
    var arrow_prefab;
    this.prefab.kill();
    arrow_prefab = this.game_state.prefabs[arrow.name];
    arrow_prefab.kill();
    this.game_state.game_over();
};
