<template>
  <el-card class="box-card" shadow="hover">
    <div class="card-container">
      <i class="icon el-icon-success"></i>
      <div class="card-text">
        <p> 1452 </p>
        <p>已完成</p>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "SaleInfoCard",
  components: {},
};
</script>
<style lang='less' scoped>
.box-card {
  box-sizing: border-box;
  width: 30%;
    .card-container{
        display: flex;
        gap: 10px;
        /*图标右侧文字*/
        .card-text{
            align-items: center;
            line-height: 1.5em;
        }
    }
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    line-height: 80px;
    text-align: center;
    border-radius: 1px;
    background-color: purple;
    color: white;
  }
}
</style>