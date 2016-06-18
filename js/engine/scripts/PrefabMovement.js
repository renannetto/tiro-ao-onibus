var Engine = Engine || {};

Engine.PrefabMovement = function (game_state, prefab, properties) {
    "use strict";
    Engine.Script.call(this, game_state, prefab, properties);

    this.direction = [{"x": 0, "y": 1}, {"x": -1, "y": 0}, {"x": 1, "y": 0}, {"x": 0, "y": -1}, {"x": 0, "y": 1}];
};

Engine.PrefabMovement.prototype = Object.create(Engine.Script.prototype);
Engine.PrefabMovement.prototype.constructor = Engine.PrefabMovement;

Engine.PrefabMovement.prototype.move = function (facing, speed) {
    "use strict";
    this.prefab.sprite.body.velocity.x = this.direction[facing].x * speed;
    this.prefab.sprite.body.velocity.y = this.direction[facing].y * speed;
};
