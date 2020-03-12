"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var headers_1 = require("./holpers/headers");
var error_1 = require("./holpers/error");
function xhr(config) {
    return new Promise(function (resolve, reject) {
        var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b, headers = config.headers, responseType = config.responseType, timeout = config.timeout;
        var request = new XMLHttpRequest();
        if (responseType) {
            request.responseType = responseType;
        }
        if (timeout) {
            request.timeout = timeout;
        }
        request.open(method.toLocaleUpperCase(), url, true);
        request.onreadystatechange = function handleLoad() {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 0) {
                return;
            }
            var responseHeaders = headers_1.parseHeaders(request.getAllResponseHeaders());
            var responseData = responseType !== 'text' ? request.response : request.responseText;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            handleResponse(response);
        };
        // 处理错误的事件
        request.onerror = function handleError() {
            reject(error_1.createError('Network Error', config, null, request));
        };
        // 处理超时
        request.ontimeout = function handleTimeout() {
            reject(error_1.createError("Timeout of " + timeout + " ms exceeded", config, 'ECONNABORTED', request));
        };
        Object.keys(headers).forEach(function (name) {
            if (data === null && name.toLocaleLowerCase() === 'content-type') {
                delete headers[name];
            }
            else {
                request.setRequestHeader(name, headers[name]);
            }
        });
        request.send(data);
        // 处理状态不在200-300之间的情况
        function handleResponse(response) {
            if (response.status >= 200 && response.status < 300) {
                resolve(response);
            }
            else {
                reject(error_1.createError("Request failed with status code " + response.status, config, null, request, response));
            }
        }
    });
}
exports.default = xhr;
