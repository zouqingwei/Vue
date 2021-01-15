<template>
  <div class="login-wrap">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
    <div class="login-box">
      <!-- 头像 -->
      <div class="avater-logo">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 表单登录区域 -->
      <el-form ref="form" :model="form" :rules="rules" label-width="0px" class="form-login">
        <!-- 姓名 -->
        <el-form-item prop="username">
          <el-input v-model="form.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" prefix-icon="el-icon-unlock"></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: 'user',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   重置
    reset() {
      this.$refs.form.resetFields()
    },
    login() {
      this.$refs.form.validate(valid => {
        this.$http
          .post('/api', { user: this.form.username, pass: this.form.password })
          .then(res => {
            console.log(res.data)
            if (res.data === 1) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              window.sessionStorage.setItem('token', this.form.username)
              // localStorage.setItem("user", this.username);
              this.$router.push('/home')
              // this.pass=JSON.parse(localStorage.getItem('pass'));
            } else if (res.data === -1) {
              this.$notify({
                showClose: true,
                message: '出错了',
                type: 'warning'
              })
            }
          })
          .catch(() => {
            this.$notify({
              message: '服务器找不到了',
              type: 'warning'
            })
          })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login-wrap {
  background-color: #054e21;
  height: 100%;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avater-logo {
  width: 130px;
  height: 130px;
  border: 2px solid #ed4;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #0d2;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #bce;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.form-login {
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 0px 20px;
  box-sizing: border-box;
}
</style>