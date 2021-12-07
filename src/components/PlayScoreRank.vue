<template>
  <div>
    <h1>玩牌积分排行榜 - 添加玩牌时长</h1>
    <el-card>
      <el-row>
        <el-col :span="8" :offset="4">
          <el-form ref="form" :model="form" :rules="rules" label-width="120px" v-loading="loading">
            <el-form-item label="游戏平台">
              <el-select v-model="form.gid" style="width:100%;" placeholder="请选择游戏平台">
                <el-option
                  v-for="game in games"
                  :key="'gid'+game.id"
                  :label="game.name"
                  :value="game.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户ID">
              <el-input v-model="form.mid"></el-input>
            </el-form-item>
            <el-form-item label="底注" prop="basechip" required>
              <el-input v-model="form.basechip"></el-input>
            </el-form-item>
            <el-form-item label="时间" prop="value" required>
              <el-input v-model="form.value">
                <template slot="append">分钟</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8" :offset="2" v-loading="sendLoading">
          <h3>统一发奖</h3>
          <el-popconfirm
            title="确定要进行统一发奖操作吗？"
            @confirm="onSend"
          >
            <el-button slot="reference" type="danger">发奖</el-button>
          </el-popconfirm>
        </el-col>
      </el-row>
      
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'SevenDays',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      form: {
        func: 'act.playscorerank',
        gid: localData?.gid,
        mid: localData?.mid,
        basechip: '',
        value: '',
        send: 0
      },
      rules: {
        basechip: [
          { required: true, message: '请输入底注', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请输入时间', trigger: 'blur' }
        ]
      },
      games: this.$FC.games,
      loading: false,
      sendLoading: false
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          return false
        }
        this.loading = true
        this.$FC.saveLocalData(this.form);
        this.$http.post(this.$config.api, this.form).then(res=>{
          if (res.data.ret === 0) {
            this.$message.success("操作成功！" + res.data?.msg)
          } else {
            this.$message.warning("操作失败！" + res.data?.msg)
          }
          this.loading = false
        }).catch(err=>{
          this.$message.error(err.message)
          this.loading = false
        })
      })
    },
    onSend() {
      this.sendLoading = true
      const param = {
        func: this.form.func,
        gid: this.form.gid,
        send: 1
      }
      this.$http.post(this.$config.api, param).then(res=>{
        if (res.data.ret === 0) {
          this.$message.success("操作成功！" + res.data?.msg)
        } else {
          this.$message.warning("操作失败！" + res.data?.msg)
        }
        this.sendLoading = false
      }).catch(err=>{
        this.$message.error(err.message)
        this.sendLoading = false
      })
    }
  }
}
</script>
