<template>
  <div>
    <div class="main">
      <div class="parent">
        <div class="child">
          垂直居中是布局中十分常见的效果之一垂直居中是布局中十分常见的效果之一垂直居中是布局中十分常见的效果之一垂直居中是布局中十分常见的效果之一
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.parent {
  width: 500px;
  height: 500px;
  background: #111;
  display: table;
  text-align: center;
}
.child {
  width: 100px;
  height: 100px;
  background: #666;
  display: table-cell;
  vertical-align: center;
}
</style>
