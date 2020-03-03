"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var xhr_1 = __importDefault(require("./xhr"));
var url_1 = require("./holpers/url");
function axios(config) {
    processConfig(config);
    xhr_1.default(config);
}
function processConfig(config) {
    config.url = transformURL(config);
}
function transformURL(config) {
    var url = config.url, params = config.params;
    return url_1.buildURL(url, params);
}
exports.default = axios;
