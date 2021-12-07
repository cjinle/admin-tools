<template>
  <div>
    <h1>设置用户地区</h1>
    <el-card>
      <el-row>
        <el-col :span="8" :offset="6">
          
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
            <el-form-item label="地区">
              <el-select v-model="form.value" style="width:100%;" placeholder="请选择游戏平台">
                <el-option
                  v-for="region in regions"
                  :key="'region'+region.id"
                  :label="region.name"
                  :value="region.id">
                </el-option>
              </el-select>
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
  name: 'Region',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      form: {
        func: 'user.region',
        gid: localData?.gid,
        mid: localData?.mid,
        value: '156'
      },
      rules: {
      },
      regions: [
        { id: '156', name: '中国' },
        { id: '104', name: '缅甸' },
        { id: '360', name: '印尼' },
        { id: '418', name: '老挝' },
        { id: '458', name: '马来西亚' },
        { id: '702', name: '新加坡' },
        { id: '704', name: '越南' },
        { id: '764', name: '泰国' }
      ],
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
        console.log(this.form)
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
