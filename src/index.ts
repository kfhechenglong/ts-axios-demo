import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './holpers/url'
import { transformRequest } from './holpers/data'
import { processHeaders } from './holpers/headers'
function axios(config: AxiosRequestConfig) {
  processConfig(config);
  xhr(config);
}
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data)
}
export default axios
