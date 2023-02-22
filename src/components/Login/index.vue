<template>
  <div id="login">

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>General Background Management System</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form">
        <el-form-item label="username" prop="username"
                      :rules="[
            {required:true,message:'pls input your username',trigger:'blur'},
            {min:4,max:10,message: 'the username length is 4~10 character',trigger: 'blur'}
            ]">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password"
                      :rules="[
            {required:true,message:'pls input your password',trigger:'blur'},
            {min:6,max:10,message: 'the password length is 6~10 character',trigger: 'blur'}
            ]">
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
    return {
      form: {
        username: '222222',
        password: '22222222',
      }
    }
  },
  methods: {
     login(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          let result = await reqLoginToken()
          if (result.code === 200){
            localStorage.setItem('TOKEN',result.data)
            this.$message({message:'Login Success',type:'success'})
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
    width: 40%;
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