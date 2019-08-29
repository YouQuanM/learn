<template>
  <div>
    <span @click="flatten">flatten</span>
    <span @click="reduce(reduceArr, reduceFun, 4)">reduce</span>
    <span @click="map(mapArr, mapFun)">map</span>
    <span @click="numAddComma(num)">numAddComma</span>
    <span @click="findLongestString(longString)">findLongestString</span>
    <span @click="mathOverAdd(a, b)">mathOverAdd</span>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      arr: [0, 1, 2, ['a', 'b', ['i']]],
      reduceArr: [1, 2, 3, 5],
      mapArr: [2, 4, 6],
      num: 1234567890,
      longString: 'safiowernsdldfnljie2109876543',
      a: 12312323423452341,
      b: 123876324
    }
  },
  methods: {
    // flatten 把嵌套数组的整理为一维数组
    flatten () {
      let newArr = []
      function flattenArr (array) {
        array.forEach(v => {
          if (Array.isArray(v)) { // 如果该元素是个数组
            flattenArr(v)
          } else { // 该元素不是数组
            newArr.push(v)
          }
        })
        return newArr
      }
      console.log(flattenArr(this.arr))
    },
    flatten2 () {
      let arr = this.arr
      return arr.reduce(function (initArr, currentArr) {
        return initArr.concat(Array.isArray(currentArr) ? this.flatten2(currentArr) : currentArr)
      }, [])
    },
    // reduce 实现数组数据累加
    // 三个参数，分别为累加的数据（数组），累加方法（操作），memo（初始值）
    reduce (reduceArr, fun, memo) {
      reduceArr.forEach(v => {
        memo = fun(memo, v)
      })
      console.log(memo)
    },
    reduceFun (memo, num) {
      return memo * num
    },
    // map
    map (mapArr, mapFun) {
      mapArr.forEach((v, i) => {
        mapArr[i] = mapFun(v)
      })
      console.log(mapArr)
    },
    mapFun (num) {
      return num * 3
    },
    // 实现对一串数字，每三位加一个逗号
    numAddComma (num) {
      let arr = []
      function dispose (n) {
        if (n.length > 3) {
          arr.unshift(n.slice(-3))
          dispose(n.slice(0, -3))
        } else {
          arr.unshift(n)
        }
      }
      if (num === null) {
        return false
      } else {
        let n = parseInt(num).toString()
        dispose(n)
      }
      console.log(arr.join(','))
    },
    // 给定一个字符串，找出其中无重复字符的最长子字符串
    findLongestString (val) {
      let arr = []
      let longestArr = []
      let valArr = val.split('')
      valArr.forEach(v => {
        if (arr.includes(v)) {
          arr = []
        } else {
          arr.push(v)
          if (arr.length > longestArr.length) {
            longestArr = arr
          }
        }
      })
      console.log(longestArr.join(''))
    },
    // 实现超出整数存储范围的两个大正整数相加
    mathOverAdd (a, b) {
      a = a.toString()
      b = b.toString()
      let n1 = a.length
      let n2 = b.length
      for (let i = 0; i < Math.max(n1, n2) - Math.min(n1, n2); i++) {
        if (a < b) a = '0' + a
        if (b < a) b = '0' + b
      }
      a = a.split('').reverse()
      b = b.split('').reverse()
      let c = Array(a.length).fill(0)
      a.forEach((v, i) => {
        c[i] = c[i] + b[i] + v
        if (c[i] > 10) {
          c[i + 1] = 1
          c[i] = c[i] - 10
        }
      })
      console.log(c)
      console.log(c.reverse().join('').toString())
    }
  }
}
</script>
