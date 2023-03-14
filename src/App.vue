<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import Main from './views/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
  }
}
</script>

<style lang="less">
body {margin:0; font:12px"\5B8B\4F53",sans-serif;background:#ffffff;} 
div,dl,dt,dd,ul,ol,li,pre,form,fieldset,input,textarea,blockquote,p{padding:0; margin:0;} 
li{list-style-type:none;} 
img{vertical-align:top;border:0;} 
ol,ul {list-style:none;} 
address,cite,code,em,th {font-weight:normal; font-style:normal;} 
</style>
