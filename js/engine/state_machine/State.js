var Engine = Engine || {};

Engine.State = function (name) {
    "use strict";
    this.name = name;
};

Engine.State.prototype.enter = function () {
    "use strict";
};

Engine.State.prototype.exit = function () {
    "use strict";
};

Engine.State.prototype.handle_input = function (command) {
    "use strict";
    return this.name;
};
