import axios from '../../src/index';
axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:['bar','baz']
  }
}).then((res) => {
  console.log(res)
});
axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:'baz'
  }
})
const date = new Date()
axios({
  method:'get',
  url:'/base/get',
  params:{
    date
  }
})
axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:'$ @'
  }
})

axios({
  method:'post',
  url:'/base/post',
  data:{
    a:1,
    b:2
  }
})
const arr = new Int32Array([21,32])
axios({
  method:'post',
  url:'/base/buffer',
  data:arr
}).then((res) => {
  console.log(res)
});

axios({
  method:'post',
  url:'/base/post',
  data:{
    a:2,
    c:3
  }
})

axios({
  method:'post',
  url:'/base/post',
  headers:{
    'content-type':'application/json',
    'Accept':'application/json, text/plain,*/*'
  },
  data:{
    a:4,
    b:5
  }
})
const paramsString = 'q=asdsadASS.DSD=api';
const searchParams = new URLSearchParams(paramsString);
axios({
  method:'post',
  url:'/base/post',
  data:searchParams
})
