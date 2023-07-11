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
      <el-menu-item index="/playtime" route="/playtime">玩牌时长</el-menu-item>
      <el-menu-item index="/payamount" route="/payamount">充值金额</el-menu-item>
      <el-menu-item index="/mtime" route="/mtime">修改注册时间</el-menu-item>
      <el-menu-item index="/invite" route="/invite">邀请好友</el-menu-item>
      <el-menu-item index="/timepromo" route="/timepromo">限时特惠</el-menu-item>
      <el-menu-item index="/newbie" route="/newbie">新手三天</el-menu-item>
      <el-menu-item index="/prop" route="/prop">清除道具</el-menu-item>
      <el-menu-item index="/continuous" route="/continuous">连续签到</el-menu-item>
      <el-menu-item index="/onlinebox" route="/onlinebox">宝箱时间</el-menu-item>
      <el-menu-item index="/region" route="/region">用户地区</el-menu-item>
      <el-menu-item index="/voucher" route="/voucher">用户奖券</el-menu-item>
      <el-menu-item index="/lastpaytime" route="/lastpaytime">上次支付时间</el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title"><i class="el-icon-present"></i>活动数据</template>
      <el-menu-item index="/actscore" route="/actscore">普通积分</el-menu-item>
      <el-menu-item index="/exchange" route="/exchange">积分兑换</el-menu-item>
      <el-menu-item index="/sevendays" route="/sevendays">七天任务</el-menu-item>
      <el-menu-item index="/puzzle" route="/puzzle">拼图活动</el-menu-item>
      <el-menu-item index="/playscorerank" route="/playscorerank">玩牌积分排行榜</el-menu-item>
      <el-menu-item index="/paylottery" route="/paylottery">充值抽大奖</el-menu-item>
      <el-menu-item index="/monopoly" route="/monopoly">大富翁</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title"><i class="el-icon-discover"></i>游戏数据</template>
      <el-menu-item index="/signwheel" route="/signwheel">签到转盘</el-menu-item>
      <el-menu-item index="/taskactive" route="/taskactive">任务活跃度</el-menu-item>
      <el-menu-item index="/slotsv4" route="/slotsv4">老虎机图标</el-menu-item>
      <el-menu-item index="/slotsv4wheel" route="/slotsv4wheel">老虎机转盘</el-menu-item>
      <el-menu-item index="/slotsjungle" route="/slotsjungle">丛林老虎机</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title"><i class="el-icon-s-promotion"></i>开发工具</template>
      <el-menu-item index="/jsonformat" route="/jsonformat">JSON格式化</el-menu-item>
      <el-menu-item index="/tools" route="/tools">小工具</el-menu-item>
      <el-menu-item index="/websocket" route="/websocket">WebSocket</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>


export default {
  name: "Menu",
  props: {},
  data() {
    return {
      loading: false
    };
  }
};
</script>

