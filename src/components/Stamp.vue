<template>
  <div>
    <h1>集邮</h1>
    <el-card>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
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
            <el-form-item label="邮册">
              <el-select v-model="form.album" style="width:100%;" placeholder="">
                <el-option
                  v-for="album in albums"
                  :key="'album'+album.id"
                  :label="album.name"
                  :value="album.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="邮票">
              <el-select v-model="form.stamp" style="width:100%;" placeholder="">
                <el-option
                  v-for="stamp in stamps"
                  :key="'stamp'+stamp.id"
                  :label="stamp.name"
                  :value="stamp.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="邮票包">
              <el-select v-model="form.bag" style="width:100%;" placeholder="">
                <el-option
                  v-for="bag in bags"
                  :key="'bag'+bag.id"
                  :label="bag.name"
                  :value="bag.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="邮票包数量" prop="bagNum">
              <el-input v-model="form.bagNum"></el-input>
            </el-form-item>
            <el-form-item label="碎片" prop="shard">
              <el-input v-model="form.shard"></el-input>
            </el-form-item>
            <el-form-item label="通行证等级">
              <el-select v-model="form.gpLevel" style="width:100%;" placeholder="">
                <el-option
                  v-for="item in gpLevels"
                  :key="'gplevel'+item.id"
                  :label="item.name"
                  :value="item.id">
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
const albums = [ {id: 0, name:'选择'} ]
for (let i = 1; i <= 8; i++) {
  albums.push({id: i, name:'邮册'+i})
}

const stamps = [{id: 0, name:'选择'}, {id: 20, name:'添加全部'}, {id: 21, name:'清除全部'}]
for (let i = 1; i <= 12; i++) {
  stamps.push({id: i, name:'邮票'+i})
}

const bags = [
  {id: 0, name:'选择'},
  {id: 1, name:'邮票包1'},
  {id: 2, name:'邮票包2'},
  {id: 3, name:'邮票包3'},
  {id: 4, name:'邮票包4'},
  {id: 5, name:'邮票包5'}
]

const gpLevels = [{id: 0, name:'选择'}]
for (let i = 1; i <= 20; i++) {
  gpLevels.push({id: i, name:'等级'+i})
}

export default {
  name: 'Stamp',
  data() {
    const localData = this.$FC.getLocalData()
    return {
      form: {
        func: 'user.stamp',
        gid: localData?.gid,
        mid: localData?.mid,
        album: 0,
        stamp: 0,
        bag: 0,
        bagNum: 0,
        shard: 0,
        gpLevel: 0
      },
      albums: albums,
      stamps: stamps,
      bags: bags,
      gpLevels: gpLevels,
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
