<template>

    <el-card class="box-card" shadow="hover">
      <div slot="header" class="user-info">
        <img class="avatar" src="../assets/jilinjpg.jpg" alt="avatar" />
        <div class="text">
          <div class="name">JiLin</div>
          <div class="accsess">超级管理员</div>
        </div>
      </div>
      <div class="login-info">
        <p>上次登陆时间: <span>2023-3-13</span> </p>
        <p>上次登陆地点: <span>成都</span> </p>
      </div>
    </el-card>

</template>
<script>
export default {
  name: "UserCard",
  components: {},
};
</script>
<style lang='less' scoped>
.box-card {
  /*  width: 100%;*/
  min-width: 200px;


  /*userinfo*/
  .user-info{
    display: flex;
    align-items: center;
    gap: 1rem;

    /*昵称和权限*/
    .text{
        line-height: 3rem;

        .name{
            font-size: 2rem;
            font-weight: bold;
        }
        .accsess{
            font-size: 1rem;
            color: #888;
        }
    }
  }
  .user-info:before,
  .user-info:after {
    display: table;
    content: "";
  }
  .user-info:after {
    clear: both;
  }


    /*login-info*/
    .login-info {
        color: #888;
        font-size: 14px;
        span{
            margin-left: 3rem;
            color: #888;
        }
    }

  /*头像*/
  .avatar {
    width: 8vw;
    border-radius: 50%;
  }
}
</style>