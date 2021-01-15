<template>

    <div class="menu">

        <el-menu default-active='activePath'

                 router

                 @open='handleOpen'

                 @close='handleClose'

                 background-color='#545c64'

                 text-color='#fff'

                 active-text-color='#ffd04b' >

            <template v-for="(route,index) in routes">

                <!-- 一级菜单 -->

                <el-menu-item :key='index' v-if='route.children && route.children.length== 1'  :index='route.path'>

                    <i :class="'el-icon-' + route.meta.icon"></i>

                    <span>{{route.meta.title}}</span>

                </el-menu-item>

 

                <!-- 二级菜单 -->

                <el-submenu v-if='route.children && route.children.length > 1' :key='index' :index='route.path'>

                    <template slot='title'>

                        <i :class="'el-icon-' + route.meta.icon"></i>

                        {{route.meta.title}}

                    </template>

                    <el-menu-item-group v-for='(item, index) in route.children' :key="index">

                        <el-menu-item :key='index' :index='resolve(route.path, item.path)'>

                            <i :class="'el-icon-' + item.meta.icon"></i>

                            {{item.meta.title}}

                        </el-menu-item>

                    </el-menu-item-group>

                </el-submenu>

            </template>

        </el-menu>

    </div>

</template>

 

<script>

 

export default {
    name: 'Menu',

    data() {
      return {
          activePath: this.$router.path,

      }

    },

    computed: { // 计算属性：获取路由

        routes() {
            console.log('test', this.$router)

            console.log('ddd', this.$router.options.routes)

            return this.$router.options.routes

        },

    },

    methods: {
        resolve(p,i){
          return `${p}/${i}`

        },

        handleOpen(key, keyPath) {
            console.log(key, keyPath);

        },

        handleClose(key, keyPath) {
            console.log(key, keyPath);

        }

    },

}

</script>

 

<style lang="scss" scoped>

    .el-menu {
        text-align: left;

    }

</style>

 