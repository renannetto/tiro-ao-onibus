var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.HUD = function (game, parent) {
    "use strict";
    Phaser.Plugin.call(this, game, parent);
};

Engine.HUD.prototype = Object.create(Phaser.Plugin.prototype);
Engine.HUD.prototype.constructor = Engine.HUD;

Engine.HUD.prototype.init = function (game_state, hud_data) {
    "use strict";
    var camera_width, camera_height, camera_center;
    this.game_state = game_state;
    this.margins = hud_data.margins;
    camera_width = this.game_state.game.camera.width;
    camera_height = this.game_state.game.camera.height;
    camera_center = new Phaser.Point(camera_width / 2, camera_height / 2);
    this.regions = {
        top_left: {
            begin: {x: this.margins.left, y: this.margins.top},
            end: {x: (camera_width / 3) - this.margins.right, y: this.margins.top},
            elements: []
        },
        center_top: {
            begin: {x: (camera_width / 3) + this.margins.left, y: this.margins.top},
            end: {x: (2 * camera_width / 3) - this.margins.right, y: this.margins.top},
            elements: []
        },
        top_right: {
            begin: {x: (2 * camera_width / 3) + this.margins.left, y: this.margins.top},
            end: {x: camera_width - this.margins.right, y: this.margins.top},
            elements: []
        },
        center_right: {
            begin: {x: camera_width - this.margins.right, y: (camera_height / 3) + this.margins.top},
            end: {x: camera_width - this.margins.right, y: (2 * camera_height / 3) + this.margins.top},
            elements: []
        },
        bottom_right: {
            begin: {x: (2 * camera_width / 3) + this.margins.left, y: camera_height - this.margins.bottom},
            end: {x: camera_width - this.margins.right, y: camera_height - this.margins.bottom},
            elements: []
        },
        center_bottom: {
            begin: {x: (camera_width / 3) + this.margins.left, y: camera_height - this.margins.bottom},
            end: {x: (2 * camera_width / 3) - this.margins.right, y: camera_height - this.margins.bottom},
            elements: []
        },
        bottom_left: {
            begin: {x: this.margins.left, y: camera_height - this.margins.bottom},
            end: {x: (camera_width / 3) - this.margins.right, y: camera_height - this.margins.bottom},
            elements: []
        },
        center_left: {
            begin: {x: this.margins.left, y: (camera_height / 3) + this.margins.top},
            end: {x: this.margins.left, y: (2 * camera_height / 3) - this.margins.bottom},
            elements: []
        },
        center: {
            begin: {x: (camera_width / 3) + this.margins.left, y: camera_center.y},
            end: {x: (2 * camera_width / 3) - this.margins.right, y: camera_center.y},
            elements: []
        }
    };

    this.create_elements(hud_data.elements);
};

Engine.HUD.prototype.create_elements = function (elements) {
    "use strict";
    var prefab_name, prefab_parameters, prefab_position, region, prefab, region_name;
    for (prefab_name in elements) {
        if (elements.hasOwnProperty(prefab_name)) {
            prefab_parameters = elements[prefab_name];
            region = this.regions[prefab_parameters.region];
            prefab_position = new Phaser.Point(region.begin.x, region.begin.y);
            prefab = this.game_state.create_prefab(prefab_parameters.type, prefab_name, prefab_position, prefab_parameters.properties);
            region.elements.push(prefab);
        }
    }

    for (region_name in this.regions) {
        if (this.regions.hasOwnProperty(region_name)) {
            this.update_elements_positions(this.regions[region_name]);
        }
    }
};

Engine.HUD.prototype.update_elements_positions = function (region) {
    "use strict";
    var region_dimensions, number_of_elements, step, position;
    region_dimensions = new Phaser.Point(region.end.x - region.begin.x, region.end.y - region.begin.y);
    number_of_elements = region.elements.length;
    if (number_of_elements === 1) {
        region.elements[0].sprite.x = region.begin.x + (region_dimensions.x / 2);
        region.elements[0].sprite.y = region.begin.y + (region_dimensions.y / 2);
    } else if (number_of_elements === 2) {
        region.elements[0].sprite.x = region.begin.x;
        region.elements[0].sprite.y = region.begin.y;
        region.elements[1].sprite.x = region.begin.x;
        region.elements[1].sprite.y = region.begin.y;
    } else if (number_of_elements > 2) {
        step = new Phaser.Point(region_dimensions.x / number_of_elements, region_dimensions.y / number_of_elements);
        position = new Phaser.Point(region.begin.x, region.begin.y);
        region.elements.forEach(function (element) {
            element.sprite.x = position.x;
            element.sprite.y = position.y;
            position.sprite.x += step.x;
            position.sprite.y += step.y;
        }, this);
    }

    region.elements.forEach(function (element) {
        element.fixedToCamera = true;
    }, this);
};
