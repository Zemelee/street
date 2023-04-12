<template>
  <div>
    <el-divider></el-divider>
    <el-card v-for="(item, index) in complain" :key="index">
      <el-descriptions :column="4" :title="item.id.toString()">
        <el-descriptions-item label="姓名">
          {{ item?.self.name }}
        </el-descriptions-item>
        <el-descriptions-item label="电话">
          {{ item?.self?.phone }}
        </el-descriptions-item>
        <el-descriptions-item label="投诉摊点">
          {{ item.location }}
        </el-descriptions-item>
        <el-descriptions-item label="投诉商品">
          <span v-for="(item1, index) in item.category" :key="index">
            {{ item1 }}&nbsp;
          </span>
        </el-descriptions-item>
        <el-descriptions-item label="投诉时间">
          {{ item.sendTime }}
        </el-descriptions-item>
        <el-descriptions-item label="事件时间">
          {{ item.date }}
        </el-descriptions-item>

        

        <el-descriptions-item label="事件描述">
          {{ item.des }}
        </el-descriptions-item>

        <el-descriptions-item label="投诉状态">
          <span v-if="item.status == 0"> 未受理 </span>
          <span v-if="item.status == 1"> 已受理 </span>
          <span v-if="item.status == 2"> 受理中 </span>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["complain"]),
  },
};
</script>

<style>
</style>