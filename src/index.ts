import { AxiosRequestConfig,AxiosPromise, AxiosResponse} from './types/index'
import xhr from './xhr'
import { buildURL } from './holpers/url'
import { transformRequest ,transformResponse} from './holpers/data'
import { processHeaders } from './holpers/headers'
function axios(config: AxiosRequestConfig) :AxiosPromise{
  processConfig(config);
  return xhr(config).then((res) => {
    return transfromResponseData(res)
  });
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

function transfromResponseData(res:any) :AxiosResponse{
  res.data = transformResponse(res.data);
  return res;
}
export default axios
