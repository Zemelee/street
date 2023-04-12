<template>
  <div>
    <!-- 分页：每一页需要展示的数据可以通过简单的数学公式计算出来，
    点击第x页时就把tableData里需要展示的数据用slice函数分割出来即可 -->
    <!-- 1：1-10；2：11-20...slice((当前页数-1)*每页条数，当前页数*每页条数) -->

    <el-table :data="undone" border height="70vh" style="width: 100%">
      <el-table-column prop="id" label="序号" width="50" />
      <el-table-column prop="self.name" label="姓名" width="80" />
      <el-table-column prop="self.age" label="年龄" width="60" />
      <el-table-column prop="self.sex" label="性别" width="60" />
      <el-table-column prop="self.identity" label="身份证号" width="100" />
      <el-table-column prop="self.phone" label="手机" width="80" />
      <el-table-column prop="location" label="申请摊位" width="100" />
      <el-table-column prop="category" label="商品种类" width="100" />
      <el-table-column prop="date" label="摊位日期" width="110" />
      <el-table-column prop="timeStart" label="摆摊时间" width="90" />
      <el-table-column prop="timeEnd" label="收摊时间" width="90" />

      <el-table-column prop="des" label="备注" width="100">
        <template #default="scope">
          <div class="des">
            <span :title="scope.row.des">{{
              scope.row.des
            }}</span>
          </div>
          <el-dialog v-model="dialogVisible" title="备注" width="40%">
            <span>{{ scope.row.des }}</span>
            <template #footer>
              <span class="dialog-footer">
                <el-button type="primary" @click.stop="dialogVisible = false">
                  确认
                </el-button>
              </span>
            </template>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="审核状态" width="90">
        <template #default="scope">
          <div v-if="scope.row.status == 0">待审核</div>
          <div style="color: #95d475" v-else-if="scope.row.status == 1">
            已通过
          </div>
          <div style="color: #f89898" v-else-if="scope.row.status == 2">
            已驳回
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="category" label="操作">
        <template #default="scope">
          <el-button type="primary" @click="pass(scope.row)">通过</el-button>
          <br />
          <el-button
            style="margin-top: 5px"
            type="danger"
            @click="reject(scope.row)"
            >驳回</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- <span class="example-pagination-block">
      <span class="example-demonstration">一共{{ undone.length }}条数据</span>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="prev, pager, next"
        :total="30"
      />
    </span> -->
  </div>
</template>

<script>
import { toRaw } from "vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentPage: 1, //当前页数
      dialogVisible: false,
    };
  },

  computed: {
    
    ...mapState(["undone"]),
    undoneShow() {
      const temp = toRaw(this.undone).splice(
        (this.currentPage - 1) * 10,
        this.currentPage * 10
      )
      console.log(temp);
      return temp
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    pass(row) {
      row.status = 1;
      this.$store.commit("updateUndone", { id: row.id, status: "1" });
    },
    reject(row) {
      row.status = 2;
      this.$store.commit("updateUndone", { id: row.id, status: "2" });
    },
  },
};
</script>

<style scoped>
.des {
  display: -webkit-box;
  text-overflow: ellipsis; /*超出内容用省略号*/
  overflow: hidden; /*内容超出后隐藏*/
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /*1行*/
  word-break: break-all;
  cursor: pointer;
}
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>