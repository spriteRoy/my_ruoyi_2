<template>
  <div class="login">
    <!-- 
      规则校验的必要条件之一：
           :model="loginForm"
    -->
    <el-form
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
    >
      <h3 class="title">管理系统</h3>
      <el-form-item prop="username">
        <el-input type="text" placeholder="账号" v-model="loginForm.username" />
      </el-form-item>
      <!-- 
      规则校验的必要条件之一：
           prop="password"
      -->
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="密码"
          v-model="loginForm.password"
        />
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          style="width: 63%"
          placeholder="验证码"
          v-model="loginForm.code"
        />
        <div class="login-code">
          <img :src="codeUrl" class="login-code-img" @click="getCode" />
        </div>
      </el-form-item>
      <el-checkbox
        v-model="loginForm.rememberMe"
        style="margin: 0px 0px 25px 0px"
        >记住密码</el-checkbox
      >
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%"
          @click.native="handleLogin"
        >
          <span>登录</span>
        </el-button>
      </el-form-item>
    </el-form>
    <div class="el-login-footer">
      <span>Copyright © 2018-2023 ruoyi.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import { getCodeImg, login } from "@/api/login";
export default {
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
        code: "",
        uuid: "",
      },
      captchaEnabled: true,
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" },
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" },
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }],
      },
    };
  },
  methods: {
    getCode() {
      getCodeImg().then((res) => {
        this.captchaEnabled =
          res.captchaEnabled === undefined ? true : res.captchaEnabled;
        // 问题：验证码开关captchaEnabled有什么作用
        // ① captchaEnabled字段表示后端接口是否可以返回一个验证码图像，如果为false，则无法返回，对应的Login.vue组件就不会显示验证码这一项；反之为true时，则后端接口会返回一个Base64字符串形式的验证码图像。这个逻辑是基于Vue的v-if条件渲染实现的。
        // https://betheme.net/dashuju/59246.html?action=onClick
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          // uuid字段，对应的是后端存储在Redis缓存中的图像验证码表达式的正确计算结果，当用户点击登录时，会在loginForm属性中随着用户名、密码、是否记住密码、用户输入的验证码值一起被提交给后端接口，凭借这个uuid，后端接口在进行用户登录验证时，可以与Redis中存储的正确计算结果进行对比，以此判断用户登录信息是否有误。
          this.loginForm.uuid = res.uuid;
        }
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const username = this.loginForm.username;
          const password = this.loginForm.password;
          const code = this.loginForm.code;
          const uuid = this.loginForm.uuid;
          login(username, password, code, uuid).then((res) => {
            console.log("登录被点击了");
            console.log(res);
          });
        } else {
          console.log("shibai");
        }
      });
    },
  },
  created() {
    this.getCode();
  },
};
</script>

<style>
.login {
  height: 100%;
  background-image: url("~@/assets/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  background-color: pink;
  padding: 25px 25px 5px 25px;
}
.el-login-footer {
  position: fixed;
  bottom: 0;
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
  font-family: Arial;
}
.login-code {
  width: 33%;
  float: right;
}
.login-code-img {
  height: 38px;
}
</style>