<template>
  <div class="login-main">
    <el-form
      :model="form"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-container"
    >
      <h3 class="login-title">系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
         <el-button type="primary" @click="userLogin">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Mock from "mockjs";
import Cookie from "js-cookie"
export default {
  name: "Login",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods:{
    userLogin(){
        //模拟一个 token
        const token = Mock.Random.guid()
        //存入cookie
        Cookie.set('token',token)
        //跳转到首页
        this.$router.push({name: 'home'})
    }
  }
};
</script>
<style lang='less' scoped>
.login-main {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;

  .login-container{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 350px;
    box-shadow: 0.4px 0.2px 10px #ccc;
    border-radius: 10px;
    padding: 30px;
    justify-content: center;


    .login-title{
        font-size: 1.5rem;
        text-align: center;
    }
  }
}
</style>        