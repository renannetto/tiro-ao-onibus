var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.Prefab = function (game_state, name, sprite) {
    "use strict";
    this.game_state = game_state;
    this.sprite = sprite;
    this.sprite.name = name;
    this.scripts = {};
    this.components = {};

    this.game_state.prefabs[name] = this;
};

Engine.Prefab.prototype.init = function () {
    "use strict";
    var script_name;
    for (script_name in this.scripts) {
        if (this.scripts.hasOwnProperty(script_name)) {
            this.scripts[script_name].init();
        }
    }
};

Engine.Prefab.prototype.update = function () {
    "use strict";
    var component_name, script_name;
    for (component_name in this.components) {
        if (this.components.hasOwnProperty(component_name)) {
            this.components[component_name].update();
        }
    }

    for (script_name in this.scripts) {
        if (this.scripts.hasOwnProperty(script_name)) {
            this.scripts[script_name].update();
        }
    }
};

Engine.Prefab.prototype.kill = function () {
    "use strict";
    var script_name;
    this.sprite.kill();

    for (script_name in this.scripts) {
        if (this.scripts.hasOwnProperty(script_name)) {
            this.scripts[script_name].kill();
        }
    }
};

Engine.Prefab.prototype.reset = function (position_x, position_y) {
    "use strict";
    var script_name;
    this.sprite.reset(position_x, position_y);

    for (script_name in this.scripts) {
        if (this.scripts.hasOwnProperty(script_name)) {
            this.scripts[script_name].reset();
        }
    }
};
