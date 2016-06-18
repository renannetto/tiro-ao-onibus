var Engine = Engine || {};

Engine.BitmapTexture = function (game_state, texture_params) {
    "use strict";
    this.texture = game_state.add.bitmapData(texture_params.width, texture_params.height);
    this.texture.ctx.fillStyle = texture_params.color;
    this.texture.ctx.fillRect(0, 0, texture_params.width, texture_params.height);
};
