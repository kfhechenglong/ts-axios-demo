"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("./code/axios"));
var util_1 = require("./holpers/util");
function createInstance() {
    var context = new axios_1.default();
    var instance = axios_1.default.prototype.request.bind(context);
    util_1.extend(instance, context);
    return instance;
}
var axios = createInstance();
exports.default = axios;
