var Engine = Engine || {};

Engine.AnimationState = function (name, prefab, animation_name) {
    "use strict";
    Engine.State.call(this, name);
    this.prefab = prefab;
    this.animation_name = animation_name;
};

Engine.AnimationState.prototype = Object.create(Engine.State.prototype);
Engine.AnimationState.prototype.constructor = Engine.AnimationState;

Engine.AnimationState.prototype.enter = function () {
    "use strict";
    this.prefab.sprite.animations.play(this.animation_name);
};

Engine.AnimationState.prototype.exit = function () {
    "use strict";
    this.prefab.sprite.animations.stop(this.animation_name);
};

Engine.AnimationState.prototype.handle_input = function (command) {
    "use strict";
    return this.name;
};
