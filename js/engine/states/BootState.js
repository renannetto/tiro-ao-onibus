var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.BootState = function () {
    "use strict";
    Phaser.State.call(this);
};

Engine.BootState.prototype = Object.create(Phaser.State.prototype);
Engine.BootState.prototype.constructor = Engine.BootState;

Engine.BootState.prototype.init = function (next_state, level_file, extra_parameters) {
    "use strict";
    this.next_state = next_state;
    this.level_file = level_file;
    this.extra_parameters = extra_parameters;
};

Engine.BootState.prototype.preload = function () {
    "use strict";
    this.load.text("level1", this.level_file);
};

Engine.BootState.prototype.create = function () {
    "use strict";
    var level_text, level_data;
    level_text = this.game.cache.getText("level1");
    level_data = JSON.parse(level_text);
    this.game.state.start("LoadingState", true, false, this.next_state, level_data, this.extra_parameters);
};
