import axios from '../../src/index';
axios({
  method:'get',
  url:'/base/get',
  params:{
    foo:['bar','baz']
  }
})
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
})
