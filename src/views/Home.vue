<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple left">
          <user-card></user-card>
        </div>
        <div class="grid-content bg-purple">
          <user-table-card></user-table-card>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple right">
          <sale-info-card></sale-info-card>
          <sale-info-card></sale-info-card>
          <sale-info-card></sale-info-card>
          <sale-info-card></sale-info-card>
          <sale-info-card></sale-info-card>
          <sale-info-card></sale-info-card>
        </div>
        <div class="graph">
          <el-card class="box-card graph-card" shadow="hover">
            <div ref="echarts1" style="height: 280px">
              
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import UserCard from "@/components/UserCard";
import UserTableCard from "@/components/UserTableCard";
import SaleInfoCard from "@/components/SaleInfoCard";
import * as echarts from "echarts";
import { getData } from "@/api";

export default {
  name: "Home",
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    UserCard,
    UserTableCard,
    SaleInfoCard,
  },
  // 请求数据
  created() {
    getData().then(({ data }) => {
      const { List } = data.data;
      this.tableData = List;
    });
  },
  watch: {
    tableData() {
      // 准备echarts实例并挂载到dom
      const echarts1 = echarts.init(this.$refs.echarts1);
      // 指定图表的配置项
      let option1 = {
        title: {
          text: '销量'
        }
      };
      // 处理数据xAxis
      const xAxis = Object.keys(this.tableData[0]);
      // X轴
      option1.xAxis = {
        data: ['2023/1','2023/2','2023/3','2023/4','2023/5','2023/6'],
      };
      // Y轴
      option1.yAxis = {}
      // 图例
      option1.legend = {
        data: xAxis,
      };
      // 图内容
      option1.series = [];
      xAxis.forEach((key) => {
        option1.series.push({
          name: key,
          data: this.tableData.map(item=>item[key]),
          type: 'line'
        });
      });

      echarts1.setOption(option1)
    },
  },
};
</script>
<style lang='less'>
/*所有卡片间隙*/
.el-card {
  margin-top: 20px;
  box-shadow: 0.5px 0.1px 5px #6666661a;
}
.right {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .graph-card {
    width: 96%;
    height: 30vh;
  }
}
</style>