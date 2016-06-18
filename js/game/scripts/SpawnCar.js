var Phaser = Phaser || {};
var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.SpawnCar = function (game_state, prefab, properties) {
    "use strict";
    Engine.CreatePrefabFromPool.call(this, game_state, prefab, properties);
};

TiroAoOnibus.SpawnCar.prototype = Object.create(Engine.CreatePrefabFromPool.prototype);
TiroAoOnibus.SpawnCar.prototype.constructor = TiroAoOnibus.SpawnCar;

TiroAoOnibus.SpawnCar.prototype.init = function () {
    "use strict";
    Engine.CreatePrefabFromPool.prototype.init.call(this);
    this.spawn_timer = this.game_state.game.time.create(false);
    this.schedule_next_spawn();
    this.spawn_timer.start();
};

TiroAoOnibus.SpawnCar.prototype.schedule_next_spawn = function () {
    "use strict";
    var delay;
    delay = this.game_state.game.rnd.between(this.spawn_interval.min, this.spawn_interval.max);
    this.spawn_timer.add(Phaser.Timer.SECOND * delay, this.spawn, this);
};

TiroAoOnibus.SpawnCar.prototype.spawn = function () {
    "use strict";
    var random_number;
    random_number = this.game_state.game.rnd.frac();
    this.prefab_to_create = (random_number < this.bus_probability) ? this.bus_prefab : this.car_prefab;
    this.prefab_parameters = JSON.parse(this.game_state.cache.getText(this.prefab_to_create));
    this.create_object(0, this.prefab.sprite.y);
    this.schedule_next_spawn();
};
