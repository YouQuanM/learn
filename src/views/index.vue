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
      a: 12312323423452346,
      b: 123876324,
      val: 'aabbccfddddwesasdssssasdfaaaaaaaassssssaffdsfaas'
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
    }
  }
}
</script>
