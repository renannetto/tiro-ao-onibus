var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.SpawnPrefab = function (game_state, prefab, properties) {
    "use strict";
    Engine.CreatePrefabFromPool.call(this, game_state, prefab, properties);
};

Engine.SpawnPrefab.prototype = Object.create(Engine.CreatePrefabFromPool.prototype);
Engine.SpawnPrefab.prototype.constructor = Engine.SpawnPrefab;

Engine.SpawnPrefab.prototype.init = function () {
    "use strict";
    this.spawn_timer = this.game_state.game.time.create();
    this.spawn_timer.loop(Phaser.Timer.SECOND * this.spawn_interval, this.spawn_object, this);
    this.spawn_timer.start();
};

Engine.SpawnPrefab.prototype.reset = function () {
    "use strict";
    this.spawn_timer.start();
};

Engine.SpawnPrefab.prototype.kill = function () {
    "use strict";
    this.spawn_timer.stop();
};
