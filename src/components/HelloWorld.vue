<template>
  <div class="hello">
    <h1>Hello World</h1>
    <el-card v-loading="loading">
      <el-row>
        <el-col>
          <el-alert
            title="成功提示的文案"
            type="success">
          </el-alert>
          <el-alert
            title="消息提示的文案"
            type="info">
          </el-alert>
          <el-alert
            title="警告提示的文案"
            type="warning">
          </el-alert>
          <el-alert
            title="错误提示的文案"
            type="error">
          </el-alert>
        </el-col>
      </el-row>

      <el-row>
        <el-button @click="open">默认按钮</el-button>
        <el-button type="primary" icon="el-icon-search" @click="open2">主要按钮</el-button>
        <el-button @click="test" type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      
      <el-row>
        <el-col :span="12">
          <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
          <el-link type="primary">主要链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link type="warning">警告链接</el-link>
          <el-link type="danger">危险链接</el-link>
          <el-link type="info">信息链接</el-link>
        </el-col>
        <el-col :span="12">
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </el-col>
      </el-row>


      <el-row>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-switch
          v-model="value">
        </el-switch>
      </el-row>

      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-row>
    </el-card>

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    open() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$message('这是一条消息提示')
      }, 1000);
    },
    open2() {
      const h = this.$createElement
      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      })
      this.loading = false
    },
    test() {
      this.$FC.hello()
      console.log(this.$config)
    }
  },

  data() {
    console.log(this.axios)
    console.log(this)
    return {
      radio: '1',
      value: true,
      loading: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>
.yspan{
  margin: 20px 0;
}
</style>
