<template>
  <div>
    <el-form
      ref="form"
      :rules="rules"
      :model="undone1"
      label-width="120px"
      style="display: flex; justify-content: space-around"
    >
      <el-card style="width: 400px">
        <el-divider content-position="left">个人基本信息</el-divider>
        <el-form-item label="姓名" prop="name">
          <el-input
            autocomplete="new"
            style="width: 100px"
            v-model="undone1.name"
          />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input style="width: 100px" v-model.number="undone1.age" />
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="undone1.sex" class="ml-4">
            <el-radio label="男" size="large">男</el-radio>
            <el-radio label="女" size="large">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证号" prop="identity">
          <el-input style="width: 200px" v-model.number="undone1.identity" />
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input style="width: 200px" v-model.number="undone1.phone" />
        </el-form-item>
      </el-card>

      <el-card style="width: 520px">
        <el-divider content-position="left">摊位申请</el-divider>
        <div style="display: flex; justify-items: spance-around">
          <el-form-item prop="location" label="摊位选择">
            <el-cascader
              v-model="undone1.location"
              :options="location"
              placeholder="摊位选择"
            />
          </el-form-item>

          <!-- 商品类别 -->
          <el-form-item label="商品类别">
            <el-select
              v-model="undone1.category"
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

        <el-form-item label="摆摊日期">
          <el-col :span="11">
            <el-date-picker
              v-model="undone1.date"
              type="date"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              placeholder="选择摆摊日期"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>

        <el-form-item label="摆摊时段">
          <el-col :span="11">
            <el-time-select
              v-model="undone1.timeStart"
              :max-time="undone1.timeEnd"
              class="mr-4"
              format="HH:mm"
              placeholder="摆摊时间"
              start="08:30"
              step="00:15"
              end="23:30"
            />
            <el-time-select
              v-model="undone1.timeEnd"
              :min-time="undone1.timeStart"
              format="HH:mm"
              placeholder="收摊时间"
              start="08:30"
              step="00:15"
              end="23:30"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="其他说明" prop="des">
          <el-input v-model="undone1.des" type="textarea" resize="none" />
        </el-form-item>
      </el-card>
    </el-form>

    <el-divider></el-divider>
    <el-button type="primary" @click="submit()">提交申请</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { reactive } from "vue";
import { toRaw } from "@vue/reactivity";
import { useStore } from "vuex"; // 引入useStore 方法
import { ElMessage } from "element-plus";

const store = useStore(); // 该方法用于返回store 实例
const undone = reactive({
  id: "",
  self: {
    name: "",
    sex: "",
    age: "",
    phone: "",
    identity: "",
  },
  location: "",
  date: "",
  timeStart: "",
  timeEnd: "",
  category: "",
  file: "",
  status: "",
  des: "",
});

const undone1 = reactive({
  id: "",
  name: "",
  sex: "",
  age: "",
  phone: "",
  identity: "",
  location: "",
  date: "",
  timeStart: "",
  timeEnd: "",
  category: "",
  file: "",
  status: "",
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
const location = reactive([
  {
    value: "大面铺",
    label: "大面铺",
    children: [
      {
        value: "金茶路",
        label: "金茶路",
        children: [
          {
            value: "摊点1",
            label: "摊点1",
          },
          {
            value: "摊点2",
            label: "摊点2",
          },
          {
            value: "摊点3",
            label: "摊点3",
          },
          {
            value: "摊点4",
            label: "摊点4",
          },
        ],
      },
      {
        value: "炜岸城",
        label: "炜岸城",
        children: [
          {
            value: "摊点1",
            label: "摊点1",
          },
          {
            value: "摊点2",
            label: "摊点2",
          },
          {
            value: "摊点3",
            label: "摊点3",
          },
          {
            value: "摊点4",
            label: "摊点4",
          },
        ],
      },
      {
        value: "金枫路",
        label: "金枫路",
        children: [
          {
            value: "摊点1",
            label: "摊点1",
          },
          {
            value: "摊点2",
            label: "摊点2",
          },
        ],
      },
    ],
  },
  {
    value: "静安路",
    label: "静安路",
    children: [
      {
        value: "师大商圈",
        label: "师大商圈",
        children: [
          {
            value: "川师南大门",
            label: "川师南大门",
            children: [
              {
                value: "摊点1",
                label: "摊点1",
              },
              {
                value: "摊点2",
                label: "摊点2",
              },
            ],
          },
          {
            value: "摊点2",
            label: "摊点2",
          },
          {
            value: "摊点3",
            label: "摊点3",
          },
        ],
      },
      {
        value: "其他",
        label: "其他",
        children: [
          {
            value: "望平街",
            label: "望平街",
          },
          {
            value: "牛市口",
            label: "牛市口",
          },
          {
            value: "琉璃厂",
            label: "琉璃厂",
          },
          {
            value: "IFS",
            label: "IFS",
          },
          {
            value: "万达广场",
            label: "万达广场",
          },
        ],
      },
    ],
  },
]);

const rules = reactive({
  name: [{ required: true, message: "姓名为必填项", trigger: "blur" }],

  age: [
    { required: true,type:"number", message: "年龄为必填项", trigger: "blur" },
  ],

  sex: [{ required: true, message: "性别为必填项", trigger: "blur" }],
  temp: [{ required: true, message: "为必填项", trigger: "blur" }],

  identity: [{ required: true, message: "身份证号为必填项", trigger: "blur" }],

  phone: [{ required: true, message: "手机号码为必填项", trigger: "blur" }],
  location: [
    { required: true, message: "Please input location", trigger: "blur" },
  ],
  category: [
    {
      type: "array",
      required: true,
      message: "Please select category",
      trigger: "change",
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
  timeStart: [
    {
      required: true,
      message: "Please pick a timeStart",
      trigger: "change",
    },
  ],
  timeEnd: [
    {
      required: true,
      message: "Please pick a timeEnd",
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
  undone.self.name = toRaw(undone1).name;
  undone.self.age = toRaw(undone1).age;
  undone.self.sex = toRaw(undone1).sex;
  undone.self.identity = toRaw(undone1).identity;
  undone.self.phone = toRaw(undone1).phone;
  undone.location = toRaw(undone1).location;
  undone.category = toRaw(undone1).category;
  undone.date = toRaw(undone1).date;
  undone.timeStart = toRaw(undone1).timeStart;
  undone.timeEnd = toRaw(undone1).timeEnd;
  undone.des = toRaw(undone1).des;
  store.commit("pushUndone", toRaw(undone));

  ElMessage({
    showClose: true,
    message: "提交成功",
    type: "success",
  });
};
</script>

<style>
</style>