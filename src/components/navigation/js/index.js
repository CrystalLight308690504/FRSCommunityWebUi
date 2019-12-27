import "../css/index.css";
import $ from 'jquery'
export default {
  props: {
    user:Object
  },
  data() {
    return {
      phoneVerificationRodeText: "获取验证码",
      emailVerificationRodeText: "获取验证码",
      phoneLoginRodeText: "获取验证码",
      autoLogin: true,
      logining: {
        userName: "",
        password: "",
        confirmPassword:""
      },
      registeration: {
        phoneNumber: "",
        verificationCode: ""
      },
      showLoginDialog: false,
      showRegisterDialog: false,
      serchInput: ""
    };
  },
  watch: {

  },
  computed:{

  },
  methods: {
    changeRouter(router) {
      this.$router.push(router);
    },
    handleCommand(command) {
      this.$message(command);
      switch (command) {
        case "退出":
          this.$emit("setUser",null)
          break;
      }
    },
    login() {
    },
    setComfBtnState(btn_id,isable){
      if(isable){
        $(btn_id).eq(0).css('backgroundColor', '#409EFF');
        $(btn_id).attr("disabled", false)
      }else {
        $(btn_id).eq(0).css('backgroundColor', '#cccccc');
        $(btn_id).attr("disabled", true);
      }
      ;
    }
    ,
    requirePhoneVerificationRode() {
      this.setComfBtnState('#register_ph_com_bttn',false);
      var info = setInterval(()=>{
        this.phoneVerificationRodeText = "已发送(" + (++s) +")";
      },500);
      var s = 0;
      setTimeout(()=>{
        clearInterval(info);
        this.setComfBtnState('#register_ph_com_bttn',true);
        this.phoneVerificationRodeText = "获取验证码";
      },15000);

    },
    requireEmailVerificationRode() {
      this.setComfBtnState('#register_email_comfir_bttn',false);
      var info = setInterval(()=>{
        this.emailVerificationRodeText = "已发送(" + (++s) +")";
      },500);
      var s = 0;
      setTimeout(()=>{
        clearInterval(info);
        this.setComfBtnState('#register_email_comfir_bttn',true);
        this.emailVerificationRodeText = "获取验证码";
      },15000);
    },
    requirePhoneLoginVerificationRode() {
      this.setComfBtnState('#login_comfirm_btn',false);
      var info = setInterval(()=>{
        this.phoneLoginRodeText = "已发送(" + (++s) +")";
      },500);
      var s = 0;
      setTimeout(()=>{
        clearInterval(info);
        this.setComfBtnState('#login_comfirm_btn',true);
        this.phoneLoginRodeText = "获取验证码";
      },15000);

    },
    register() {
    },
    tranformToLoginDialog() {
      this.showLoginDialog = true;
      this.showRegisterDialog = false;
    },
    tranformToRegisterDialog() {
      this.showLoginDialog = false;
      this.showRegisterDialog = true;
    }
  }
};
