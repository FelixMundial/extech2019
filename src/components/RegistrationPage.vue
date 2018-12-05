<template>
  <div class="extech-register-container">
    <el-row style="margin-top: 75px">
      <el-col :span=3>
        <div style="height: 1400px">
          <el-steps direction="vertical" :space="400" :active="activeStep" finish-status="success" process-status="process">
            <el-step class="el-step-item" title="填写个人报名信息"></el-step>
            <el-step class="el-step-item" title="提交个人报名信息" description="确认信息是否无误"></el-step>
            <el-step class="el-step-item" title="下载与会摘要模板，填写后在线提交"></el-step>
            <el-step class="el-step-item" title="报名完成！请查收自动回复邮件:)"></el-step>
          </el-steps>
        </div>
      </el-col>
      <el-col :span=21 style="height: 600px">
        <el-scrollbar style="height: 100%">
          <el-tag type="success"><i class="iconfont icon-fuzeren1"></i> ExTech 2019 Registration | 报名表</el-tag>
          <el-alert style="margin-top: 15px" title="您可以同时完成一至多人的注册信息填写，最后一并提交。"
                    type="info" close-text="OK | 知道了">
          </el-alert>
          <el-form :model="localInfo" :rules="rules" ref="ruleForm" label-width="18rem" class="register-form">
            <el-row>
              <el-form-item label="Name | 姓名" prop="name">
                <el-input class="el-input" v-model.trim="localInfo.name"/>
              </el-form-item>
              <el-form-item label="Email | 邮箱" prop="contact" :rules="[
            {required: true, message: '请输入有效邮箱地址', trigger: 'blur'},
            {type: 'email', message: '邮箱地址不正确！', trigger: 'blur, change'}
            ]">
                <el-input class="el-input" v-model.trim="localInfo.contact"/>
              </el-form-item>
              <!--<el-col :span=8>-->
              <!--<el-form-item label="Gender | 性别">-->
              <!--<el-select class="el-select" v-model="localInfo.gender">-->
              <!--&lt;!&ndash; 这里的key官方推荐在v-for时使用，不然会警告，但不影响使用 &ndash;&gt;-->
              <!--<el-option v-for="item in options" :key="item" :value="item"></el-option>-->
              <!--</el-select>-->
              <!--</el-form-item>-->
              <!--</el-col>-->
            </el-row>

            <el-row>
              <el-form-item label="Accommodations | 住宿">
                <el-switch v-model="localInfo.needsAccom"
                           active-text="I need an accommodation | 需要住宿" inactive-text="I do not need accommodations | 不需要住宿"></el-switch>
              </el-form-item>
            </el-row>
            <el-row>
              <transition name="fade">
                <el-form-item label="" v-if="localInfo.needsAccom">
                  <el-switch v-model="localInfo.demandsSingle"
                             active-text="I need a single room | 需要单人间" inactive-text="I do not need single rooms | 不需要单人间"></el-switch>
                </el-form-item>
              </transition>
            </el-row>
            <el-row v-if="localInfo.needsAccom">
              <transition name="fade">
                <el-form-item label="" required>
                  <el-form-item prop="date">
                    <el-date-picker type="date" placeholder="Scheduled date of arrival | 预计入住日期"
                                    value-format="yyyy-MM-dd" v-model="localInfo.date" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-form-item>
              </transition>
            </el-row>

            <el-row>
              <el-form-item label="Presentation title | 报告名称" prop="presTitle" :rules="[
            {required: true, message: '请输入报告标题', trigger: 'blur'},
            ]">
                <el-input type="textarea" v-model.trim="localInfo.presTitle"></el-input>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="Presentation type | 报告类型" prop="isOral">
                <el-radio-group v-model="localInfo.isOral">
                  <el-radio style="margin: 2px" border label='true'>I will present orally | 进行口头报告</el-radio>
                  <el-radio style="margin: 2px" border label='false'>I will xxx | 仅进行墙报展示</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-row>
            <el-row>
              <transition name="fade">
                <el-form-item label="" v-if="localInfo.isOral === 'true'" prop="isInEnglish">
                  <el-radio-group v-model="localInfo.isInEnglish">
                    <el-radio-button style="margin: 2px 0" label=true><i class="iconfont icon-english2"></i> I will present in English</el-radio-button>
                    <el-radio-button style="margin: 2px 0" label=false><i class="iconfont icon-zhongwen"></i> 我将用中文汇报</el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </transition>
            </el-row>

            <el-form-item label="Notes | 备注信息">
              <el-input type="textarea" v-model.trim="localInfo.notes"></el-input>
            </el-form-item>
            <el-button @click="createQueues('ruleForm')" v-if="!isEditMode" icon="iconfont icon-tijiao2" type="success" round> Finish current registration | 创建报名信息</el-button>
            <el-button @click="createQueues('ruleForm')" v-else icon="iconfont icon-icon-edit" type="success" round> Edit current registration | 修改报名信息</el-button>
          </el-form>

          <el-tag type="success" style="margin-top: 3%">
            <i class="iconfont icon-ranking_sponsor_value"></i> Registration queue | 拟提交报名列表
          </el-tag>
          <el-card class="box-card">
            <template>
              <el-table :data="tableData" style="width: 90%; margin: 0 auto" highlight-current-row :fit="true" max-height="600" tooltip-effect="dark"
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
                      <h1 class="popover-text" style="text-align: center">{{ scope.row.name }}</h1>
                      <!--<h1 class="popover-text">{{ scope.row.gender }}</h1>-->
                      <h1 class="popover-text"><i class="el-icon-message"></i> {{ formattedContact(scope.row.contact) }}</h1>
                      <h1 class="popover-text" v-if="scope.row.needsAccom"><i class="iconfont icon-weibiaoti--27"></i> 需要住宿</h1>
                      <h1 class="popover-text" v-if="!scope.row.needsAccom">不需要住宿</h1>
                      <h1 class="popover-text" v-if="scope.row.needsAccom && scope.row.demandsSingle"><i class="iconfont icon-pengyou4"></i> 需要单人间</h1>
                      <h1 class="popover-text" v-if="scope.row.needsAccom && !scope.row.demandsSingle"><i class="iconfont icon-pengyou1"></i> 不需要单人间</h1>
                      <div slot="reference" class="name-wrapper">
                        <el-tag size="medium"><i class="iconfont icon-ranking_sponsor_value"></i> {{ scope.row.name }}</el-tag>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="报告名称及类型" width="250" prop="presTitle">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <h1 class="popover-text"><i class="iconfont icon-biaoti1"></i> {{ scope.row.presTitle }}</h1>
                      <h1 class="popover-text" v-if="scope.row.isOral">报告类型: 口头报告
                        <b v-if="scope.row.isInEnglish === true"> <i class="iconfont icon-english2"></i></b>
                        <b v-else> <i class="iconfont icon-zhongwen"></i></b>
                      </h1>
                      <h1 class="popover-text" v-else>报告类型: 墙报</h1>
                      <div slot="reference" class="pres-wrapper">
                        <i class="el-icon-document"></i>
                        {{ formattedTitle(scope.row.presTitle) }}
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="其它备注信息" width="250" prop="notes">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <h1 class="popover-text">{{ scope.row.presTitle }}</h1>
                      <div slot="reference" class="pres-wrapper">
                        <i class="iconfont icon-beizhu"></i>
                        {{ formattedTitle(scope.row.notes) }}
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="150" show-overflow-tooltip>
                  <template slot-scope="item">
                    <el-button type="info" v-if="!isEditMode" size="mini" @click="editQueues(item.$index)">编辑</el-button>
                    <el-button type="primary" v-else size="mini" @click="exitEditMode">退出编辑</el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteQueues(item.$index)"></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            <el-row style="margin-top: 15px">
              <el-button type="primary" v-if="isEditMode" round @click="exitEditMode">退出编辑</el-button>
            </el-row>
            <div style="margin-top: 15px">
              <el-button @click="resetSort" type="info" :disabled="!this.tableData || this.tableData.length <= 1" plain round>重置排序</el-button>
              <el-button style="margin-top: 20px" @click="registerMultiple" icon="iconfont icon-tijiao" :disabled="!this.tableData || this.tableData.length === 0" type="primary" round> 提交报名信息</el-button>
              <el-button @click="removeSelectedQueues" type="danger" :disabled="!this.selectedRows || this.selectedRows.length === 0" plain round>批量移除</el-button></div>
          </el-card>
        </el-scrollbar>
        <el-card class="box-card">
          <el-alert style="margin: 15px" title="摘要文档无需与注册信息同时提交；请将待上传的摘要文档命名为“姓名-报告标题”的格式" type="info" close-text="OK | 知道了"></el-alert>
          <el-button type="info" icon="iconfont icon-caozuowendang-xiazai" round>
            <a class='download' :href='docDownloadUrl' download="" title="摘要模板下载"> {{ docNameExtended }}</a>
          </el-button>
          <!--upload section-->
          <el-upload ref="upload" class="upload-section" drag action=""
                     :on-preview="handlePreviewFile" :on-remove="handleRemoveFile"
                     :on-success = "handleUploadSuccess" :before-upload = "handleBeforeUpload"
                     :file-list="fileList" :auto-upload="false" multiple
                     accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">
              <div style="font-size: larger !important;"><i class="iconfont icon-tixing2"></i>
                只能上传.doc/.docx <i class="iconfont icon-word-copy-copy"></i>
                .pdf <i class="iconfont icon-iconfile-pdf-"></i> 文件，且不超过5M
              </div>
              <el-tag type="success" style="margin-top: 3%">
                <i class="iconfont icon-biaoti"></i> Uploading queue | 待上传摘要文档列表
              </el-tag>
            </div>
          </el-upload>
          <el-row>
            <el-button icon="el-icon-upload" type="primary" @click="handleSubmitFile" round>Upload | 上传</el-button>
          </el-row>
        </el-card>
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
      localInfo: {
        name: '',
        contact: '',
        needsAccom: false,
        demandsSingle: false,
        date: '',
        // gender: '',
        presTitle: '',
        isOral: 'true',
        isInEnglish: true,
        notes: ''
      },
      options: [
        'Female | 女', 'Male | 男'
      ],
      isEditMode: false,
      hasEdited: false,
      selectedRows: [],
      tableData: [],
      rules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        // date: [
        //   { type: 'date', required: true, message: '请选择预计入住日期', trigger: 'change' }
        // ],
        presTitle: [
          {required: true, message: '请填写报告名称', trigger: 'change'}
        ],
        isOral: [
          {required: true, message: '请选择报告类型', trigger: 'change'}
        ]
      },
      hasFound: false,
      hasFetched: false,
      fetchedData: [],
      hasFetchedAll: false,
      docDownloadUrl: '/api/download',
      fileList: [] // upload files,
    }
  },
  computed: {
    formattedContact () {
      return (contact) => {
        // removing all spaces
        return contact.replace(/\s+/g, '')
      }
    },
    // formattedDate () {
    //   return (date) => {
    //     if (date && date.length >= 10) {
    //       return date.substr(0, 10)
    //     } else {
    //       return date
    //     }
    //   }
    // },
    formattedTitle () {
      return (presTitle) => {
        if (presTitle && presTitle.length >= 50) {
          return presTitle.substr(0, 50) + '...'
        } else {
          return presTitle
        }
      }
    },
    docNameExtended () {
      var docName = this.localInfo.name !== '' ? this.localInfo.name + '-' + this.localInfo.presTitle : '姓名-报告标题'
      return docName + '.docx'
    }
  },
  methods: {
    // Creating and queueing registration info to localStorage
    createQueues (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('this.localInfo: ')
          console.log(this.localInfo)
          if (this.tableData.length !== 0 && this.tableData !== []) {
            for (let i = 0; i < this.tableData.length; i++) {
              if (this.tableData[i].name === this.localInfo.name) {
                console.log('old localInfo found.')
                this.tableData[i] = this.localInfo
                this.hasEdited = true
                break
              }
            }
            if (!this.hasEdited) {
              console.log('old localInfo not found.')
              this.tableData.push(this.localInfo)
              console.log('localInfo pushed.')
            }
          } else {
            this.tableData.push(this.localInfo)
            console.log('initializing... localInfo pushed.')
          }
          localStorage.setItem('tableData', JSON.stringify(this.tableData))
          if (this.isEditMode) {
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
    // Editing registration info on localStorage
    editQueues (index) {
      var temp = JSON.stringify(this.tableData[index])
      this.localInfo = JSON.parse(temp)
      this.isEditMode = true
    },
    exitEditMode () {
      this.isEditMode = false
      this.resetForm()
    },
    // deleting registration info from localStorage
    deleteQueues (index) {
      this.$confirm('此操作将永久删除选中行, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
      })
    },
    removeSelectedQueues () {
      console.log('removeSelectedQueues ()...')
      this.$confirm('此操作将永久删除选中行, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for (var i = 0; i < this.selectedRows.length; i++) {
          for (var j = 0; j < this.tableData.length; j++) {
            if (this.selectedRows[i] === this.tableData[j]) {
              this.tableData.splice(j, 1)
            }
          }
        }
      })
    },
    // Resetting data fields
    resetForm () {
      this.localInfo = {
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

    // Dealing with functions related to multiple selections
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
    // Resetting a sorted table
    resetSort () {
      this.$refs.multipleTable.clearSort()
    },

    // Trying to search for registration info from server by a keyword
    getFields (data) {
      this.localInfo.name = data.name.replace(/\s+/g, ' ')
      this.localInfo.contact = data.contact.replace(/\s+/g, '')
      this.localInfo.needsAccom = data.needsAccom
      this.localInfo.demandsSingle = data.demandsSingle
      this.localInfo.date = data.date.substr(0, 10)
      // this.localInfo.gender = data.gender
      this.localInfo.presTitle = data.presTitle.trim()
      this.localInfo.isOral = data.isOral
      this.localInfo.isInEnglish = data.isInEnglish
      this.localInfo.notes = data.notes.trim()
    },
    fetchInfo (queriedName) {
      let params = {
        name: queriedName.trim().replace(/\s+/g, ' ')
      }
      this.$http.post('/api/search', params)
        .then((res) => {
          console.log('GET successful: ' + Date())
          console.log('res.body: ' + res.body)
          this.hasFetched = true
          if (res.body !== '') {
            this.hasFound = true
            this.fetchedData = res.body
            this.getFields(this.fetchedData)
            this.$message({
              message: 'Congrats, retrieving info successful!',
              type: 'success'
            })
          } else {
            this.$confirm('Server not running normal in searching! Try again later please', 'Error', {
              confirmButtonText: 'OK',
              type: 'warning'
            })
          }
        }).catch((err) => {
          console.log('GET failed: ' + err)
          this.$message({
            message: 'Sorry, retrieving info failed from server!',
            type: 'warning'
          })
        })
    },

    // Submit registration info(s) to server
    register (data, callback) {
      let hasFinished = false
      let isSuccessful = false
      let params = {
        name: data.name.replace(/\s+/g, ' '),
        contact: data.contact.replace(/\s+/g, ''),
        needsAccom: data.needsAccom,
        demandsSingle: data.demandsSingle,
        // ${date} is undefined if left blank
        date: data.date === undefined ? '' : data.date.substr(0, 10),
        // gender: data.gender,
        presTitle: data.presTitle.trim(),
        isOral: data.isOral,
        isInEnglish: data.isInEnglish,
        notes: data.notes.trim()
      }
      this.$http.post('/api/search', params).then((res) => {
        if (res.body !== '') {
          console.log('res.body: ')
          console.log(res.body)
          this.$confirm('发现重复报名信息, 是否覆盖先前注册信息?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$http.post('/api/update', params)
              .then((res) => {
                if (res.body !== '' && res.ok) {
                  this.$confirm('恭喜，' + this.tableData[0].name + '！注册信息修改成功，请查收邮件回复', '提交成功', {
                    confirmButtonText: 'OK',
                    type: 'success'
                  }).then(() => {
                    console.log('UPDATE successful: ' + Date())
                    console.log('res.body: ')
                    console.log(res.body)
                    isSuccessful = true
                  })
                } else {
                  this.$confirm('Server not running normal in update! Try again later please', 'Error', {
                    confirmButtonText: 'OK',
                    type: 'warning'
                  })
                }
              }).catch((err) => {
                console.log('UPDATE failed: ' + err)
                this.$message({
                  message: 'Sorry, updating info failed, info will not be updated for now.',
                  type: 'warning'
                })
              })
          })
        } else {
          console.log('res.body: ')
          console.log(res.body)
          this.$http.post('/api/register', params)
            .then((res) => {
              if (res.body !== '' && res.body.name === params.name) {
                this.$confirm('恭喜，' + this.tableData[0].name + '！注册信息提交成功，请查收邮件回复', '提交成功', {
                  confirmButtonText: 'OK',
                  type: 'success'
                }).then(() => {
                  console.log('POST successful: ' + Date())
                  console.log('res.body: ')
                  console.log(res.body)
                  isSuccessful = true
                })
              } else {
                this.$confirm('Server not running normal in registration! Try again later please', 'Error', {
                  confirmButtonText: 'OK',
                  type: 'warning'
                })
              }
            }).catch((err) => {
              console.log('POST failed: ' + err)
              this.$message({
                message: 'Sorry, registration failed! Please contact us!',
                type: 'warning'
              })
            })
        }
        hasFinished = true
      }).catch((err) => {
        console.log('GET failed: ' + err)
        this.$message({
          message: 'Sorry, database down! Please contact us!',
          type: 'warning'
        })
      })
      // Guaranteed to callback only after HTTP request returns
      setInterval(() => {
        if (hasFinished) {
          clearInterval()
          callback(isSuccessful)
        }
      }, 1000)
    },
    registerMultiple () {
      this.$confirm('您将提交指定注册信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        const loading = this.$loading({
          lock: true,
          text: 'Submitting'
        })
        setTimeout(() => {
          loading.close()
          if (this.selectedRows.length === 0) {
            this.tableData.forEach((item, index) => {
              // Callback when HTTP request finishes
              this.register(item, (flag) => {
                if (flag) {
                  this.tableData.splice(index, 1)
                }
              })
            })
          } else {
            for (let i = 0; i < this.selectedRows.length; i++) {
              for (let j = 0; j < this.tableData.length; j++) {
                if (this.selectedRows[i] === this.tableData[j]) {
                  this.register(this.tableData[j], (flag) => {
                    if (flag) {
                      this.tableData.splice(j, 1)
                    }
                  })
                }
              }
            }
          }
          this.activeStep = 2
        }, 1000)
      })
    },
    // Dealing with file uploads
    handleBeforeUpload (file) {
      const loading = this.$loading({
        lock: true,
        text: 'Uploading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
        var formData = new FormData()
        formData.append('file', file)
        this.$http.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          console.log(res)
          if (res.status === 200 && res.body.status === '0') {
            console.log('res.msg: ' + res.body.msg)
            console.log('res.result.data: ' + res.body.result.data)
            this.$alert('恭喜！摘要文档提交成功', '提交成功', {
              confirmButtonText: '确定'
            }).then(() => {
              this.activeStep = 3
            })
          } else {
            console.log('res err, res.msg: ' + res.body.msg)
            this.$message.error(res.body.msg)
          }
        }).catch((err) => {
          console.log('POST err: ' + err)
        })
      }, 2000)
    },
    handleSubmitFile () {
      this.$confirm('此操作将提交所上传的摘要, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$refs.upload.submit()
      })
    },
    handleRemoveFile (file, fileList) {
      console.log(file, fileList)
    },
    handlePreviewFile (file) {},
    handleUploadSuccess () {}
  },
  watch: {
    localInfo: {
      handler (newObj, oldObj) {
        console.log('localInfo changed.')
        localStorage.setItem('localInfo', JSON.stringify(newObj))
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
    var temp = JSON.parse(localStorage.getItem('localInfo'))
    console.log('localInfo in localStorage: ')
    console.log(temp)
    if (temp !== null && temp.name !== '') {
      console.log('localInfo loaded from localStorage')
      this.localInfo = temp
    }
    var tempTable = JSON.parse(localStorage.getItem('tableData'))
    // 'tempTable === null || tempTable === []' cannot be used here
    if (tempTable.length !== 0 && tempTable !== []) {
      console.log('tempTable loaded from localStorage')
      this.tableData = tempTable
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
.popover-text {
  padding: .6rem;
}
.popover-text:not(:last-of-type) {
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
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
