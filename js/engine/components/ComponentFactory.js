var Engine = Engine || {};

Engine.ComponentFactory = function (game_state) {
    "use strict";
    this.game_state = game_state;
    this.components = {
        arcade_body: Engine.ArcadeBody.prototype.constructor,
        "animator": Engine.Animator.prototype.constructor
    };
};

Engine.ComponentFactory.prototype.create_component = function (prefab, component_name, component_properties) {
    "use strict";
    if (this.components[component_name]) {
        var component = new this.components[component_name](this.game_state, prefab, component_properties);
        return component;
    }
};
