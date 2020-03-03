"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
// 定义encode
function encode(val) {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/ig, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/ig, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/ig, '[')
        .replace(/%5D/ig, ']');
}
function buildURL(url, params) {
    if (!params) {
        return url;
    }
    var parts = [];
    Object.keys(params).forEach(function (key) {
        var val = params[key];
        if (val === null || val === undefined) {
            return;
        }
        var values = [];
        if (Array.isArray(val)) {
            values = val;
            key += '[]';
        }
        else {
            values = [val];
        }
        values.forEach(function (val) {
            if (util_1.isDate(val)) {
                val = val.toISOString();
            }
            else if (util_1.isObject(val)) {
                val = JSON.stringify(val);
            }
            parts.push(encode(key) + "=" + encode(val));
        });
    });
    var sericlizedParams = parts.join('&');
    if (sericlizedParams) {
        var markIndex = url.indexOf('#');
        if (markIndex !== -1) {
            url = url.slice(0, markIndex);
        }
        url += (url.indexOf('?') !== -1 ? '?' : '&') + sericlizedParams;
    }
    return url;
}
exports.buildURL = buildURL;
