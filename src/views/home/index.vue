<template>
  <el-row>

    <!--导航栏开始-->
    <el-col :span="3">
      <h5></h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="recommend">
          <i class="el-icon-view"></i>
          <span slot="title">推荐</span>
        </el-menu-item>
        <el-menu-item index="attended">
          <i class="el-icon-refrigerator"></i>
          <span slot="title">关注</span>
        </el-menu-item>
        <el-menu-item index="speedRoll">
          <i class="el-icon-coffee"></i>
          <span slot="title">速滑</span>
        </el-menu-item>
        <el-menu-item index="speedRunStack">
          <i class="el-icon-lollipop"></i>
          <span slot="title">速桩</span>
        </el-menu-item>
        <el-menu-item index="rollerDancer">
          <i class="el-icon-ice-cream-square"></i>
          <span slot="title">轮舞</span>
        </el-menu-item>
        <el-menu-item index="variousRoundStack">
          <i class="el-icon-ice-cream-round"></i>
          <span slot="title">花式绕桩</span>
        </el-menu-item>
        <el-menu-item index="variousBrakeStop">
          <i class="el-icon-ice-drink"></i>
          <span slot="title">花式刹停</span>
        </el-menu-item>
        <el-menu-item index="rollerSkatingRoll">
          <i class="el-icon-potato-strips"></i>
          <span slot="title">轮滑球</span>
        </el-menu-item>
        <el-menu-item index="entertainingRollerSkating">
          <i class="el-icon-pear"></i>
          <span slot="title">即兴轮滑</span>
        </el-menu-item>
        <el-menu-item index="AggressiveiSkating">
          <i class="el-icon-watermelon"></i>
          <span slot="title">极限轮滑</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <!--导航栏结束-->

    <!--右侧内容开始-->
    <el-col :span="20">

    </el-col>
  </el-row>
</template>

<script>

  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
</style>
