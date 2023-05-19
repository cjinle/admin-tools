<template>
  <div>
    <h1>老虎机转盘概率</h1>
    <el-card>
      <el-row>
        <el-col :span="24" :offset="4">
          <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
            <el-row>
              <el-col :span="8">
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
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item :label="x.name" v-for="x in wheelCfg" :key="'input'+x.id">
                  <el-input v-model="form.pr[x.id]"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item>
                  <el-button type="danger" @click="onDel">删除</el-button>
                </el-form-item>
              </el-col>
            </el-row>

          </el-form>
        </el-col>
      </el-row>
      
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Slotsv4Wheel',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      wheelCfg: [],
      form: {
        func: 'game.slotsv4SetWheelPr',
        gid: localData?.gid,
        pr: [0,0,0,0,0,0,0,0,0]
      },
      games: this.$FC.games,
      loading: false
    }
  },
  created() {
    this.onInit()
  },
  methods: {
    onInit() {
      this.loading = true
      this.$http.post(this.$config.api, {func: 'game.slotsv4WheelPr',gid: this.form.gid}).then(res=>{
        this.loading = false
        if (res.data.ret != 0) {
          return false
        }
        this.wheelCfg = res.data.data
        this.wheelCfg.forEach((v, i)=>{
          this.form.pr[i] = v.pr
        })
      }).catch(err=>{
        this.$message.error(err.message)
        this.loading = false
      })
    },
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          return false
        }
        this.loading = true
        this.$FC.saveLocalData({gid: this.form.gid});
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
    onDel() {
      this.loading = true
      this.$FC.saveLocalData({gid: this.form.gid});
      this.$http.post(this.$config.api, {func: 'game.slostv4DelWheelPr',gid: this.form.gid}).then(res=>{
        if (res.data.ret === 0) {
          this.$message.success("操作成功！" + res.data?.msg)
          this.form.pr = []
        } else {
          this.$message.warning("操作失败！" + res.data?.msg)
        }
        this.loading = false
      }).catch(err=>{
        this.$message.error(err.message)
        this.loading = false
      })
    }
  }
}
</script>
