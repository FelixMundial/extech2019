<template>
  <div class="database-container">
    <div style="margin-top: 50px"></div>
    <el-card>
      <template>
        <el-tag type="danger">Database entries</el-tag>
        <el-table :data="currentData" style="width: 90%; margin: 0 auto" highlight-current-row :fit="true" max-height="600" tooltip-effect="dark"
                  ref="multipleTable" @selection-change="handleSelectionChange" @row-click="handleRowSelected">
          <el-table-column fixed width="50" type="selection">
          </el-table-column>
          <el-table-column label="预计入住日期" width="200" prop="date" sortable>
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="个人信息" width="200" prop="name" sortable>
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <h1 class="popover-text">姓名: {{ scope.row.name }}</h1>
                <!--<h1 class="popover-text">性别: {{ scope.row.gender }}</h1>-->
                <h1 class="popover-text">联系方式: {{ scope.row.contact }}</h1>
                <h1 class="popover-text" v-if="scope.row.needsAccom">需要住宿</h1>
                <h1 class="popover-text" v-if="!scope.row.needsAccom">不需要住宿</h1>
                <h1 class="popover-text" v-if="scope.row.needsAccom && scope.row.demandsSingle">需要单人间</h1>
                <h1 class="popover-text" v-if="scope.row.needsAccom && !scope.row.demandsSingle">不需要单人间</h1>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="报告名称及类型" width="250" prop="presTitle">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <h1 class="popover-text">报告名称: {{ scope.row.presTitle }}</h1>
                <h1 class="popover-text" v-if="scope.row.isOral">报告类型: 口头报告
                  <b v-if="scope.row.isInEnglish === true"> - English</b>
                  <b v-else> - 中文</b>
                </h1>
                <h1 class="popover-text" v-else>报告类型: 墙报</h1>
                <div slot="reference" class="pres-wrapper">
                  <i class="el-icon-document"></i>
                  {{ scope.row.presTitle }}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="其它备注信息" width="250" prop="notes">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <h1 class="popover-text">{{ scope.row.presTitle }}</h1>
                <div slot="reference" class="pres-wrapper">
                  {{ scope.row.notes }}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150" show-overflow-tooltip>
            <template slot-scope="item">
              <el-button type="danger" icon="el-icon-delete" size="mini" click=""></el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
    <el-pagination small layout="total, sizes, prev, pager, next, jumper" background class="paginator"
                   @current-change="handlePageChange" :current-page="currentPage" @size-change="handleSizeChange"
                   :total="itemCount" :page-sizes="[10, 20, 50]" :page-size="pageSize" >
    </el-pagination>
    <div style="margin-top: 20px">
      <el-button @click="resetSort" type="info" plain round>重置排序</el-button>
      <el-button click="" :disabled="this.selectedRows.length === 0" round>取消选择</el-button>
      <el-button click="" type="danger" plain round>批量移除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      tableData: [],
      selectedRows: [],
      currentData: [],
      itemCount: 0,
      pageSize: 10, // items per page
      currentPage: 1
    }
  },
  methods: {
    getAllUsers () {
      this.$http.get('/api/getAll')
        .then((res) => {
          console.log('Login info successfully retrieved: ' + Date())
          if (res.data !== '') {
            this.tableData = res.data
            this.currentData = this.tableData.slice((this.currentPage - 1) *
              this.pageSize, this.currentPage * this.pageSize)
            this.itemCount = this.tableData.length
            this.$message({
              message: 'Congrats, loading all login info successful!',
              type: 'success'
            })
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    handleRowSelected (row) {
      this.$refs.multipleTable.toggleRowSelection(row, true)
    },
    // not used, only for removing selections
    toggleSelection (rows) {
      console.log('toggleSelection ()...')
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      console.log('handleSelectionChange...')
      console.log(val)
      this.selectedRows = val
    },
    resetSort () {
      this.$refs.multipleTable.clearSort()
    },
    handlePageChange (page) {
      this.currentPage = page
      this.currentData = this.tableData.slice((this.currentPage - 1) *
        this.pageSize, this.currentPage * this.pageSize)
      this.itemCount = this.tableData.length
    },
    handleSizeChange (size) {
      this.pageSize = size
      this.currentData = this.tableData.slice((this.currentPage - 1) *
        this.pageSize, this.currentPage * this.pageSize)
      this.itemCount = this.tableData.length
    }
  },
  mounted () {
    this.getAllUsers()
  }
}
</script>

<style scoped>
.database-container {
  margin: 3rem 1rem;
}
.paginator {
  padding-top: 1rem;
}
</style>
