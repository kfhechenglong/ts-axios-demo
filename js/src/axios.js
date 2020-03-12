"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var xhr_1 = __importDefault(require("./xhr"));
var url_1 = require("./holpers/url");
var data_1 = require("./holpers/data");
var headers_1 = require("./holpers/headers");
function axios(config) {
    processConfig(config);
    return xhr_1.default(config).then(function (res) {
        return transfromResponseData(res);
    });
}
function processConfig(config) {
    config.url = transformURL(config);
    config.headers = transformHeaders(config);
    config.data = transformRequestData(config);
}
function transformURL(config) {
    var url = config.url, params = config.params;
    return url_1.buildURL(url, params);
}
function transformRequestData(config) {
    return data_1.transformRequest(config.data);
}
function transformHeaders(config) {
    var _a = config.headers, headers = _a === void 0 ? {} : _a, data = config.data;
    return headers_1.processHeaders(headers, data);
}
function transfromResponseData(res) {
    res.data = data_1.transformResponse(res.data);
    return res;
}
exports.default = axios;
