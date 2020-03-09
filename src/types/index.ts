export type Method = 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'OPTIONS' | 'options'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url: string,
  method?: Method,
  data?: any,
  params?: any,
  // responseType:XMLHttpRequestResponseType
}

// 定义接口的响应类型
export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any
}
//定义axios返回的promis类型
export interface AxiosPromise extends Promise<AxiosResponse> {

}
