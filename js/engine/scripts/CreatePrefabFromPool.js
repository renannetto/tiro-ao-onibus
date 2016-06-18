var Engine = Engine || {};

Engine.CreatePrefabFromPool = function (game_state, prefab, properties) {
    "use strict";
    Engine.Script.call(this, game_state, prefab, properties);
};

Engine.CreatePrefabFromPool.prototype = Object.create(Engine.Script.prototype);
Engine.CreatePrefabFromPool.prototype.constructor = Engine.CreatePrefabFromPool;

Engine.CreatePrefabFromPool.prototype.init = function () {
    "use strict";
    this.prefab_parameters = JSON.parse(this.game_state.cache.getText(this.prefab_to_create));

    this.created_prefabs = 0;
};

Engine.CreatePrefabFromPool.prototype.create_object = function (position_x, position_y) {
    "use strict";
    var prefab_sprite, prefab, prefab_name, position;

    prefab_sprite = this.game_state.groups[this.pool].getFirstDead();
    if (!prefab_sprite) {
        prefab_name = this.prefab.sprite.name + "_created_" + this.created_prefabs;
        this.created_prefabs += 1;
        position = {"x": position_x, "y": position_y};
        prefab = this.game_state.prefab_factory.create_prefab(prefab_name, position, this.prefab_parameters);
    } else {
        prefab = this.game_state.prefabs[prefab_sprite.name];
        prefab.reset(position_x, position_y);
    }

    return prefab;
};
