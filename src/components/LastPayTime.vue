<template>
  <div>
    <h1>最后支付时间</h1>
    <el-card>
      <el-row>
        <el-col :span="8" :offset="5">
          <el-form ref="form" :model="form" :rules="rules" label-width="180px" v-loading="loading">
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
            <el-form-item label="上次支付时间" prop="value" required>
              <el-date-picker type="date" placeholder="选择日期" v-model="form.value" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="清除幸运礼包缓存">
              <el-switch
                v-model="form.delLuckyPromoCache">
              </el-switch>
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
  name: 'LastPayTime',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      form: {
        func: 'user.lastpaytime',
        gid: localData?.gid,
        mid: localData?.mid,
        delLuckyPromoCache: 0,
        value: ''
      },
      rules: {
        value: [
          { required: true, message: '请选择日期', trigger: 'blur' }
        ]
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
