<template>
  <div>
    投诉：
    <el-form
      :rules="rules"
      :model="complain1"
      label-width="120px"
      style="display: flex; justify-content: space-around"
    >
      <el-card style="width: 600px">
        <el-form-item label="姓名" prop="name">
          <el-input style="width: 200px" v-model="complain1.name" />
        </el-form-item>

        <el-form-item label="联系方式" prop="phone">
          <el-input style="width: 200px" v-model.number="complain1.phone" />
        </el-form-item>
        <div style="display: flex; justify-items: spance-around">
          <el-form-item label="投诉摊位" prop="location">
            <el-select
              style="width: 100px"
              v-model="complain1.location"
              placeholder="摊位选择"
            >
              <el-option label="上海" value="上海" />
              <el-option label="北京" value="北京" />
            </el-select>
          </el-form-item>

          <!-- 商品类别 -->
          <el-form-item label="商品类别" prop="category">
            <el-select
              v-model="complain1.category"
              multiple
              placeholder="商品类别"
              style="width: 100px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>

        <el-form-item label="消费时间" prop="date">
          <el-col :span="11">
            <el-date-picker
              v-model="complain1.date"
              type="date"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              placeholder="选择摆摊日期"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>

        <el-form-item label="投诉说明" prop="des">
          <el-input v-model="complain1.des" type="textarea" resize="none" />
        </el-form-item>
      </el-card>
    </el-form>

    <el-divider></el-divider>
    <el-button type="primary" @click="submit">提交投诉</el-button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { toRaw } from "@vue/reactivity";
import { useStore } from "vuex"; // 引入useStore 方法
import { ElMessage } from "element-plus";
const store = useStore(); // 该方法用于返回store 实例
const complain = reactive({
  id: "",
  self: {
    name: "",
    phone: "",
  },
  location: "",
  date: "",
  category: "",
  status: "0",
  des: "",
});
const complain1 = reactive({
  id: "",
  name: "",
  phone: "",

  location: "",
  date: "",
  category: "",
  status: "0",
  des: "",
});

const options = [
  {
    value: "食品",
    label: "食品",
  },
  {
    value: "服务",
    label: "服务",
  },
  {
    value: "百货",
    label: "百货",
  },
  {
    value: "其他",
    label: "其他",
  },
];
const rules = reactive({
  name: [{ required: true, message: "姓名为必填项", trigger: "blur" }],

  phone: [{ required: true, message: "手机号码为必填项", trigger: "blur" }],
  location: [
    { required: true, message: "Please input location", trigger: "blur" },
  ],
  category: [
    {
      type: "array",
      required: true,
      message: "Please select category",
      trigger: "blur",
    },
  ],
  date: [
    {
      type: "date",
      required: true,
      message: "Please select date",
      trigger: "change",
    },
  ],

  des: [
    {
      required: true,
      message: "Please select at least one activity type",
      trigger: "blur",
    },
  ],
});

const submit = () => {
  complain.self.name = toRaw(complain1).name;
  complain.self.phone = toRaw(complain1).phone;
  complain.location = toRaw(complain1).location;
  complain.date = toRaw(complain1).date;
  complain.category = toRaw(complain1).category;
  complain.des = toRaw(complain1).des;
  store.commit("pushComplain", toRaw(complain));
  ElMessage({
    showClose: true,
    message: "提交成功",
    type: "success",
  });
  console.log("complain:", complain);
};
</script>

<style>
</style>