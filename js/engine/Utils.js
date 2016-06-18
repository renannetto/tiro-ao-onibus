var Engine = Engine || {};

Engine.get_landscape_dimensions = function (max_width, max_height) {
    "use strict";
    var window_width, window_height, landscape_width, landscape_height, width_ratio, height_ratio;

    window_width = window.innerWidth * window.devicePixelRatio;
    window_height = window.innerHeight * window.devicePixelRatio;

    landscape_width = Math.max(window_width, window_height);
    landscape_height = Math.min(window_width, window_height);

    if (landscape_width > max_width) {
        width_ratio = max_width / landscape_width;
        landscape_width *= width_ratio;
        landscape_height *= width_ratio;
    }

    if (landscape_height > max_height) {
        height_ratio = max_height / landscape_height;
        landscape_width *= height_ratio;
        landscape_height *= height_ratio;
    }

    return {width: landscape_width, height: landscape_height};
};
