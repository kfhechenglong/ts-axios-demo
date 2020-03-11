import axios from '../../src/index';
axios({
  method:'get',
  url:'/error/get',
  data:{
    a:1
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
});

axios({
  method:'get',
  url:'/error/get1',
  data:{
    a:1
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
});

axios({
  method:'get',
  url:'/error/timeout',
  timeout:2000,
  data:{
    a:1
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
});

setTimeout(() => {
  axios({
    method:'get',
    url:'/error/get',
    data:{
      a:1
    }
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  });
},5000)
