var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.LevelState = function () {
    "use strict";
    Engine.JsonLevelState.call(this);
};

Engine.LevelState.prototype = Object.create(Engine.JsonLevelState.prototype);
Engine.LevelState.prototype.constructor = Engine.LevelState;

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
