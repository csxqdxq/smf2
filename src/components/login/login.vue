<script setup>
import {reactive} from "vue";


const info = reactive({
  remember: false,
  isLogin: true,
  username: '',
  password: '',
  email: ''
})

</script>

<template>
  <div class="login-max-box children-center">
    <div class="basemap"></div>
    <div class="login-box">
      <div class="login-title children-row-center">
        <b>{{info.isLogin?'登录' : '注册'}}</b>
      </div>
      <div class="login-form">
        <label class="children-row-center">
          <input type="text" placeholder="用户名" class="white-input" v-model="info.username">
        </label>
        <label class="children-row-center">
          <input type="password" placeholder="密码" class="white-input" v-model="info.password">
        </label>
        <label class="children-row-center" v-show="info.isLogin">
          <el-switch class="login-switch" v-model="info.remember" active-text="记住密码"/>
          <el-link class="login-forget" type="primary">忘记密码？</el-link>
        </label>
        <label class="children-row-center" v-show="!info.isLogin">
          <input type="text" placeholder="邮箱" class="white-input" v-model="info.email">
        </label>
        <label class="children-row-center">
          <button class="login-btn">{{info.isLogin?'登录':'注册'}}</button>
        </label>
        <div class="children-row-center">
          <el-link type="primary" @click="info.isLogin=!info.isLogin">{{info.isLogin?'注册':'登录'}}</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.basemap {
  width: 100%;
  height: 100%;
  background: brown;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
}

.login-max-box {
  width: 100%;
  height: 100%;
}

.login-title {
  font-size: 1.5rem;
}

.login-form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.login-form > label {
  padding: 5px;
  width: 100%;
  height: 30px;
  position: relative;
  margin-top: 5px;
}

.login-forget {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
}

.login-switch {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.login-btn {
  width: 180px;
  background-color: #933df9;
  height: 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>