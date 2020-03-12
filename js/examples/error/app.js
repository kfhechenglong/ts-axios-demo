"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../src/index"));
index_1.default({
    method: 'get',
    url: '/error/get',
    data: {
        a: 1
    }
}).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
index_1.default({
    method: 'get',
    url: '/error/get1',
    data: {
        a: 1
    }
}).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
index_1.default({
    method: 'get',
    url: '/error/timeout',
    timeout: 2000,
    data: {
        a: 1
    }
}).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err.config);
    console.log(err.message);
});
setTimeout(function () {
    index_1.default({
        method: 'get',
        url: '/error/get',
        data: {
            a: 1
        }
    }).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    });
}, 5000);
