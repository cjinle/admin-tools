<template>
  <div>
    <h1>JSON格式化</h1>
    <el-card>
      <el-row>
        <el-col :span="24" :offset="0">
          <el-input type="textarea" v-model="text" :rows="5"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-top:20px;">
        <el-col :span="24">
          <pre v-show="showFormat" v-html="formatText" />
        </el-col>
      </el-row>
      
    </el-card>
  </div>
</template>
<script>

import formatHighlight from 'json-format-highlight'

export default {
  name: 'DevJsonFormat',
  data() {
    return {
      text: "",
      formatText: "",
      showFormat: false
    }
  },
  methods: {
    format(){
      
      try {
        var obj = JSON.parse(this.text)
      } catch (error) {
        this.formatText = error
        return
      }
      this.formatText = formatHighlight(obj, {
        keyColor: '#CC0000',
        numberColor: '#AA00AA',
        stringColor: '#007777',
        trueColor: '#0000FF',
        falseColor: '#0000FF',
        nullColor: '#0000FF'
      })
      
      if (this.formatText.length > 0) {
        this.showFormat = true
      }
    }
  },
  watch: {
    text: {
      handler() {
        this.format()
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
  line-height: 1.428571429;
  word-break: break-all;
  word-wrap: break-word;
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
