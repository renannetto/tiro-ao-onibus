var Engine = Engine || {};

Engine.Script = function (game_state, prefab, properties) {
    "use strict";
    var property;
    this.game_state = game_state;
    this.prefab = prefab;
    for (property in properties) {
        if (properties.hasOwnProperty(property)) {
            this[property] = properties[property];
        }
    }
};

Engine.Script.prototype.init = function () {
    "use strict";
};

Engine.Script.prototype.update = function () {
    "use strict";
};

Engine.Script.prototype.kill = function () {
    "use strict";
};

Engine.Script.prototype.reset = function () {
    "use strict";
};
