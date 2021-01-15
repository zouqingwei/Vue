<template>
  <el-container class="home-wrap">
    <el-header>
      <div>
        <!-- <img src="/assets/logo.png" alt /> -->
        <span>classin后台管理</span>
      </div>
      <!-- <el-button type="success" @click="logout">成功按钮</el-button> -->
    </el-header>
    <el-container>
      <el-aside :width="iscollapse ? '64px' : '200px'">
        <div class="toggle-btn" @click="toggleCollapse">|||</div>
        <!-- <el-menu
          background-color="#001529"
          class="el-menu-demo"
          text-color="#fff"
          active-text-color="#fff"
          :default-active="activeMenu"
          mode="horizontal"
          menu-trigger="hover"
        >
          <template v-for="(menu, index) in routes">
            <side-bar-item :menu="menu" :key="index"></side-bar-item>
          </template>
        </el-menu> -->
        <el-menu class="el-menu-vertical-demo" :default-active="onRoutes" :collapse="iscollapse" :collapse-transition="false" background-color="#678"
          text-color="#000" active-text-color="#128BF1" unique-opened :router="false">
          <template v-for="item in constRoutes">
            <template v-if="item.children">
              <el-submenu :index="item.name" :key="item.name" v-if="mustAdmin(item)">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.meta.title }}</span>
                </template>
                <template v-for="subItem in item.children">
                  <el-submenu v-if="subItem.children" :index="subItem.name" :key="subItem.name">
                    <template slot="title">{{ subItem.meta.title }}</template>
                    <el-menu-item v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.name" class="is-active">{{ threeItem.meta.title }}</el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else :index="subItem.name" :key="subItem.name" @click="routerPush(subItem.name)"
                    style="padding-left:60px">{{ subItem.meta.title }}</el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item v-if="mustAdmin(item)" :index="item.name" :key="item.name" @click="routerPush(item.name)">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="content-box" :class="{collwidth:iscollapse}" >
          <div class="content">
            <transition name="fade-transform" mode="out-in">
              <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
              </keep-alive>
            </transition>
            <transition name="fade-transform" mode="out-in">
              <router-view v-if="!$route.meta.keepAlive" />
            </transition>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { constRoutes } from '@/router/router'
import SideBarItem from '@/components/common/SideBarItem'
// import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    SideBarItem
  },
  data() {
    return {
      iscollapse: false,
      constRoutes:constRoutes,
    }
  },
  computed: {
    // ...mapGetters({
    //   routes: 'routes/routes'
    // }),
    // activeMenu() {
    //   const route = this.$route
    //   return route.path
    // },
    onRoutes() {
      this.$route.meta.guidePath ? this.$route.meta.jumpPath : this.$route.path
      this.$route.path.replace('/', '')
    }
  },
  created(){
    console.log(constRoutes)
  },
  methods: {
    // 保存链接的激活状态
    // saveNavState(activePath) {
    //   window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = activePath
    // },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toggleCollapse() {
      this.iscollapse = !this.iscollapse
    },
    routerPush(routerName) {
      this.$router.push({
        name: routerName
      })
    },
    mustAdmin(item) {
      if (item.mustAdmin == null) {
        return true
      }
      const role = sessionStorage.getItem('uNumber')
      return role === 'admin'
    }
  }
}
</script>
<style lang="less" scoped>
.home-wrap {
  height: 100%;
}
.collwidth{
  left: 84px;
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
  background-color: #678;
  color: #333;
  text-align: center;

  .el-menu {
    border-right: none;
  }
  .toggle-btn {
    background-color: #588;
    line-height: 26px;
    color: #233;
    letter-spacing: 0.3em;
    cursor: pointer;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  // line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

</style>
