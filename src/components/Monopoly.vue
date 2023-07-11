<template>
  <div>
    <h1>大富翁</h1>
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
            <el-form-item label="骰子">
              <el-select v-model="form.dice" style="width:100%;" placeholder="">
                <el-option
                  v-for="dice in dices"
                  :key="'dice'+dice.id"
                  :label="dice.name"
                  :value="dice.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="船等级">
              <el-select v-model="form.level" style="width:100%;" placeholder="">
                <el-option
                  v-for="level in levels"
                  :key="'level'+level.id"
                  :label="level.name"
                  :value="level.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="船票" prop="ticket" required>
              <el-input v-model="form.ticket"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8" :offset="2" v-loading="sendLoading">
          <el-row>
            <h3>统一发奖</h3>
            <el-popconfirm
              title="确定要进行统一发奖操作吗？"
              @confirm="onReward"
            >
              <el-button slot="reference" type="warning">发奖</el-button>
            </el-popconfirm>
          </el-row>
          <el-row>
            <h3>删除发奖励缓存</h3>
            <el-popconfirm
              title="确定要删除缓存吗？"
              @confirm="onDelete"
            >
              <el-button slot="reference" type="danger">删除</el-button>
            </el-popconfirm>
          </el-row>
        </el-col>
      </el-row>
      
    </el-card>
  </div>
</template>
<script>
const levels = [
  {id: 0, name:'默认'},
  {id: 1, name:'Lv.1'},
  {id: 2, name:'Lv.2'},
  {id: 3, name:'Lv.3'},
  {id: 4, name:'Lv.4'},
  {id: 5, name:'Lv.5'},
  {id: 6, name:'Lv.6'},
  {id: 7, name:'Lv.7'}
]
const dices = [
  {id: 0, name:'随机'},
  {id: 1, name:'点数1'},
  {id: 2, name:'点数2'},
  {id: 3, name:'点数3'},
  {id: 4, name:'点数4'},
  {id: 5, name:'点数5'},
  {id: 6, name:'点数6'}
]
export default {
  name: 'Monopoly',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      form: {
        func: 'act.monopoly',
        gid: localData?.gid,
        mid: localData?.mid,
        dice: 0,
        level: 0,
        ticket: '',
        send: 0
      },
      levels: levels,
      dices: dices,
      rules: {
        ticket: [
          { required: true, message: '请输入船票数量', trigger: 'blur' }
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
    onReward() {
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
    },
    onDelete() {
      this.sendLoading = true
      const param = {
        func: this.form.func,
        gid: this.form.gid,
        send: 2
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
