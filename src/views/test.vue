<template>
  <div class="test">
    <button @click="showHide">test show/hide</button>
    <div v-show="showFlag" class="test-text">
      我是test
      <test-component></test-component>
    </div>
  </div>
</template>

<script>
import TestComponent from '@/components/test1'
export default {
  name: 'test1',
  components: {TestComponent},
  data () {
    return {
      showFlag: true
    }
  },
  created () {
    console.log('父组件 created')
  },
  mounted () {
    console.log('父组件 mounted')
  },
  updated () {
    console.log('父组件 updated')
  },
  methods: {
    showHide () {
      this.showFlag = !this.showFlag
    }
  }
}
</script>
