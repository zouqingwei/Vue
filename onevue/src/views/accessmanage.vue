<template>
  <div>
    <!-- <span v-for="(n,index) in evenNumbers" :key="index">{{ n }}</span> -->
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
      <el-form-item label="" style="float:right">
          <el-input placeholder="请输入内容" size="medium" v-model="userform.keyword" class="input-with-select">
            <el-button type="primary" slot="append" icon="el-icon-search"></el-button>
          </el-input>
      </el-form-item>
    </el-form>
    <el-table
      stripe
      border
      ref="multipleTable"
      :data="list.filter(data => !search || data.nickname.toLowerCase().includes(search.toLowerCase()))"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{prop: 'create_time', order: 'descending'}"
      :element-loading-text="elementLoadingText"
      element-loading-background="rgba(0, 0, 0, 0.5)"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="nickname" label="姓名" width="120" sortable></el-table-column>
      <el-table-column label="日期" width="200" sortable>
        <template slot-scope="scope">{{ scope.row.create_time }}</template>
      </el-table-column>
      <el-table-column prop="class_name" label="课程" width="180" sortable></el-table-column>
      <el-table-column
        prop="live_url"
        label="直播地址"
        width="160"
        :formatter="formatter"
        sortable
        show-overflow-tooltip
      ></el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'accessmanage',
  data() {
    return {
      multipleSelection: [],
      numbers: [1, 2, 3, 4, 5],
      search: '',
      elementLoadingText:"正在加载中",
      userform: {
        datestart: '',
        dateend: '',
        keyword:"",
      },
      //开始与结束时间清空再选择时候限制，不用再写其他判断不大于等
      startPickerOptions: {
        disabledDate: time => {
          let endDateVal = this.userform.dateend
          if (endDateVal) {
             return time.getTime() < Date.now()-8.64e7 || time.getTime() > endDateVal;
            // return (
              // time.getTime() < Date.now() - 8.64e7 ||
              // time.getTime() > this.userform.dateend
            //   time.getTime() >
            //   new Date(endDateVal).getTime() - 1 * 24 * 60 * 60 * 1000
            // )
          }
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      endPickerOptions: {
        disabledDate: time => {
          let beginDateVal = this.userform.datestart
          if (beginDateVal) {
            return time.getTime() < Date.now()-8.64e7 || time.getTime() < beginDateVal;
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
      list: [
        {
          course_id: '120799709',
          teacher_uid: '25985430',
          create_time: '2020-12-18 10:10:24',
          end_time: '2020-12-19 00:00:00',
          begin_time: '2020-12-18 11:10:08',
          replay: '1',
          record: '1',
          nickname: 'jeke',
          live_url: 'https://www.eeo.cn/live.php?lessonKey=6b04c4b373eaf79b',
          assistant_uid: '',
          id: '062567ee-a474-4487-9d63-dc379cd7adfd',
          class_name: 'classin二',
          course_class_uid: '259622445',
          live: '1',
          status: '0'
        },
        {
          course_id: '120799685',
          teacher_uid: '25985430',
          create_time: '2020-12-18 09:51:59',
          end_time: '2020-12-19 01:01:00',
          begin_time: '2020-12-18 09:55:00',
          replay: '1',
          record: '1',
          nickname: 'Anana',
          live_url: 'https://www.eeo.cn/live.php?lessonKey=7b6fb093cd98605e',
          assistant_uid: '',
          id: '6ad8d05b-f2d8-49dd-a078-491f6b524a38',
          class_name: 'classin中学班',
          course_class_uid: '259617967',
          live: '1',
          status: '0'
        },
        {
          course_id: '120799627',
          teacher_uid: '25985430',
          create_time: '2020-12-18 09:50:33',
          end_time: '2020-12-19 01:01:01',
          begin_time: '2020-12-18 09:55:00',
          replay: '1',
          record: '1',
          nickname: 'Anana',
          live_url: 'https://www.eeo.cn/live.php?lessonKey=25aa0b3ac524dd74',
          assistant_uid: '',
          id: '8bff97c5-3a36-4a79-98a2-1bed8b92d178',
          class_name: '小学班第一节课',
          course_class_uid: '259617653',
          live: '1',
          status: '0'
        },
        {
          course_id: '120799709',
          teacher_uid: '25985430',
          create_time: '2020-12-18 10:08:27',
          end_time: '2020-12-19 00:00:00',
          begin_time: '2020-12-18 11:08:13',
          replay: '1',
          record: '1',
          nickname: 'Anana',
          live_url: 'https://www.eeo.cn/live.php?lessonKey=729485a214c14440',
          assistant_uid: '',
          id: 'bb8304ec-18d0-4169-8a32-de69dd507f28',
          class_name: 'classin一',
          course_class_uid: '259621965',
          live: '1',
          status: '0'
        },
        {
          course_id: '120799709',
          teacher_uid: '25985430',
          create_time: '2020-12-18 09:54:23',
          end_time: '2020-12-19 01:01:00',
          begin_time: '2020-12-18 09:56:00',
          replay: '1',
          record: '1',
          nickname: 'Anana',
          live_url: 'https://www.eeo.cn/live.php?lessonKey=63cd14b73fa33d31',
          assistant_uid: '',
          id: 'd3ba3827-9d97-48a8-80e0-c2a968e02b3f',
          class_name: '公开课第一节课',
          course_class_uid: '259618433',
          live: '1',
          status: '0'
        }
      ],
      schoolList: {
        status: 1,
        data: {
          id: 15,
          name: '五一中学',
          children: [
            {
              id: 0,
              name: '主校区',
              children: [
                {
                  id: 22506,
                  name: '高一年级',
                  children: [
                    {
                      id: 24812,
                      name: '高一(1)班',
                      classYear: 2018,
                      instTreeType: 'CLASS'
                    }
                  ],
                  instTreeType: 'GRADE'
                }
              ],
              instTreeType: 'CAMPUS'
            }
          ],
          children: [
            {
              id: 0,
              name: '西校区',
              children: [
                {
                  id: 22506,
                  name: '高一年级',
                  children: [
                    {
                      id: 24812,
                      name: '高一(1)班',
                      classYear: 2018,
                      instTreeType: 'CLASS'
                    }
                  ],
                  instTreeType: 'GRADE'
                }
              ],
              instTreeType: 'CAMPUS'
            }
          ],
          instTreeType: 'SCHOOL'
        },
        resultStatus: 'SUCCESS'
      },
      userformRules: {
        datestart: [{}]
      }
    }
  },
  created() {
    this.dataFile(), this.schoolListdetail()
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    formatter(row, column) {
      return row.live_url
    },
    dataFile() {
      console.log(this.list)
      const listData = this.list
      // 1.
      let listPush = []
      listData.forEach(item => {
        listPush.push(item.nickname)
      })
      console.log(listPush)
      // 2.
      let listPush1 = []
      listData.filter(item => {
        listPush1.push(item.nickname)
      })
      console.log(listPush1.join('/'))
      console.log(listPush1.toString())
      // 3.
      let listPush2 = []

      listData.map(item => {
        listPush2.push(item.nickname)
        // console.log(listPush2)
      })
      console.log(listPush2)
      // for(let i=0;i<listData.length;i++){
      //         listPush2.push(listData[i].nickname)
      //         console.log(listPush2)
      // }
      let outputArray = Array.from(new Set(listPush2))
      console.log(outputArray)
    },
    schoolListdetail() {
      let schoolData = this.schoolList
      console.log(schoolData)
    }
  }
}
</script>

<style scoped>
</style>
