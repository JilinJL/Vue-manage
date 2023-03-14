<template>
  <div class="header">
    <div class="l-content">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="small"
      ></el-button>
      <!-- 面包屑 -->
      <span class="text">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item 
          v-for="item in tabsList" 
          :key="item.path" 
          :to="{ path: item.path }"
          :style="{color: 'white'}"
          >
          {{ item.label }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="avatar" src="../assets/jilinjpg.jpg" alt="头像" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("tab", ["tabsList"]),
  },
  methods: {
    handleMenu() {
      this.$store.dispatch("tab/collapseMenu");
    },
  },
};
</script>
<style lang='less' scoped>
.header {
  padding: 0 20px;
  background-color: #2e2d2d;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*面包屑*/
  .text {
    color: white;
    font-size: 14px;
    margin-left: 10px;
  }
  /*左侧*/
  .l-content {
    display: flex;
    align-items: center;
  }
  /*右侧*/
  .r-content {
    /*头像*/
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>