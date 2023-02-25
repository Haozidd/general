<template>
  <div id="login">

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>General Background Management System</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="username" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login('form')">login</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {nameRule, passwordRule} from "@/utils/validate";
import {DealLogin} from "@/utils/dealApiData";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: 'admin',
        password: 'abcABC123!ABC',
      },
      rules: {
        username: [{validator: nameRule, trigger: 'blur'}],
        password: [{validator: passwordRule, trigger: 'blur'}],
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          new DealLogin(this).reqLogin(this.form)
        } else {
          console.error('validate fail')
        }
      })
    }
  }
}
</script>

<style lang="scss">
#login {
  height: 100%;
  width: 100%;
  background: transparent;

  .box-card {
    position: relative;
    width: 500px;
    margin: auto;
    top: 20%;
    background: transparent;

    .el-button {
      width: 100px;
    }

    .el-card__header {
      font-size: 17px;
    }
  }
}


</style>