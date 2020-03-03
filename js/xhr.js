"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function xhr(config) {
    var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b;
    var request = new XMLHttpRequest();
    request.open(method.toLocaleUpperCase(), url, true);
    request.send(data);
}
exports.default = xhr;
