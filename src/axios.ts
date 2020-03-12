import { AxiosInstance } from './types'
import Axios from './code/axios'
import { extend } from './holpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios();
  const instance = Axios.prototype.request.bind(context);
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance();

export default axios;
