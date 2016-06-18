var Phaser = Phaser || {};
var Engine = Engine || {};

Engine.SpriteFactory = function (game_state) {
    "use strict";
    this.game_state = game_state;

    this.textures = {
        "asset_key": Engine.AssetKeyTexture.prototype.constructor,
        "bitmap": Engine.BitmapTexture.prototype.constructor
    };

    this.bodies = {
        "arcade": this.load_arcade_body,
        "p2": this.load_p2_body
    };
};

Engine.SpriteFactory.prototype.create_sprite = function (position, params) {
    "use strict";
    var sprite, texture, property, body_property;
    switch (params.type) {
    case "sprite":
        texture = new this.textures[params.texture.type](this.game_state, params.texture).texture;
        sprite = new Phaser.Sprite(this.game_state.game, position.x, position.y, texture, params.frame);
        break;
    case "tilesprite":
        texture = new this.textures[params.texture.type](this.game_state, params.texture).texture;
        sprite = new Phaser.TileSprite(this.game_state.game, position.x, position.y, params.width, params.height, texture, params.frame);
        break;
    case "text":
        sprite = new Phaser.Text(this.game_state.game, position.x, position.y, params.text, params.style);
        break;
    }

    if (params.group) {
        this.game_state.groups[params.group].add(sprite);
    } else {
        this.game_state.game.add.existing(sprite);
    }

    if (params.body) {
        this.bodies[params.body.physics].call(this, sprite, params.body);
    }

    for (property in params.properties) {
        if (params.properties.hasOwnProperty(property)) {
            if (property === "anchor") {
                sprite.anchor.setTo(params.properties[property].x, params.properties[property].y);
            } else if (property === "scale") {
                sprite.scale.setTo(params.properties[property].x, params.properties[property].y);
            } else {
                sprite[property] = params.properties[property];
            }
        }
    }

    return sprite;
};

Engine.SpriteFactory.prototype.load_body = function (sprite, body_data) {
    "use strict";
    var body_property;
    this.game_state.game.physics[body_data.physics].enable(sprite);

    for (body_property in body_data.properties) {
        if (body_data.properties.hasOwnProperty(body_property)) {
            sprite.body[body_property] = body_data.properties[body_property];
        }
    }
};

Engine.SpriteFactory.prototype.load_arcade_body = function (sprite, body_data) {
    "use strict";
    this.load_body(sprite, body_data);
};

Engine.SpriteFactory.prototype.load_p2_body = function (sprite, body_data) {
    "use strict";
    var collidable_groups;
    this.load_body(sprite, body_data);
    sprite.body.setCollisionGroup(this.game_state.collision_groups[body_data.collision_group]);
    collidable_groups = [];
    body_data.collides.forEach(function (collision_group) {
        collidable_groups.push(this.game_state.collision_groups[collision_group]);
    }, this);
    sprite.body.collides(collidable_groups);
};
