<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="16">
        <el-container>
          <el-header>
            <Menu />
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer class="footer">Ver: {{ version }}</el-footer>
        </el-container>
      </el-col>
    </el-row>
    
  </div>

</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      version: this.$config.version
    }
  }
}

</script>

<style>
body{
  margin:0;
  padding:0;
  background-color: #f6f6f6;
}
.footer{
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-top: 20px;
}
</style>
