<template>
  <el-container class="home-wrap">
    <el-header>
      <div>
        <img src="../assets/logo.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="success" @click="logout">成功按钮</el-button>
    </el-header>
    <el-container>
      <el-aside :width="iscollapse ? '64px' : '200px'">
        <div class="toggle-btn" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          :collapse="iscollapse"
          :collapse-transition="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>

            <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      iscollapse:false
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toggleCollapse(){
      this.iscollapse = !this.iscollapse
    }
  }
}
</script>
<style lang="less" scoped>
.home-wrap {
  height: 100%;
}
.el-header {
  background-color: #678;
  color: #333;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #8bf;
    }
    span {
      margin-left: 20px;
    }
  }
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  .el-menu {
    border-right: none;
  }
  .toggle-btn {
    background-color: #4a5064;
    line-height: 26px;
    color: #fff;
    letter-spacing: 0.3em;
    cursor: pointer;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>