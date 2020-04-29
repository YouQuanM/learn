<template>
  <div>
    <p @click="flatten">flatten</p>
    <p @click="reduce(reduceArr, reduceFun, 4)">reduce</p>
    <p @click="map(mapArr, mapFun)">map</p>
    <p @click="numAddComma(num)">numAddComma</p>
    <p @click="findLongestString(longString)">findLongestString</p>
    <p @click="mathOverAdd(a, b)">mathOverAdd</p>
    <p @click="maxChar(val)">maxChar</p>
    <p @click="findNOfString(200)">findNOfString</p>
    <p @click="parseQueryString('http://liangzhicompany.com/home?yh=1&lyl=2&maj=3')">parseQueryString</p>
    <p @click="plindrome('asdffdsa')">plindrome</p>
    <p @click="titleCase('yIn hanG bAI XUE')">titleCase</p>
    <p @click="findMedianSortedArrays([1,3], [2])">findMedianSortedArrays</p>
    <p @click="arrFunction([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10])">arrFunction</p>
    <p @click="dfs(node)">dfs</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      // arr: [0, 1, 2, ['a', 'b', ['i']]],
      reduceArr: [1, 2, 3, 5],
      mapArr: [2, 4, 6],
      num: 1234567890,
      longString: 'safiowernsdldfnljie2109876543',
      a: 12312323423452346,
      b: 123876324,
      val: 'aabbccfddddwesasdssssasdfaaaaaaaassssssaffdsfaas',
      arr: [],
      long: [],
      short: [],
      nodeArr: [],
      node: {
        id: 1,
        children: [
          {
            id: 2,
            children: [
              {
                id: 3,
                children: []
              },
              {
                id: 4,
                children: []
              }
            ]
          },
          {
            id: 5,
            children: [
              {
                id: 6,
                children: []
              },
              {
                id: 7,
                children: []
              }
            ]
          }
        ]
      }
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
    findLongestString (s) {
        if (s.length === 0) return 0
        let nums = [s[0]];
        let res = 1;
        for (let i = 1; i < s.length; i++) {
            let index = nums.indexOf(s[i]);
            if (index < 0) {
                nums.push(s[i]);
            } else {
                res = res > nums.length ? res : nums.length;
                nums.splice(0, index + 1);
                nums.push(s[i]);
            }
        }
        return res > nums.length ? res : nums.length;
    },
    // 实现超出整数存储范围的两个大正整数相加
    mathOverAdd (a, b) {
      a = a.toString()
      b = b.toString()
      a = a.split('')
      b = b.split('')
      let n1 = a.length
      let n2 = b.length
      for (let i = 0; i < Math.max(n1, n2) - Math.min(n1, n2); i++) {
        if (n1 < n2) a.unshift('0')
        if (n2 < n1) b.unshift('0')
      }
      a.reverse()
      b.reverse()
      let c = Array(a.length).fill(0)
      a.forEach((v, i) => {
        c[i] = parseInt(c[i]) + parseInt(b[i]) + parseInt(v)
        if (c[i] >= 10) {
          c[i + 1] = 1
          c[i] = c[i] - 10
        }
      })
      console.log(c.reverse().join(''))
    },
    // 计算出字符串中出现次数最多的字符是什么，出现了多少次？
    maxChar (val) {
      function foo (str) {
        let r = str.split('').filter((e, i, self) => {
          return self.indexOf(e) === i
        })
        return r
      }
      let arr = foo(val)
      let n = 0
      let char = ''
      arr.forEach(v => {
        let m = val.split(v).length - 1
        if (m > n) {
          n = m
          char = v
        }
      })
      console.log(char, n)
    },
    // "123456789876543212345678987654321..."的第n位是什么
    findNOfString (n) {
      let k = '1234567898765432'
      console.log(k.charAt(n % k.length - 1))
    },
    // 请编写一个 JavaScript 凼数 parseQueryString，它的用途是把 URL 参数解析为一个对象
    parseQueryString (url) {
      let queryStr = url.split('?')[1]
      let queryArr = queryStr.split('&')
      let obj = {}
      queryArr.forEach(v => {
        obj[v.split('=')[0]] = v.split('=')[1]
      })
      console.log(obj)
    },
    // 验证一个字符串是否为回文
    plindrome (str) {
      let str1 = str.replace(/[^A-Z|a-z|0-9]/g, '')
      let arr1 = str1.split('').join('')
      let arr2 = str1.split('').reverse().join('')
      console.log(arr1)
      console.log(arr2)
      if (arr1 === arr2) {
        console.log(true)
      } else {
        console.log(false)
      }
    },
    // 确保字符串的每个单词首字母都大写，其余部分小写
    titleCase (str) {
      let arr = str.toLowerCase().split(' ')
      arr.forEach((v, i) => {
        arr[i] = v[0].toUpperCase() + v.slice(1)
      })
      console.log(arr.join(' '))
    },
    findMedianSortedArrays (nums1, nums2) {
      console.log(new Date().getMilliseconds())
      let long
      let short
      if (nums1.length > nums2.length) {
        long = nums1
        short = nums2
      } else {
        long = nums2
        short = nums1
      }
      if (short.length === 0) {
        this.arr = long
      } else {
        this.funArr(long, short)
      }
      console.log(this.arr)
      if (this.arr.length % 2) {
        console.log(this.arr[(this.arr.length + 1) / 2 - 1])
        console.log(new Date().getMilliseconds())
      } else {
        console.log(((this.arr[(this.arr.length) / 2 - 1]) + (this.arr[(this.arr.length) / 2])) / 2)
        console.log(new Date().getMilliseconds())
      }
    },
    funArr (long, short) {
      let longarr = long
      let shortarr = short
      if (long.length === 0 || short.length === 0) {
        this.arr = [...this.arr, ...longarr, ...shortarr]
      } else {
        if (longarr[0] > shortarr[0]) {
          this.arr.push(shortarr.shift())
        } else {
          this.arr.push(longarr.shift())
        }
        this.funArr(longarr, shortarr)
      }
    },
    // 已知如下数组：
    // var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
    // 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
    arrFunction (arr) {
      Array.from(new Set(arr.flat(Infinity))).sort((a, b) => { return a - b })
    },
    // 深度优先
    dfs (node) {
      if (node !== null) {
        this.nodeArr.push(node.id)
        if (node.children.length !== 0) {
          node.children.forEach(v => {
            this.dfs(v)
          })
        }
      }
      console.log(this.nodeArr)
    },
    // 广度优先
    bfs (node) {
      let trees = []
      let result = []
      trees.push(node)
      while (trees.length) {
        const treeNode = trees.shift()
        result.push(treeNode.id)
        if (treeNode.children.length) {
          treeNode.children.forEach(v => {
            bfs(v)
          })
        }
      }
      console.log(result)
    },
    // 快速排序
    quickSort (arr) {
      if (arr.length <= 1) {
        return arr
      }
      let left = []
      let right = []
      let current = arr.splice(0, 1)
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < current) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
      return this.quickSort(left).concat(current, this.quickSort(right))
    },
    // 冒泡排序
    bubbleSort (arr) {
      if (arr.length === 1) {
        return arr
      } else {
        for (let i = arr.length; i >= 2; i--) {
          for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
          }
        }
        return arr
      }
    },
    // 选择排序
    selectSort (arr) {
      if (arr.length <= 1) {
        return arr
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          if (arr[j] < arr[i]) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
          }
        }
      }
    },
    // 插入排序
    insertSort (arr) {
      if (arr.length <= 1) {
        return arr
      }
      for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
          if (arr[j] < arr[i]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
          } else {
            break
          }
        }
      }
      return arr
    },
    // 爬楼梯问题
    climbStairs (n) {
      if (n <= 2) {
        return n
      }
      return this.climbStairs(n - 1) + this.climbStairs(n - 2)
    },
    // 优化爬楼梯
    climbStairs1 (n, map = new Map()) {
      if (n <= 2) {
        return n
      }
      if (map.get(n)) {
        return map.get(n)
      } else {
        let value = this.climbStairs1(n - 2, map) + this.climbStairs1(n - 1, map)
        map.set(n, value)
        return value
      }
    },
    // 动态规划
    climbStairs2 (n) {
      let result = new Array(n + 1)
      result[1] = 1
      result[2] = 2
      for (let i = 3; i < result.length; i++) {
        result[i] = result[i - 1] + result[i - 2]
      }
      return result[n]
    },
    // 深拷贝
    deepClone (obj, hash = new WeakMap()) {
      if (obj instanceof RegExp) return new RegExp(obj)
      if (obj instanceof Date) return new Date(obj)
      if (obj === null || typeof obj !== 'object') {
        // 如果不是复杂数据类型，直接返回
        return obj
      }
      if (hash.has(obj)) {
        return hash.get(obj)
      }
      // 如果obj是数组，那么obj.constructor 是 [Function: Array]
      // 如果obj是对象，那么obj.constructor 是 [Function: Object]
      let t = new obj.constructor()
      hash.set(obj, t)
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          t[key] = this.deepClone(obj[key], hash)
        }
      }
      return t
    },
    // 柯里化函数
    curring (fn) {
      let args = Array.prototype.slice.call(arguments, 1)
      return function () {
        let newArgs = args.concat(Array.prototype.slice.call(arguments))
        return fn.apply(fn, newArgs)
      }
    },
    // 利用闭包实现module
    CoolModule (id) {
      function test1 () {
        console.log(id)
      }
      return {
        test1: test1
      }
    },
    // 实现call
    myCall (obj, ...arg) {
      let val
      obj._fn_ = this
      val = obj._fn_(...arg)
      delete obj._fn_
      return val
    },
    myApply (obj, arr) {
      let arg = []
      arr.forEach(v => {
        arg.push(arr)
      })
      this.myCall(obj, ...arg)
    },
    myBind (obj, ...arg1) {
      return (...arg2) => {
        return this.myApply(obj, [...arg1, ...arg2])
      }
    },
    // bind实现
    Function.prototype.myBind = function(obj) {
      if (obj === null || obj === undefined) {
        obj = window
      } else {
        obj = Object(obj)
      }
      let _this = this
      let argArr = []
      let arg1 = []
      for (let i =1; i < arguments.length; i++) {
        arg1.push(arguments[i])
        argArr.push('arg1[' + (i-1) + ']')
      }
      return function() {
        let val
        for (let i = 0; i < arguments.length; i++) {
          argArr.push('arguments[' + i +']')
        }
        obj._fn_ = _this
        val = eval('obj._fn_(' + argArr + ')')
        delete obj._fn_
        return val
      }
    }
  }
}
</script>
