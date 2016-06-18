var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.LevelState = function () {
    "use strict";
    Engine.JsonLevelState.call(this);
};

Engine.LevelState.prototype = Object.create(Engine.JsonLevelState.prototype);
Engine.LevelState.prototype.constructor = Engine.LevelState;

Engine.LevelState.prototype.init = function (level_data) {
    "use strict";
    Engine.JsonLevelState.prototype.init.call(this, level_data);

    var world_dimensions = this.level_data.world;
    this.game.world.setBounds(world_dimensions.origin_x, world_dimensions.origin_y, world_dimensions.width, world_dimensions.height);
};

Engine.LevelState.prototype.create = function () {
    "use strict";
    Engine.JsonLevelState.prototype.create.call(this);

    var level_prefabs, prefab_name, prefab_parameters;

    level_prefabs = this.level_data.prefabs;
    for (prefab_name in level_prefabs) {
        if (level_prefabs.hasOwnProperty(prefab_name)) {
            prefab_parameters = level_prefabs[prefab_name];
            this.create_prefab(prefab_parameters.type, prefab_name, prefab_parameters.position, prefab_parameters.properties);
        }
    }
};
