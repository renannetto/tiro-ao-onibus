var Engine = Engine || {};
var TiroAoOnibus = TiroAoOnibus || {};

TiroAoOnibus.ScriptFactory = function (game_state) {
    "use strict";
    Engine.ScriptFactory.call(this, game_state);
    this.scripts = {

    };
};

TiroAoOnibus.ScriptFactory.prototype = Object.create(Engine.ScriptFactory.prototype);
TiroAoOnibus.ScriptFactory.prototype.constructor = TiroAoOnibus.ScriptFactory;
