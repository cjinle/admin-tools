<template>
  <div>
    <h1>清除用户道具</h1>
    <el-card>
      <el-row>
        <el-col :span="10" :offset="6">
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
            <el-form-item label="道具类型">
              <el-radio-group v-model="form.value" size="small">
                <el-radio-button label="1">VIP</el-radio-button>
                <el-radio-button label="2">蓝钻</el-radio-button>
                <el-radio-button label="3">红钻</el-radio-button>
                <el-radio-button label="4">房卡</el-radio-button>
                <el-radio-button label="5">小喇叭</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Newbie',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      form: {
        func: 'user.prop',
        gid: localData?.gid,
        mid: localData?.mid,
        value: '1'
      },
      rules: {

      },
      games: this.$FC.games,
      loading: false
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
    }
  }
}
</script>
