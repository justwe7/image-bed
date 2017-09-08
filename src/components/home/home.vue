<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  name: 'hello',
  data() {
    return {
      msg: '主页'
    }
  },
  created() {
    axios.get(
     'http://result.eolinker.com/Xtsy7hRafdea1c8d860059674c8da6c62573883e1ef7917?uri=/assment/get-doctor',{
        params: {
          weixinid: 2
        }
      }).then(function (response) {
      console.log(response)

    }).catch(function (error) {
      console.log(9)
    });
  }
}
</script>

<!-- scoped添加私有样式  lang添加babel编译  rel添加IDE识别 -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
