var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.ScriptFactory = function (game_state) {
    "use strict";
    Engine.ScriptFactory.call(this, game_state);
    this.scripts = {
        "spawn_car": TiroAoOnibus.SpawnCar.prototype.constructor,
        "scale_to_fit": TiroAoOnibus.ScaleToFit.prototype.constructor,
        "hit_car": TiroAoOnibus.HitCar.prototype.constructor,
        "hit_bus": TiroAoOnibus.HitBus.prototype.constructor,
        "move_car": TiroAoOnibus.MoveCar.prototype.constructor,
        "shoot_arrow": TiroAoOnibus.ShootArrow.prototype.constructor,
        "show_score": TiroAoOnibus.ShowScore.prototype.constructor
    };
};

TiroAoOnibus.ScriptFactory.prototype = Object.create(Engine.ScriptFactory.prototype);
TiroAoOnibus.ScriptFactory.prototype.constructor = TiroAoOnibus.ScriptFactory;
