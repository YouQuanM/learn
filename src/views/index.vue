<template>
  <div>
    <span @click="flatten">flatten</span>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      arr: [0, 1, 2, ['a', 'b', ['i']]]
    }
  },
  methods: {
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
    }
  }
}
</script>
