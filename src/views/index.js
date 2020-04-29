// 按顺序发送3个请求，如何按顺序执行这三个请求的回调
const orderFun1 = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('1')
    }, 3000)
  })
}
const orderFun2 = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('2')
    }, 1000)
  })
}
const orderFun3 = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove('3')
    }, 2000)
  })
}

const backFun1 = (res) => {
  console.log(res)
}
const backFun2 = (res) => {
  console.log(res)
}
const backFun3 = (res) => {
  console.log(res)
}


let funArr = [
  {
    postFun: orderFun1(),
    disposeFun: backFun1()
  },
  {
    postFun: orderFun2(),
    disposeFun: backFun2()
  },
  {
    postFun: orderFun3(),
    disposeFun: backFun3()
  }
]

let disposeFun = () => {
  funArr.forEach(v => {
    
  })
}