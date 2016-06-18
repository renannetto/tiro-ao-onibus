var Engine = Engine || {};

Engine.SingleFrameState = function (name, prefab, frame) {
    "use strict";
    Engine.State.call(this, name);
    this.prefab = prefab;
    this.frame = frame;
};

Engine.SingleFrameState.prototype = Object.create(Engine.State.prototype);
Engine.SingleFrameState.prototype.constructor = Engine.SingleFrameState;

Engine.SingleFrameState.prototype.enter = function () {
    "use strict";
    this.prefab.sprite.frame = this.frame;
};

Engine.SingleFrameState.prototype.handle_input = function (command) {
    "use strict";
    return this.name;
};
