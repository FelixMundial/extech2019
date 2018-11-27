<template>
  <div class="extech-register-container">
    <el-row style="margin-top: 50px">
      <el-col :span=3>
        <div style="height: 500px;">
          <el-steps direction="vertical" :space="400" :active="activeStep" finish-status="success" process-status="process">
            <el-step class="el-step-item" title="填写个人报名信息"></el-step>
            <el-step class="el-step-item" title="确认信息是否无误" description="确认是否需要填写其他与会人员信息"></el-step>
            <el-step class="el-step-item" title="提交与会摘要"></el-step>
            <el-step class="el-step-item" title="报名完成！请查收自动回复邮件:)"></el-step>
          </el-steps>
        </div>
      </el-col>
      <el-col :span=21>
        <h1><i class="el-icon-document"></i> ExTech 2018 Registration | 报名表</h1>
        <el-form :model="info" :rules="rules" ref="ruleForm" label-width="18rem" class="register-form">
          <el-row>
            <el-col :span=10>
              <el-form-item label="Name | 姓名" prop="name">
                <el-input class="el-input" v-model="info.name"/>
              </el-form-item>
            </el-col>
            <!--<el-col :span=8>-->
              <!--<el-form-item label="Gender | 性别">-->
                <!--<el-select class="el-select" v-model="info.gender">-->
                  <!--&lt;!&ndash; 这里的key官方推荐在v-for时使用，不然会警告，但不影响使用 &ndash;&gt;-->
                  <!--<el-option v-for="item in options" :key="item" :value="item"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
            <el-col :span=14>
              <el-form-item label="Email | 邮箱" prop="contact">
                <el-input class="el-input" v-model="info.contact"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-form-item label="Accommodations | 住宿">
              <el-switch v-model="info.needsAccom"
                         active-text="I need an accommodation | 需要住宿" inactive-text="I do not need accommodations | 不需要住宿"></el-switch>
            </el-form-item>
          </el-row>
          <el-row>
            <transition name="fade">
              <el-form-item label="" v-if="info.needsAccom">
                <el-switch v-model="info.demandsSingle"
                           active-text="I need a single room | 需要单人间" inactive-text="I do not need single rooms | 不需要单人间"></el-switch>
              </el-form-item>
            </transition>
          </el-row>
          <el-row v-if="info.needsAccom">
            <transition name="fade">
              <el-form-item label="" required>
                <el-form-item prop="date">
                  <el-date-picker type="date" placeholder="Scheduled date of arrival | 预计入住日期" v-model="info.date" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-form-item>
            </transition>
          </el-row>

          <el-row>
            <el-form-item label="Presentation title | 报告名称" prop="presTitle">
              <el-input type="textarea" v-model="info.presTitle"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="Presentation type | 报告类型" prop="isOral">
              <el-radio-group v-model="info.isOral">
                <el-radio border label=true>I will present orally | 进行口头报告</el-radio>
                <el-radio border label=false>I will xxx | 仅进行墙报展示</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-row>
          <el-row>
            <transition name="fade">
              <el-form-item label="" v-if="info.isOral === 'true'" prop="isInEnglish">
                <el-radio-group v-model="info.isInEnglish">
                  <el-radio-button label=true>I will present in English</el-radio-button>
                  <el-radio-button label=false>我将用中文汇报</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </transition>
          </el-row>

          <el-form-item label="Notes | 备注信息">
            <el-input type="textarea" v-model="info.notes"></el-input>
          </el-form-item>
          <el-button @click="createInfo('ruleForm')" v-if="!isEditMode" type="success" round>Finish current registration | 创建报名信息</el-button>
          <el-button @click="createInfo('ruleForm')" v-else type="success" round>Edit current registration | 修改报名信息</el-button>
        </el-form>

        <el-card class="box-card">
          <template>
            <el-table :data="tableData" style="width: 90%; margin: 0 auto">
              <el-table-column label="预计入住日期" prop="date" sortable>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="个人信息" prop="name" sortable>
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
              <el-table-column label="报告名称及类型" prop="presTitle">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <h1 class="popover-text">报告名称: {{ scope.row.presTitle }}</h1>
                    <h1 class="popover-text" v-if="scope.row.isOral">报告类型: 口头报告
                      <b v-if="scope.row.isInEnglish"> - English</b>
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
              <el-table-column label="其它备注信息" prop="notes"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="item">
                  <el-button type="info" v-if="!isEditMode" size="mini" @click="editInfo(item.$index)">编辑</el-button>
                  <el-button type="primary" v-else size="mini" @click="exitEditMode">退出编辑</el-button>
                  <el-button type="danger" size="mini" @click="deleteInfo(item.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
          <el-row style="margin-top: 10px">
            <el-button type="primary" v-if="isEditMode" round @click="exitEditMode">退出编辑</el-button>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <el-upload class="upload-section" drag
                     action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传doc/docx/pdf文件，且不超过5M</div>
          </el-upload>
        </el-card>
        <el-button @click="submitInfo" type="primary" round>提交全部报名信息</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      activeStep: 0,
      info: {
        name: '',
        contact: '',
        needsAccom: false,
        demandsSingle: false,
        date: '',
        // gender: '',
        presTitle: '',
        isOral: true,
        isInEnglish: true,
        notes: ''
      },
      options: [
        'Female | 女', 'Male | 男'
      ],
      isEditMode: false,
      hasEdited: false,
      tableData: [],
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入有效邮箱地址', trigger: 'blur' }
        ],
        // date: [
        //   { type: 'date', required: true, message: '请选择预计入住日期', trigger: 'change' }
        // ],
        presTitle: [
          { required: true, message: '请填写报告名称', trigger: 'change' }
        ],
        isOral: [
          { required: true, message: '请选择报告类型', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    createInfo (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('this.info: ')
          console.log(this.info)
          if (this.tableData !== null | []) {
            for (var i = 0; i < this.tableData.length; i++) {
              if (this.tableData[i].name === this.info.name) {
                this.tableData[i] = this.info
                this.hasEdited = true
                break
              }
              if (this.hasEdited) {
                this.tableData.push(this.info)
              }
            }
          } else {
            this.tableData.push(this.info)
          }
          localStorage.setItem('tableData', JSON.stringify(this.tableData))
          if (!this.isEditMode) {
            this.$message({
              message: '恭喜，信息提交成功！',
              type: 'success'
            })
          } else {
            this.$message({
              message: '恭喜，信息修改成功！',
              type: 'success'
            })
          }
          this.isEditMode = false
          this.hasEdited = false
          this.resetForm()
          this.activeStep = 1
        } else {
          console.log('error submission!')
          this.$message({
            showClose: true,
            message: '请检查所有必填项目是否都已填写~',
            type: 'error'
          })
          return false
        }
      })
    },
    editInfo (index) {
      var temp = JSON.stringify(this.tableData[index])
      this.info = JSON.parse(temp)
      this.isEditMode = true
    },
    exitEditMode () {
      this.isEditMode = false
      this.resetForm()
    },
    deleteInfo (index) {
      this.tableData.splice(index, 1)
    },
    resetForm () {
      this.info = {
        name: '',
        needsAccom: false,
        demandsSingle: false,
        // gender: '',
        presTitle: '',
        isOral: 'true',
        isInEnglish: 'true',
        notes: ''
      }
    },
    submitInfo () {
      this.$message({
        showClose: true,
        message: '这是一条警告消息',
        type: 'warning'
      })
    }
  },
  watch: {
    info: {
      handler (newObj, oldObj) {
        console.log('info changed.')
        localStorage.setItem('info', JSON.stringify(newObj))
      },
      deep: true
    },
    tableData: {
      handler (newArray, oldArray) {
        console.log('tableData changed.')
        localStorage.setItem('tableData', JSON.stringify(newArray))
      },
      deep: true
    }
  },
  mounted () {
    var temp = localStorage.getItem('info')
    console.log('info in localStorage: ' + temp)
    if (temp !== null) {
      this.info = JSON.parse(temp)
    }
    var tempTable = localStorage.getItem('tableData')
    if (tempTable !== null || []) {
      this.tableData = JSON.parse(tempTable)
    }
  }
}
</script>

<style scoped>
.extech-register-container {
  margin: 1rem 2rem;
}
.el-step-item {
  margin-bottom: 10rem;
}
.register-form {
  padding: 2rem;
}
.box-card {
  margin: 1rem;
  border-radius: 5px;
  width: 95%;
  min-height: 250px;
}
.popover-text:not(:last-child) {
  padding: 1rem;
  border-bottom: 1px solid lightgreen;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-to {
  opacity: 0;
}
.upload-section {
  margin: 2rem;
}
</style>
