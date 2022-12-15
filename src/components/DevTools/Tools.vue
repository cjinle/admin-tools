<template>
  <div>
    <h1>小工具</h1>
    <el-card>
      <el-form :inline="true">
        <el-row>
          <el-col :span="24" :offset="0">
              <el-form-item label="">
                <el-input v-model="text" placeholder="数值"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button-group>
                  <el-button type="primary" @click="toUnixTime">日期转时间戳</el-button>
                  <el-button type="default" @click="toDate">时间戳转日期</el-button>
                  <el-button type="default" @click="hexdec">16进制转10进制</el-button>
                  <el-button type="default" @click="dechex">10进制转16进制</el-button>
                </el-button-group>
              </el-form-item>
            
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" :offset="0">
              <el-form-item label="" class="url">
                <el-input v-model="urlText" autosize type="input" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button-group>
                  <el-button type="warning" @click="decodeBase64">Base64解码</el-button>
                  <el-button type="default" @click="decodeUrl">URL解码</el-button>
                </el-button-group>
              </el-form-item>
            
          </el-col>
        </el-row>
      </el-form>
      <el-row style="margin-top:20px;">
        <el-col :span="24">
          <pre v-show="showFormat" v-html="formatText" />
        </el-col>
      </el-row>
      
    </el-card>
  </div>
</template>
<script>

export default {
  name: 'DevTools',
  data() {
    return {
      text: "",
      urlText: "",
      showFormat: false,
      formatText: ""
    }
  },
  methods: {
    toDate() {
      var unix_timestamp = Number(this.text)*1000
      this.formatText = new Date(unix_timestamp).toISOString()
    },
    toUnixTime() {
      this.formatText = Number(Date.parse(this.text)/1000)
    },
    hexdec() {
      this.formatText = parseInt(this.text, 16)
    },
    dechex() {
      this.formatText = Number(this.text).toString(16)
    },
    decodeBase64() {
      try {
        this.formatText = atob(this.urlText)
      } catch (error) {
        this.formatText = error
      }
    },
    decodeUrl() {
      try {
        this.formatText = decodeURI(this.urlText)
      } catch (error) {
        this.formatText = error
      }
    }
  },
  watch: {
    formatText: {
      handler() {
        this.showFormat = true
      },
      deep: true
    }
  }

}
</script>
<style scoped>
.textarea{
  height: 500px;
}
pre{
  font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.3rem;
  word-break: break-all;
  word-wrap: break-word;
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.url .el-input{
  width: 500px;
}
</style>
