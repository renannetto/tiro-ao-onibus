var Engine = Engine || {};

Engine.PhysicalBody = function (physics_engine, game_state, prefab, properties) {
    "use strict";
    var property;
    Engine.Component.call(this, game_state, prefab);

    this.physics_engine = physics_engine;
    this.physics_engine.enable(this.prefab.sprite);

    for (property in properties) {
        if (properties.hasOwnProperty(property)) {
            if (properties[property].constructor === Array || properties[property].constructor === Object) {
                this[property] = properties[property];
            } else {
                this.prefab.sprite.body[property] = properties[property];
            }
        }
    }
};

Engine.PhysicalBody.prototype = Object.create(Engine.Component.prototype);
Engine.PhysicalBody.prototype.constructor = Engine.PhysicalBody;
