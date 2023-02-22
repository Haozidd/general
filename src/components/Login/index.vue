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
import {nameRule,passwordRule} from "@/utils/validate";
import {setToken} from "@/utils/Token";

export default {
  name: "",
  data() {
    return {
      form: {
        username: 'asbc',
        password: 'asasAA2@@',
      },
      rules: {
        username: [{validator: nameRule, trigger: 'blur'}],
        password: [{validator: passwordRule, trigger: 'blur'}],
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          let result = await reqLoginToken(this.form)
          if (result.code === 200) {
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