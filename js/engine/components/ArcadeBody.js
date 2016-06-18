var Engine = Engine || {};

Engine.ArcadeBody = function (game_state, prefab, properties) {
    "use strict";
    var property;
    Engine.PhysicalBody.call(this, game_state.game.physics.arcade, game_state, prefab, properties);
    this.game_state = game_state;

    if (this.size) {
        this.prefab.sprite.body.setSize(properties.size.width, properties.size.height, properties.size.offset_x, properties.size.offset_y);
    }
};

Engine.ArcadeBody.prototype = Object.create(Engine.PhysicalBody.prototype);
Engine.ArcadeBody.prototype.constructor = Engine.ArcadeBody;

Engine.ArcadeBody.prototype.update = function () {
    "use strict";
    this.collisions.forEach(function (collision) {
        var collision_target, collision_callback, collision_context;
        collision_target = this.game_state[collision.target_type][collision.target];
        if (collision.context && collision.callback) {
            collision_context = this.prefab.scripts[collision.context];
            collision_callback = collision_context[collision.callback];
            this.physics_engine[collision.type](this.prefab.sprite, collision_target, collision_callback, null, collision_context);
        } else {
            this.physics_engine[collision.type](this.prefab.sprite, collision_target);
        }
    }, this);
};
