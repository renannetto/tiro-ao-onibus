var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.LoadingState = function () {
    "use strict";
    Phaser.State.call(this);
};

Engine.LoadingState.prototype = Object.create(Phaser.State.prototype);
Engine.LoadingState.prototype.constructor = Engine.LoadingState;

Engine.LoadingState.prototype.init = function (next_state, level_data, extra_parameters) {
    "use strict";
    this.next_state = next_state;
    this.level_data = level_data;
    this.extra_parameters = extra_parameters;
};

Engine.LoadingState.prototype.preload = function () {
    "use strict";
    var assets, asset_loader, asset_key, asset;
    assets = this.level_data.assets;
    asset_loader = new Engine.AssetLoader(this);
    for (asset_key in assets) {
        if (assets.hasOwnProperty(asset_key)) {
            asset = assets[asset_key];
            asset_loader.load_asset(asset_key, asset);
        }
    }

    if (this.level_data.user_input) {
        this.load.text("user_input", this.level_data.user_input);
    }
};

Engine.LoadingState.prototype.create = function () {
    "use strict";
    this.game.state.start(this.next_state, true, false, this.level_data, this.extra_parameters);
};
