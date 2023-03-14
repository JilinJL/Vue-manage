<template>
  <div>

    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#FFF"
      :router="true"
    >
      <h1
        style="
          color: #ffe;
          letter-spacing: 0.2em;
          font-size: 30px;
          padding: 10%;
        "
      >
        随车买
      </h1>
          <!-- 一级菜单 -->
      <el-menu-item
        v-for="item in noChildren"
        :key="item.name"
        :index="item.path"
        @click="selectMenu(item)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu
        v-for="item in hasChildren"
        :key="item.label"
        :index="item.label"
        :router="true"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>

        <el-menu-item
          v-for="child in item.children"
          :key="child.path"
          :index="child.path"
          :router="true"
          @click="selectMenu(child)"
        >
          {{ child.label }}</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectMenu(item) {
      this.$store.dispatch('tab/selectTabs',item)
    },
  },
  computed: {
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    ...mapState("tab", ["isCollapse"]),
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border: none;
  height: 100vh;
  h3,
  h1 {
    color: #fff;
  }
}
</style>