<template>
  <div>
    <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <!-- <el-breadcrumb separator>
      <el-breadcrumb-item :to="{ path: '/' }" :replace="true">
        <i class="el-icon-s-opportunity"></i>首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-page-header @back="goBack" title="标题" content="详情页面"></el-page-header>
    标签页 
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="el-tabs">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>-->
    {{count+'state'}}
    <div v-for="(item,index) in shoppingCart" :key="index">
      <div>
        <p>{{item.name}}</p>
        <p>{{item.price}}</p>
      </div>
    </div>
    <div>{{cartItemCount}}</div>
    <!-- <input type="text" @input="updateName" :value="count" /> -->
    <el-form
      :inline="true"
      :model="userform"
      ref="userform"
      :rules="userformRules"
      class="demo-form-inline"
    >
      <el-form-item label="创建时间：" prop="datestart">
        <el-date-picker
          v-model="userform.datestart"
          type="datetime"
          placeholder="开始时间"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          :picker-options="startPickerOptions"
          size="medium"
          @change="dataFile()"
        ></el-date-picker>
        <span>-</span>
        <el-date-picker
          v-model="userform.dateend"
          type="datetime"
          placeholder="结束时间"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          :picker-options="endPickerOptions"
          @change="dataFile()"
          size="medium"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <!-- 1.时间 -->
    <el-time-picker
      is-range
      arrow-control
      :editable="true"
      v-model="valueone"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
      :picker-options="pickerOptions"
      @change="timeAll"
    ></el-time-picker>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { parseTime } from '@/utils/index'
import {} from '@/util/arr.js'
export default {
  name: 'homePage',
  data() {
    return {
      valueone: '',

      activeName: '',
      form: {
        username: 'user',
        password: '123456'
      },
      userform: {
        datestart: '',
        dateend: ''
      },
      tree: [
        {
          id: '1',
          title: '节点1',
          children: [
            {
              id: '1-1',
              title: '节点1-1'
            },
            {
              id: '1-2',
              title: '节点1-2'
            }
          ]
        },
        {
          id: '2',
          title: '节点2',
          children: [
            {
              id: '2-1',
              title: '节点2-1'
            }
          ]
        }
      ],
       defaultProps: {
          children: 'children',
          label: 'title'
        },
      pickerOptions: {
        disabledDate(time) {
          //return time.getTime() < Date.now() - 8.64e7;//设置选择今天以及今天之后的日
          //return time.getTime() > Date.now(); //设置选择今天以及今天以前的日期
          //return time.getTime() < Date.now();//设置选择今天之后的日期（不能选择当天时间）
          return time.getTime() > Date.now() - 8.64e7 //设置选择今天之前的日期（不能选择当天）
        }
      },
      //开始与结束时间清空再选择时候限制，不用再写其他判断不大于等
      startPickerOptions: {
        disabledDate: time => {
          let endDateVal = new Date(this.userform.dateend)
          if (endDateVal) {
            return (
              time.getTime() < Date.now() - 8.64e7 ||
              time.getTime() > endDateVal
            )
            // return (
            // time.getTime() < Date.now() - 8.64e7 ||
            // time.getTime() > this.userform.dateend
            //   time.getTime() >
            //   new Date(endDateVal).getTime() - 1 * 24 * 60 * 60 * 1000
            // )
          }
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      endPickerOptions: {
        disabledDate: time => {
          let beginDateVal = new Date(this.userform.datestart)
          if (beginDateVal) {
            return (
              time.getTime() < Date.now() - 8.64e7 ||
              time.getTime() < beginDateVal
            )
            // 比较 距 1970 年 1 月 1 日之间的毫秒数：
            // return (
            //   time.getTime() <
            //   new Date(beginDateVal).getTime() + 1 * 24 * 60 * 60 * 1000
            // )
          }
          // return (
          //   time.getTime() < Date.now() - 8.64e7 ||
          //   time.getTime() < this.userform.datestart
          // );
        }
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      userformRules: {
        datestart: [{}]
      }
    }
  },
  created() {
    this.relist()
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    ...mapState(['shoppingCart']),
    ...mapGetters(['cartItemCount']),
    ...mapMutations(['setCustomerName'])
    // updateName(event) {
    //   this.setCustomerName(event.target.value);
    // }

    // shoppingCart() {
    //   return this.$store.state.shoppingCart
    // }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    //   重置
    goBack() {},
    dataFile() {},
    timeAll(e) {
      // console.log(parseTime(this.valueone[0]))
      // console.log(parseTime(this.valueone[1]))
      let startime = parseTime(this.valueone[0])
      let endtime = parseTime(this.valueone[1])
      console.log(startime)
      if (new Date(endtime) < new Date(startime)) {
        this.$message({
          message: '结束时间不能小于开始时间',
          type: 'success'
        })
      }
    },
    relist() {
      this.$store.commit('increment', 10)
      // this.tree.forEach(data=>{
      //   console.log(data.title,data.children.title)
      // })
      // for(var i in this.tree){
      //    console.log(this.tree[i].title)
      //    for(var j in this.tree[i].children){
      //      console.log(this.tree[i].children[j].title)
      //    }
      // }
    },
    handleNodeClick(data) {
        console.log(data);
      }
  }
}
</script>

<style>
.el-tabs {
  background: rgb(216, 215, 213);
}
</style>
