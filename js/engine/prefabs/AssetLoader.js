var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.AssetLoader = function (game_state) {
    "use strict";
    this.game_state = game_state;
};

Engine.AssetLoader.prototype.load_asset = function (asset_key, asset) {
    "use strict";
    switch (asset.type) {
    case "image":
        this.game_state.load.image(asset_key, asset.source);
        break;
    case "spritesheet":
        this.game_state.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height, asset.frames, asset.margin, asset.spacing);
        break;
    case "audio":
        this.game_state.load.audio(asset_key, asset.source);
        break;
    case "tilemap":
        this.game_state.load.tilemap(asset_key, asset.source, null, Phaser.Tilemap.TILED_JSON);
        break;
    case "prefab":
        this.game_state.load.text(asset_key, asset.source);
        break;
    }
};
