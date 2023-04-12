<template>
  <div>
    <el-button
      :type="buttonType(index)"
      v-for="(item, index) in environmentType"
      :key="index"
      @click.native="selectType(index)"
      >{{ item }}</el-button
    >
    <el-divider></el-divider>
    
    <!-- 如果为已通过 -->
    <div v-show="currentIndex == 0">
      <div v-for="(item, index) in this.passCount" :key="index">
        <el-card shadow="hover" style="margin-top: 10px">
          <el-descriptions :column="4" :title="item.id.toString()">
            <el-descriptions-item label="姓名">
              {{ item?.self.name }}
            </el-descriptions-item>
            <el-descriptions-item label="电话">
              {{ item?.self?.phone }}
            </el-descriptions-item>
            <el-descriptions-item label="性别">
              {{ item?.self?.sex }}
            </el-descriptions-item>
            <el-descriptions-item label="年龄">
              {{ item?.self?.age }}
            </el-descriptions-item>
            <el-descriptions-item label="位置">
              {{ item.location }}
            </el-descriptions-item>
            <el-descriptions-item label="品种">
              <span v-for="(item1, index) in item.category" :key="index">
                {{ item1 }}&nbsp;
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="出摊时间">
              {{ item.date }}
            </el-descriptions-item>
            <el-descriptions-item label="审核状态">
              <span v-if="item.status == 1"> 已通过 </span>
              <span v-if="item.status == 2"> 未通过 </span>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </div>
    </div>

    <div v-show="currentIndex == 1">
      <div v-for="(item, index) in rejectCount" :key="index">
        <el-card shadow="hover" style="margin-top: 10px">
          <el-descriptions :column="4" :title="item.id.toString()">
            <el-descriptions-item label="姓名">
              {{ item?.self.name }}
            </el-descriptions-item>
            <el-descriptions-item label="电话">
              {{ item?.self?.phone }}
            </el-descriptions-item>
            <el-descriptions-item label="性别">
              {{ item?.self?.sex }}
            </el-descriptions-item>
            <el-descriptions-item label="年龄">
              {{ item?.self?.age }}
            </el-descriptions-item>
            <el-descriptions-item label="位置">
              {{ item.location }}
            </el-descriptions-item>
            <el-descriptions-item label="品种">
              <span v-for="(item1, index) in item.category" :key="index">
                {{ item1 }}&nbsp;
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="出摊时间">
              {{ item.date }}
            </el-descriptions-item>
            <el-descriptions-item label="审核状态">
              <span v-if="item.status == 1"> 已通过 </span>
              <span v-if="item.status == 2"> 未通过 </span>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </div>
    </div>
    <div v-show="currentIndex == 2">
      <div v-for="(item, index) in unCount" :key="index">
        <el-card shadow="hover" style="margin-top: 10px">
          <el-descriptions :column="4" :title="item.id.toString()">
            <el-descriptions-item label="姓名">
              {{ item?.self.name }}
            </el-descriptions-item>
            <el-descriptions-item label="电话">
              {{ item?.self?.phone }}
            </el-descriptions-item>
            <el-descriptions-item label="性别">
              {{ item?.self?.sex }}
            </el-descriptions-item>
            <el-descriptions-item label="年龄">
              {{ item?.self?.age }}
            </el-descriptions-item>
            <el-descriptions-item label="位置">
              {{ item.location }}
            </el-descriptions-item>
            <el-descriptions-item label="品种">
              <span v-for="(item1, index) in item.category" :key="index">
                {{ item1 }}&nbsp;
              </span>
            </el-descriptions-item>
            <el-descriptions-item label="出摊时间">
              {{ item.date }}
            </el-descriptions-item>
            <el-descriptions-item label="审核状态">
              <span v-if="item.status == 0"> 审核中 </span>
              <span v-if="item.status == 1"> 已通过 </span>
              <span v-if="item.status == 2"> 未通过 </span>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toRaw } from '@vue/reactivity'
export default {
  data() {
    return {
      currentIndex: "",
      environmentType: ["已通过", "未通过", "审核中"],
    };
  },

  methods: {
    // 获取被点击按钮的index
    selectType(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
      this.buttonType(index);
    },
    // 选中的button更改颜色，其余的都更改为灰色
    buttonType(index) {
      if (index === this.currentIndex) {
        return "primary";
      } else {
        return "info";
      }
    },
  },
  computed: {
    a() {
      console.log("aaa");
      console.log(JSON.parse(JSON.stringify(this.passCount)));
      // console.log(...(mapGetters(["passCount", "rejectCount", "unCount"]))); ;
    },
    ...mapGetters(["passCount", "rejectCount", "unCount"]),
  },
};
</script>

<style>
</style>