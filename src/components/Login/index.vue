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
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login('form')">login</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {reqLoginToken} from "@/api";

export default {
  name: "",
  data() {
    const validateName = (rule, value, callback) => {
      let reg = /(^[a-zA-Z0-9]{4,10}$)/
      if (value === '') {
        callback(new Error('please input your username'))
      } else if (!reg.test(value)) {
        callback(new Error('the username length is 4~10 character'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
      if (value === '') {
        callback(new Error('please input your password'))
      } else if (!reg.test(value)) {
        callback(new Error('password need to contain 6~12 character'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{validator: validateName, trigger: 'blur'}],
        password: [{validator: validatePassword, trigger: 'blur'}],
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          let result = await reqLoginToken()
          if (result.code === 200) {
            localStorage.setItem('TOKEN', result.data)
            this.$message({message: 'Login Success', type: 'success'})
          }
          await this.$router.push('/home')

        } else {
          console.error(this.form)
        }
      })
    }
  }
}
</script>

<style lang="scss">
#login {
  width: 100%;
  background: transparent;

  .box-card {
    width: 500px;
    margin: 30% auto;

    .el-button {
      width: 100px;
    }

    .el-card__header {
      font-size: 17px;
    }
  }
}


</style>