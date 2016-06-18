var Engine = Engine || {};

Engine.StateMachine = function () {
    "use strict";
    this.states = {};
};

Engine.StateMachine.prototype.add_state = function (state_name, state) {
    "use strict";
    this.states[state_name] = state;
};

Engine.StateMachine.prototype.set_initial_state = function (state_name) {
    "use strict";
    this.current_state = this.states[state_name];
};

Engine.StateMachine.prototype.handle_input = function (command) {
    "use strict";
    var next_state;
    next_state = this.current_state.handle_input(command);
    if (next_state && next_state !== this.current_state.name) {
        this.current_state.exit();
        this.current_state = this.states[next_state];
        this.current_state.enter();
    }
};
