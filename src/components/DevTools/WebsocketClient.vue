<template>
  <div>
    <h1>WebSocket Online Test</h1>
    <el-card>
      <el-form :inline="true">
        <el-row>
          <el-col :span="24" :offset="0">
              <el-form-item label="" class="wsurl">
                <el-input v-model="wsurl" placeholder="ws地址"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="connect">Connect</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="close">Close</el-button>
              </el-form-item>
            
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" :offset="0">
              <el-form-item label="">
                <el-input v-model="msgid" placeholder="消息ID">
                  <template slot="prepend">0x</template>
                </el-input>
              </el-form-item>
              <el-form-item label="" class="wscontent">
                <el-input v-model="content" autosize type="input" placeholder="消息内容"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="send">Send</el-button>
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


import { pack, unpack } from '../../message'

export default {
  name: 'DevWebsocketClient',
  data() {
    return {
      wsurl: "ws://192.168.56.101:8080",
      msgid: '1',
      content: "",
      showFormat: false,
      formatText: "",
      socket: undefined,
      isConnected: false
    }
  },
  methods: {
    connect() {
      if (this.isConnected) {
        this.socket.close()
        this.socket = undefined
        this.isConnected = false
      }
      this.socket = new WebSocket(this.wsurl)
      this.socket.binaryType = "arraybuffer"
      this.socket.onmessage = (event) => {
        console.log("receive", event.data)
        let msg = unpack(event.data)
        console.log("msg", msg)
        this.formatText = JSON.stringify(msg, null, 2)
      }
      this.socket.onclose = (event) => {
        console.log("close", event)
        this.isConnected = false
      }
      this.isConnected = true
    },
    close() {
      if (!this.isConnected) {
        return 
      }
      this.socket.close()
    },
    send() {
      if (!this.isConnected) {
        this.connect()
        return
      }
      let cmd = Number(`0x${this.msgid}`)
      this.socket.send(pack(cmd, this.content))
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
.wsurl .el-input{
  width: 300px;
}
.wscontent .el-input{
  width: 500px;
}
</style>
