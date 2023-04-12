<template>
  <div class="demo-collapse">
    <el-input
      v-model="announcement.title"
      style="margin-bottom: 10px"
      placeholder="编辑公告标题"
    >
    </el-input>
    <el-input
      type="textarea"
      :rows="6"
      :show-word-limit="true"
      v-model="announcement.msg"
      placeholder="编辑公告..."
    />
    <el-button @click="submit">立即发布</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcement: {
        title: "",
        msg: "",
      },
    };
  },
  methods: {
    submit() {
      
      if ((this.announcement.title == "")) {
        this.$message.warning("请填写公告标题");
      }else if((this.announcement.msg == "")){
        this.$message.warning("请填写公告信息");
      }
      else{
        this.$store.commit("addNotice", this.announcement);
      this.announcement.title = "";
      this.announcement.msg = "";
      this.$message.success("发布成功，前往首页查看");
      }
      
    },
  },
};
</script>

<style scoped>
</style>