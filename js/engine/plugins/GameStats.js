var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.GameStats = function (game, parent) {
    "use strict";
    Phaser.Plugin.call(this, game, parent);
};

Engine.GameStats.prototype = Object.create(Phaser.Plugin.prototype);
Engine.GameStats.prototype.constructor = Engine.GameStats;

Engine.GameStats.prototype.init = function (game_state, game_stats_data) {
    "use strict";
    this.game_stats = game_stats_data.game_stats;
    this.listeners = game_stats_data.listeners;
};

Engine.GameStats.prototype.listen_to_events = function (groups) {
    "use strict";
    this.listeners.forEach(function (listener) {
        groups[listener.group].forEach(function (sprite) {
            sprite.events[listener.signal].add(this.save_stat, this, 0, listener.stat_name, listener.value);
        }, this);
    }, this);
};

Engine.GameStats.prototype.save_stat = function (sprite, stat_name, value) {
    "use strict";
    this.game_stats[stat_name].value += value;
};

Engine.GameStats.prototype.show_stats = function (game_state) {
    "use strict";
    var position, game_stat, game_stat_text;
    for (game_stat in this.game_stats) {
        if (this.game_stats.hasOwnProperty(game_stat)) {
            game_stat_text = game_state.create_prefab(this.game_stats[game_stat].prefab, game_stat,
                                                           this.game_stats[game_stat].position,
                                                           this.game_stats[game_stat].properties);
            game_stat_text.sprite.text = this.game_stats[game_stat].text + this.game_stats[game_stat].value;
        }
    }
};
