<template>
  <div id="box">
    <div id="top">
      <img id="logo" src="~assets/logo.png" height="32dp" style="margin-left: 30px"/>
      <div id="search">
        <el-input
          style="width: 100%;"
          size="small"
          v-model="serchInput"
          placeholder="搜索用户|博文|问答"
          prefix-icon="el-icon-search"
          width="100px"
        />
      </div>
      <div id="user">
        <div v-if="user != null" id="logined">
          <el-dropdown size="small" :hide-on-click="false" @command="handleCommand">
            <span class="el-dropdown-link">
              <img
                id="prifile"
                :src="user.userImage"
                width="32px"
                height="32px"
                style=" border-radius: 50% "
              />
              <span id="username" style="color: var(--color-basis)">{{user.name}}</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
              <el-dropdown-item command="个人主页">个人主页</el-dropdown-item>
              <el-dropdown-item command="我的博客">我的博客</el-dropdown-item>
              <el-dropdown-item command="我的问答">我的问答</el-dropdown-item>
              <el-dropdown-item command="我的设置">我的设置</el-dropdown-item>
              <el-dropdown-item command="退出" divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-else id="no_logined">
          <a @click="showLoginDialog = true">登入</a>
          <a @click="showRegisterDialog = true">注册</a>
        </div>
      </div>
    </div>
    <div id="router">
      <ul>
        <li @click="changeRouter('home')">首页</li>
        <li @click="changeRouter('blog')">博客</li>
        <li @click="changeRouter('help')">问答</li>
        <li>资讯</li>
        <li>附近</li>
        <li>活动</li>
        <li>招聘</li>
      </ul>
    </div>
    <div id="loginDialog">
      <el-dialog title="登录" :visible.sync="showLoginDialog" width="30%" center>
        <div id="counterLogin">
          <el-tabs value="counterLogin">
            <el-tab-pane label="账号登陆" name="counterLogin">
              <el-input  v-model="logining.userName" maxlength="30" placeholder="请输入用户名|邮箱"></el-input>
              <el-input class="input_margin" show-password v-model="logining.password" maxlength="14" placeholder="请输入密码"></el-input>
              <div id="loginningSelect">
                <el-checkbox v-model="autoLogin">记住密码</el-checkbox>
                <router-link id="unRemberPassword" to="home">忘记密码？</router-link>
              </div>
              <div class="loginButtns">
                <el-button class="button" type="primary">登陆</el-button>
                <el-button class="button" type="primary">刷脸登陆</el-button>
              </div>
              <p class="havenOrNoAccount" @click="tranformToRegisterDialog()">没有账号?</p>
              <div id="otherLogin">
                <p>第三方登陆</p>
                <div id="otherItems"></div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="手机快捷登陆" name="mobileLogin">
              <el-input v-model="logining.userName" maxlength="11" placeholder="请输手机号码"></el-input>
              <div class="verification">
                <el-input class="verification_code input_margin" v-model="logining.userName" maxlength="6"
                          placeholder="请输验证码"></el-input>
                <el-button id="login_comfirm_btn" type="primary" class="verification_code_btn input_margin" @click="requirePhoneLoginVerificationRode">{{phoneLoginRodeText}}</el-button>
              </div>
              <div class="loginButtns">
                <el-button class="button " type="primary">登陆</el-button>
                <el-button class="button" type="primary">刷脸登陆</el-button>
              </div>
              <p class="havenOrNoAccount" @click="tranformToRegisterDialog()">没有账号?</p>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-dialog>
    </div>
    <div id="registerDialog">
      <el-dialog title="注册" :visible.sync="showRegisterDialog" width="30%" center>
        <el-tabs value="registerByMobile">
          <el-tab-pane label="手机注册" name="registerByMobile">
            <el-input v-model="registeration.phoneNumber" maxlength="11" placeholder="请输手机号码"></el-input>
            <el-input class="input_margin" v-model="logining.password" show-password maxlength="14" placeholder="请输入密码"></el-input>
            <el-input class="input_margin" v-model="logining.password" show-password maxlength="14" placeholder="再输入一次密码"></el-input>
            <div class="verification input_margin" >
              <el-input class="verification_code" v-model="registeration.verificationCode" maxlength="6"
                        placeholder="请输验证码"></el-input>
              <el-button  id="register_ph_com_bttn" class="verification_code_btn" type="primary" @click="requirePhoneVerificationRode">
                {{phoneVerificationRodeText}}
              </el-button>
            </div>
            <el-button class="registerationButton" type="primary">注册</el-button>
            <p class="havenOrNoAccount" @click="tranformToLoginDialog()">已有账号!</p>
          </el-tab-pane>
          <el-tab-pane label="邮箱注册" name="registerByEmail">
            <el-input  v-model="logining.userName" maxlength="30" placeholder="请输入用户名|邮箱"></el-input>
            <el-input class="input_margin" show-password v-model="logining.password" maxlength="14" placeholder="请输入密码"></el-input>
            <el-input class="input_margin" show-password v-model="logining.confirmPassword" maxlength="14" placeholder="请再输入一次密码"></el-input>
            <div class="verification input_margin">
              <el-input class="verification_code" v-model="registeration.verificationCode" maxlength="6"
                        placeholder="请输验证码"></el-input>
              <el-button id="register_email_comfir_bttn" class="verification_code_btn" type="primary" @click="requireEmailVerificationRode">
                {{emailVerificationRodeText}}
              </el-button>
            </div>
            <el-button class="registerationButton" type="primary">注册</el-button>
            <p class="havenOrNoAccount" @click="tranformToLoginDialog()">已有账号!</p>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
    </div>
  </div>
</template>

<script>
 import por from "./js/index.js"

 export default  por;
</script>

<style>
</style>
