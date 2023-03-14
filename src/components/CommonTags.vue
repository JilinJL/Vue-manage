<template>
  <div>
    <el-tag 
    v-for="tag in tabsList" 
    :key="tag.path" 
    :closable="tag.name!=='home'" 
    :effect="$route.name === tag.name ? 'dark':'plain'"
    @click="changeTag(tag)"
    @close="closeTag(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "CommonTags",
  data() {
    return {};
  },
  computed: {
    ...mapState("tab", ["tabsList"]),
  },
  methods: {
    changeTag(item){
        this.$router.push({name: item.name})
    },
    closeTag(item){
        console.log(item)
    }   
  }

};
</script>
<style lang='less' scoped>
.el-tag{
    margin: 5px;
}
</style>