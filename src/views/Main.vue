<template>
  <div class="main">
    <el-container>
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <el-container class="main-container">
        <el-header>
          <common-header/>
        </el-header>
        <!-- tags栏 -->
        <common-tags></common-tags>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import CommonTags from '@/components/CommonTags'
export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
    CommonTags,
  },
};
</script>
<style lang='less' scoped>
.main{
  background-color: #EEE;
}
.el-aside {
  overflow: hidden;

}
.el-header{
    padding: 0;
}
.el-main{

}

</style>