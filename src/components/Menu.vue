<template>
  <el-menu 
    router 
    :default-active="$route.path"
    mode="horizontal" 
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    >
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-user"></i>用户数据</template>
      <el-menu-item
        v-for="(menu, idx) in menu1" 
        :key="'menu1-'+idx"
        :index="menu.path" 
        :route="menu.path" 
        >{{menu.name}}
      </el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title"><i class="el-icon-present"></i>活动数据</template>
      <el-menu-item
        v-for="(menu, idx) in menu2" 
        :key="'menu2-'+idx"
        :index="menu.path" 
        :route="menu.path" 
        >{{menu.name}}
      </el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title"><i class="el-icon-discover"></i>游戏数据</template>
      <el-menu-item
        v-for="(menu, idx) in menu3" 
        :key="'menu3-'+idx"
        :index="menu.path" 
        :route="menu.path" 
        >{{menu.name}}
      </el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title"><i class="el-icon-s-promotion"></i>开发工具</template>
      <el-menu-item
        v-for="(menu, idx) in menu4" 
        :key="'menu4-'+idx"
        :index="menu.path" 
        :route="menu.path" 
        >{{menu.name}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>

const menu1 = [
  {"path": "/playtime", "name": "玩牌时长"},
  {"path": "/payamount", "name": "充值金额"},
  {"path": "/winmoney", "name": "累计赢取筹码"},
  {"path": "/mtime", "name": "修改注册时间"},
  {"path": "/invite", "name": "邀请好友"},
  {"path": "/timepromo", "name": "限时特惠"},
  {"path": "/newbie", "name": "新手三天"},
  {"path": "/prop", "name": "清除道具"},
  {"path": "/continuous", "name": "连续签到"},
  {"path": "/onlinebox", "name": "宝箱时间"},
  {"path": "/region", "name": "用户地区"},
  {"path": "/voucher", "name": "用户奖券"},
  {"path": "/lastpaytime", "name": "上次支付时间"}
]

const menu2 = [
  {"path": "/actscore", "name": "普通积分"},
  {"path": "/exchange", "name": "积分兑换"},
  {"path": "/sevendays", "name": "七天任务"},
  {"path": "/puzzle", "name": "拼图活动"},
  {"path": "/playscorerank", "name": "玩牌积分排行榜"},
  {"path": "/paylottery", "name": "充值抽大奖"},
  {"path": "/monopoly", "name": "大富翁"}
]

const menu3 = [
  {"path": "/signwheel", "name": "签到转盘"},
  {"path": "/taskactive", "name": "任务活跃度"},
  {"path": "/slotsv4", "name": "老虎机图标"},
  {"path": "/slotsv4wheel", "name": "老虎机转盘"},
  {"path": "/slotsjungle", "name": "丛林老虎机"},
  {"path": "/slotsfubao", "name": "多福多宝老虎机"},
  {"path": "/stamp", "name": "集邮"}
]

const menu4 = [
  {"path": "/jsonformat", "name": "JSON格式化"},
  {"path": "/tools", "name": "小工具"},
  {"path": "/websocket", "name": "WebSocket"}
]

export default {
  name: "Menu",
  props: {},
  data() {
    return {
      menu1: menu1,
      menu2: menu2,
      menu3: menu3,
      menu4: menu4,
      loading: false
    };
  }
};
</script>

