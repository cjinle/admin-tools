<template>
  <div>
    <h1>多福多宝老虎机设置图标</h1>
    <el-card>
      <el-row>
        <el-col :span="22" :offset="1">
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
                <el-form-item label="用户ID">
                  <el-input v-model="form.mid"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="图标">
                  <el-row>
                    <el-col :span="4" v-for="x in [0,1,2,3,4]" :key="'row'+x">
                      <el-select v-model="form.icon[x]" style="width:100%;">
                        <el-option
                          v-for="icon in iconCfg"
                          :key="'id'+icon.id"
                          :label="icon.name"
                          :value="icon.id">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="4" v-for="x in [5,6,7,8,9]" :key="'row'+x">
                      <el-select v-model="form.icon[x]" style="width:100%;">
                        <el-option
                          v-for="icon in iconCfg"
                          :key="'id'+icon.id"
                          :label="icon.name"
                          :value="icon.id">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="4" v-for="x in [10,11,12,13,14]" :key="'row'+x">
                      <el-select v-model="form.icon[x]" style="width:100%;">
                        <el-option
                          v-for="icon in iconCfg"
                          :key="'id'+icon.id"
                          :label="icon.name"
                          :value="icon.id">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
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

const iconCfg = [
  {id: 1, name: "A"},
  {id: 2, name: "J"},
  {id: 3, name: "Q"},
  {id: 4, name: "K"},
  {id: 5, name: "爆竹"},
  {id: 6, name: "鲤鱼"},
  {id: 7, name: "金龟"},
  {id: 8, name: "麒麟"},
  {id: 9, name: "童子"},
  {id: 10, name: "WILD"},
  {id: 11, name: "SCATTER"},
  {id: 12, name: "JACKPOT"}
]

export default {
  name: 'SlotsFubao',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      iconCfg: iconCfg,
      form: {
        func: 'game.slotsv4SetIcon',
        gid: localData?.gid,
        playid: 52,
        icon: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        mid: localData?.mid
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
      this.$http.post(this.$config.api, {func: 'game.slotsv4Icon',gid: this.form.gid,mid: this.form.mid}).then(res=>{
        this.loading = false
        if (res.data.ret != 0) {
          return false
        }
        this.form.icon = res.data.data        
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
        this.$FC.saveLocalData({gid: this.form.gid,mid: this.form.mid});
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
      this.$http.post(this.$config.api, {func: 'game.slostv4DelIcon',gid: this.form.gid,playid:this.form.playid,mid: this.form.mid}).then(res=>{
        if (res.data.ret === 0) {
          this.$message.success("操作成功！" + res.data?.msg)
          this.form.icon = []
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
