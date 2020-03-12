"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dispatchRequest_1 = __importDefault(require("./dispatchRequest"));
var Axiso = /** @class */ (function () {
    function Axiso() {
    }
    Axiso.prototype.request = function (url, config) {
        if (typeof url === 'string') {
            if (!config) {
                config = {};
            }
            config.url = url;
        }
        else {
            config = url;
        }
        return dispatchRequest_1.default(config);
    };
    Axiso.prototype.get = function (url, config) {
        return this._requestMethodWithoutData('get', url, config);
    };
    Axiso.prototype.delete = function (url, config) {
        return this._requestMethodWithoutData('delete', url, config);
    };
    Axiso.prototype.head = function (url, config) {
        return this._requestMethodWithoutData('head', url, config);
    };
    Axiso.prototype.options = function (url, config) {
        return this._requestMethodWithoutData('options', url, config);
    };
    Axiso.prototype.post = function (url, data, config) {
        return this._requestMethodWithData('post', url, data, config);
    };
    Axiso.prototype.put = function (url, data, config) {
        return this._requestMethodWithData('put', url, data, config);
    };
    Axiso.prototype.patch = function (url, data, config) {
        return this._requestMethodWithData('patch', url, data, config);
    };
    Axiso.prototype._requestMethodWithoutData = function (method, url, config) {
        return this.request(Object.assign(config || {}, method, url));
    };
    Axiso.prototype._requestMethodWithData = function (method, url, data, config) {
        return this.request(Object.assign(config || {}, method, url, data));
    };
    return Axiso;
}());
exports.default = Axiso;
