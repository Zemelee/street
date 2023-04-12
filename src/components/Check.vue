<template>
  <div>
    
      <router-link :to="{ path: '/home/check/apply' }"> <el-button>申请</el-button> </router-link>
    
    -
      <router-link :to="{ path: '/home/check/complain' }"> <el-button>投诉</el-button> </router-link>
    
    <router-view> </router-view>
  
  </div>
</template>

<script>
import ApplyCheck from "./ApplyCheck.vue";
import ComplainCheck from "./ComplainCheck.vue";
import { mapState } from "vuex";
export default {

  components: {
    ApplyCheck,
    ComplainCheck,
  },

 
};
</script>

<style scoped>


</style>