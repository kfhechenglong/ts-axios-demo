"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../src/index"));
// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })
//
// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })
console.log(index_1.default.get);
index_1.default.get('/extend/get');
index_1.default.options('/extend/options');
index_1.default.delete('/extend/delete');
index_1.default.head('/extend/head');
index_1.default.post('/extend/post', { msg: 'post' });
index_1.default.put('/extend/put', { msg: 'put' });
index_1.default.patch('/extend/patch', { msg: 'patch' });
index_1.default({
    url: '/extend/post',
    method: 'post',
    data: {
        msg: 'hi'
    }
});
index_1.default('/extend/post', {
    method: 'post',
    data: {
        msg: 'hello'
    }
});
// interface ResponseData<T = any> {
//   code: number
//   result: T
//   message: string
// }
// interface User {
//   name: string
//   age: number
// }
// function getUser<T>() {
//   return axios<ResponseData<T>>('/extend/user')
//     .then(res => res.data)
//     .catch(err => console.error(err))
// }
// async function test() {
//   const user = await getUser<User>()
//   if (user) {
//     console.log(user.result.name)
//   }
// }
// test()
