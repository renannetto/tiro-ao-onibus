var Engine = Engine || {};

Engine.ScriptFactory = function (game_state) {
    "use strict";
    this.game_state = game_state;
    this.scripts = {
    };
};

Engine.ScriptFactory.prototype.create_script = function (prefab, script_name, script_properties) {
    "use strict";
    if (this.scripts[script_name]) {
        var script = new this.scripts[script_name](this.game_state, prefab, script_properties);
        return script;
    }
};
