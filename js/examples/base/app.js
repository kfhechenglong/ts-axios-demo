"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../src/index"));
index_1.default({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ['bar', 'baz']
    }
}).then(function (res) {
    console.log(res);
});
index_1.default({
    method: 'get',
    url: '/base/get',
    params: {
        foo: 'baz'
    }
});
var date = new Date();
index_1.default({
    method: 'get',
    url: '/base/get',
    params: {
        date: date
    }
});
index_1.default({
    method: 'get',
    url: '/base/get',
    params: {
        foo: '$ @'
    }
});
index_1.default({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
});
var arr = new Int32Array([21, 32]);
index_1.default({
    method: 'post',
    url: '/base/buffer',
    data: arr
}).then(function (res) {
    console.log(res);
});
index_1.default({
    method: 'post',
    url: '/base/post',
    data: {
        a: 2,
        c: 3
    }
});
index_1.default({
    method: 'post',
    url: '/base/post',
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json, text/plain,*/*'
    },
    data: {
        a: 4,
        b: 5
    }
});
var paramsString = 'q=asdsadASS.DSD=api';
var searchParams = new URLSearchParams(paramsString);
index_1.default({
    method: 'post',
    url: '/base/post',
    data: searchParams
});
