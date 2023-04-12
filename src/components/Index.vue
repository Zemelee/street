<template>
  <div>
    <div>
      公告
      <el-carousel height="230px">
        <el-carousel-item v-for="(item, index) in notice" :key="index">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="msg">
            {{ item.msg }}
          </div>
          <div class="time">
            {{ item.time }}
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-divider></el-divider>
    <Result />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Result from "./Result.vue";
export default {
  created() {},
  components: {
    Result,
  },
  mounted() {
    console.log("index:", this.$route.params);
  },
  computed: {
    ...mapState(["notice", "reject", "pass"]),
  },
};
</script>

<style lang="less" scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item {
  color: rgb(71, 86, 105);
  opacity: 0.75;
  margin: 0;
  padding: 10px;
  .title {
    font-weight: 600;
    font-size: 30px;
    color: #000;
  }
  .msg {
    line-height: 40px;
  }
  .time {
    text-align: center;
    position: relative;
    bottom: -110px;
    left: -520px;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>