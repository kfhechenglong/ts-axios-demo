import { AxiosRequestConfig ,AxiosPromise, AxiosResponse} from './types/index'
import {parseHeaders} from './holpers/headers'
import {createError} from './holpers/error'
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve,reject) => {
    const { data = null, url, method = 'get' ,headers,responseType,timeout} = config;
    const request = new XMLHttpRequest();
    if(responseType) {
      request.responseType = responseType;
    }

    if(timeout) {
      request.timeout = timeout;
    }

    request.open(method.toLocaleUpperCase(), url, true);

    request.onreadystatechange = function handleLoad () {
      if(request.readyState !== 4) {
        return ;
      }
      if(request.status === 0) {
        return ;
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData = responseType !== 'text' ? request.response : request.responseText;
      const response :AxiosResponse = {
        data:responseData,
        status:request.status,
        statusText:request.statusText,
        headers:responseHeaders,
        config,
        request
      };
      handleResponse(response);
    }
    // 处理错误的事件
    request.onerror = function handleError() {
      reject(createError('Network Error',config,null,request))
    }
    // 处理超时
    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${timeout} ms exceeded`,config,'ECONNABORTED',request))
    }

    Object.keys(headers).forEach((name) => {
      if(data === null && name.toLocaleLowerCase() === 'content-type') {
        delete headers[name];
      } else {
        request.setRequestHeader(name,headers[name]);
      }
    })

    request.send(data);
    // 处理状态不在200-300之间的情况
    function handleResponse(response:AxiosResponse) :any {
      if(response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(createError(`Request failed with status code ${response.status}`,config,null,request,response))
      }
    }
  })

}
