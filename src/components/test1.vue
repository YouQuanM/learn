<template>
  <div class="test1">
    <button @click="showHide">子组件 show/hide</button>
    <div v-show="showFlag" class="test1-text">我是子组件</div>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      showFlag: true
    }
  },
  created () {
    console.log('子组件 created')
  },
  mounted () {
    console.log('子组件 mounted')
  },
  updated () {
    console.log('子组件 updated')
  },
  methods: {
    showHide () {
      this.showFlag = !this.showFlag
    }
  }
}
</script>
