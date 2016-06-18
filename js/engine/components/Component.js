var Engine = Engine || {};

Engine.Component = function (game_state, prefab) {
    "use strict";
    this.game_state = game_state;
    this.prefab = prefab;
};

Engine.Component.prototype.update = function () {
    "use strict";
};

Engine.Component.prototype.kill = function () {
    "use strict";
};

Engine.Component.prototype.reset = function () {
    "use strict";
};
