var Engine = Engine || {};

Engine.Animator = function (game_state, prefab, properties) {
    "use strict";
    var property;
    Engine.Component.call(this, game_state, prefab);

    properties.animations.forEach(function (animation) {
        this.prefab.sprite.animations.add(animation.name, animation.frames, animation.fps, animation.loop);
    }, this);
};

Engine.Animator.prototype = Object.create(Engine.Component.prototype);
Engine.Animator.prototype.constructor = Engine.Animator;
