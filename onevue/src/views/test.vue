<template>
  <div>
    <el-tree :data="dataList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <el-tree :data="menuList" :props="defaultPropsone" @node-click="handleNodeClick"></el-tree>
    <!-- 当天日期 -->
    <el-date-picker
      type="date"
      placeholder="选择日期"
      v-model="detailedlist.date"
      style="width: 135px;"
      :clearable="false"
      size="medium"
    ></el-date-picker>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { parseTime } from '@/utils/index'
import { repeatString, compare, bubbleSort } from '@/util/arr.js'
import {} from '@/util/one.js'
import {
  dataTree,
  cloneData,
  menu_list,
  cloneDataone,
  testData
} from '@/util/data.js'
export default {
  name: 'test',
  data() {
    return {
      detailedlist: {
        date: ''
      },
      value: [],
      dataList: cloneData(dataTree, 0),
      menuList: cloneDataone(menu_list, 0),
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      defaultPropsone: {
        children: 'children',
        label: 'menu_name'
      }
    }
  },
  created() {
    // this.relist()
    this.treelist()
    this.getNowTime()
  },
  computed: {},
  methods: {
    relist() {
      // 数组原型方法主要有以下这些
      //----- join()：用指定的分隔符将数组每一项拼接为字符串
      var arr = [1, 2, 3]
      console.log(arr.join()) // 1,2,3
      console.log(arr.join('-')) // 1-2-3
      console.log(',' + arr.join(','))
      console.log(arr) // [1, 2, 3]（原数组不变）
      console.log(repeatString('小兔子管理', 3))
      //----- push() ：向数组的末尾添加新元素
      var arr = ['Lily', 'lucy', 'Tom']
      var count = arr.push('Jack', 'Sean')
      console.log(count) // 5
      console.log(arr) // ["Lily", "lucy", "Tom", "Jack", "Sean"]
      var item = arr.pop()
      console.log(item) // Sean
      console.log(arr) // ["Lily", "lucy", "Tom", "Jack"]

      //----- pop()：删除数组的最后一项

      //----- shift()：删除数组的第一项
      var arr = ['Lily', 'lucy', 'Tom']
      var count = arr.unshift('Jack', 'Sean')
      console.log(count) // 5
      console.log(arr) //["Jack", "Sean", "Lily", "lucy", "Tom"]
      var item = arr.shift()
      console.log(item) // Jack
      console.log(arr) // ["Sean", "Lily", "lucy", "Tom"]

      //----- unshift()：向数组首位添加新元素

      //----- slice()：按照条件查找出其中的部分元素
      var arr = [1, 3, 5, 7, 9, 11]
      var arrCopy = arr.slice(1)
      var arrCopy2 = arr.slice(1, 4)
      var arrCopy3 = arr.slice(1, -2) //相当于arr.slice(1,4)
      var arrCopy4 = arr.slice(-4, -1) //相当于arr.slice(2,5)
      console.log(arr) //[1, 3, 5, 7, 9, 11](原数组没变)
      console.log(arrCopy) //[3, 5, 7, 9, 11]
      console.log(arrCopy2) //[3, 5, 7]
      console.log(arrCopy3) //[3, 5, 7]
      console.log(arrCopy4) //[5, 7, 9]

      //----- splice()：对数组进行增删改
      var arr = [1, 3, 5, 7, 9, 11]
      var arrRemoved = arr.splice(0, 2)
      console.log(arr) //[5, 7, 9, 11]
      console.log(arrRemoved) //[1, 3]

      var array1 = [22, 3, 31, 12]
      array1.splice(1, 0, 12, 35) //[]
      console.log(array1) // [22, 12, 35, 3, 31, 12]

      var array1 = [22, 3, 31, 12]
      array1.splice(1, 1, 8) //[3]
      console.log(array1) // [22, 8, 31, 12]

      //----- fill(): 方法能使用特定值填充数组中的一个或多个元素
      var arr = [1, 2, 3, 'cc', 5]
      arr.fill(1)
      console.log(arr) //[1,1,1,1,1];

      var arr = [1, 2, 3, 'arr', 5]
      arr.fill(1, 2)
      console.log(arr) //[1,2,1,1,1]
      arr.fill(0, 1, 3)
      console.log(arr) //[1,0,0,1,1];

      //----- filter():“过滤”功能
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      var arr2 = arr.filter(function(x, index) {
        console.log(x, index)
        return index % 3 === 0 || x >= 8
      })
      console.log(arr2) //[1, 4, 7, 8, 9, 10]

      //----- concat()：用于连接两个或多个数组
      var arr = [1, 3, 5, 7]
      var arrCopy = arr.concat(9, [11, 13])
      console.log(arrCopy) //[1, 3, 5, 7, 9, 11, 13]
      console.log(arr) // [1, 3, 5, 7](原数组未被修改)

      var arrCopy2 = arr.concat([9, [11, 13]])
      console.log(arrCopy2) //[1, 3, 5, 7, 9, Array[2]]
      console.log(arrCopy2[5]) //[11, 13]

      //----- indexOf()：检测当前值在数组中第一次出现的位置索引
      var arr = [1, 3, 5, 7, 7, 5, 3, 1]
      console.log(arr.indexOf(5)) //2
      console.log(arr.lastIndexOf(5)) //5
      console.log(arr.indexOf(5, 2)) //2   接收两个参数：要查找的项 和（可选的）表示查找起点位置的索引
      console.log(arr.lastIndexOf(5, 4)) //2
      console.log(arr.indexOf('5')) //-1

      //----- lastIndexOf()：检测当前值在数组中最后一次出现的位置索引

      //----- every()：判断数组中每一项都是否满足条件
      var arr = [1, 2, 3, 4, 5]
      var arr2 = arr.every(function(x) {
        return x < 10
      })
      console.log(arr2) //true
      var arr3 = arr.every(function(x) {
        return x < 3
      })
      console.log(arr3) // false

      //----- some()：判断数组中是否存在满足条件的项

      //----- includes()：判断一个数组是否包含一个指定的值
      var array1 = [22, 3, 31, 12, 'arr']
      var includes = array1.includes(31)
      console.log(includes) // true
      var includes1 = array1.includes(31, 3) // 从索引3开始查找31是否存在
      console.log(includes1) // false

      let values = [1, NaN, 2]
      console.log(values.indexOf(NaN)) //-1
      console.log(values.includes(NaN)) //true

      //----- sort()：对数组的元素进行排序
      var arr1 = ['a', 'd', 'c', 'b']
      console.log(arr1.sort()) // ["a", "b", "c", "d"]
      var arr2 = [13, 24, 51, 3]
      console.log(arr2.sort()) // [13, 24, 3, 51]
      console.log(arr2) // [13, 24, 3, 51](元数组被改变)
      console.log(arr2.sort(compare)) // [3, 13, 24, 51]
      console.log(
        arr2.sort(function(a, b) {
          return a - b
        })
      )
      // 条件排序
      var arr5 = [
        { id: 10 },
        { id: 5 },
        { id: 6 },
        { id: 9 },
        { id: 2 },
        { id: 3 }
      ]
      arr5.sort(function(a, b) {
        return a.id - b.id
      })
      console.log(arr5)
      // 多条件排序
      var arr6 = [
        { id: 10, age: 2 },
        { id: 5, age: 4 },
        { id: 6, age: 10 },
        { id: 9, age: 6 },
        { id: 2, age: 8 },
        { id: 10, age: 9 }
      ]
      arr6.sort(function(a, b) {
        if (a.id === b.id) {
          //如果id相同，按照age的降序
          return b.age - a.age
        } else {
          return a.id - b.id
        }
      })
      console.log(arr6)
      // 冒泡排序
      var arr = [1, 3, 5, 12, 14, 8, 99]
      var result = bubbleSort(arr)
      console.log(result) //[1, 3, 5, 8, 12, 14, 99]
      //----- reverse()：对数组进行倒序
      var arr = [13, 24, 51, 3]
      console.log(arr.reverse()) //[3, 51, 24, 13]
      console.log(arr) //[3, 51, 24, 13](原数组改变)
      //----- forEach()：ES5 及以下循环遍历数组每一项
      var arr = [11, 22, 33, 44, 55]
      arr.forEach(function(x, index, a) {
        console.log(x + '|' + index + '|' + (a === arr))
      })

      //----- map()：ES6 循环遍历数组每一项
      var arr = [1, 2, 3, 4, 5]
      var arr2 = arr.map(function(item) {
        return item * item
      })
      console.log(arr2) //[1, 4, 9, 16, 25]
      //----- copyWithin():用于从数组的指定位置拷贝元素到数组的另一个指定位置中
      //将数组的前两个元素复制到数组的最后两个位置
      var arr = [1, 2, 3, 'arr', 5]
      arr.copyWithin(3, 0)
      console.log(arr) //[1,2,3,1,2]

      var arr = [1, 2, 3, 'arr', 5, 9, 17]
      //从索引3的位置开始粘贴
      //从索引0的位置开始复制
      //遇到索引3时停止复制
      arr.copyWithin(3, 0, 3)
      console.log('copyWithin' + arr) //[1,2,3,1,2,3,17]

      //----- find():返回匹配的值
      var arr = [1, 2, 3, 'arr', 5, 1, 9]
      console.log(
        'find()' +
          arr.find((value, keys, arr) => {
            //可接受三个参数：数组的某个元素，该元素对应的索引位置，以及该数组本身。
            return value > 2
          })
      ) // 3 返回匹配的值
      console.log(
        arr.findIndex((value, keys, arr) => {
          return value > 2
        })
      ) // 2 返回匹配位置的索引

      //----- findIndex():返回匹配位置的索引

      //----- toLocaleString()、toString():将数组转换为字符串
      var array1 = [22, 3, 31, 12]
      var str = array1.toLocaleString()
      var str1 = array1.toString()
      console.log(str) // 22,3,31,12
      console.log(str1) // 22,3,31,12

      //----- flat()、flatMap()：扁平化数组
      var arr1 = [0, 1, 2, [3, 4]]
      console.log(arr1.flat())
      // expected output: [0, 1, 2, 3, 4]
      var arr2 = [0, 1, 2, [[[3, 4]]]]
      console.log(arr2.flat(2))
      // expected output: [0, 1, 2, [3, 4]]
      //使用 Infinity，可展开任意深度的嵌套数组
      var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
      arr4.flat(Infinity)
      // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      // 扁平化数组空项,如果原数组有空位，flat()方法会跳过空位
      var arr4 = [1, 2, , 4, 5]
      arr4.flat()
      // [1, 2, 4, 5]

      //----- entries() 、keys() 、values():遍历数组
      for (let index of ['a', 'b'].keys()) {
        console.log(index)
      }
      // 0
      // 1
      for (let elem of ['a', 'b'].values()) {
        console.log(elem)
      }
      // 'a'
      // 'b'
      for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem)
      }
      // 0 "a"
      // 1 "b"

      let letter = ['a', 'b', 'c']
      let entries = letter.entries()
      console.log(entries.next().value) // [0, 'a']
      console.log(entries.next().value) // [1, 'b']
      console.log(entries.next().value) // [2, 'c']

      // 数组去重
      const array = [1, 1, 2, 3, 5, 5, 1]
      const uniqueArray = [...new Set(array)]
      console.log(uniqueArray)
    },
    handleNodeClick(data) {
      console.log(data)
    },
    treelist() {
      var time1 = new Date().Format('yyyy-MM-dd')
      var time2 = new Date().Format('yyyy-MM-dd hh:mm:ss')
      console.log(time1)
      console.log(time2)
      console.log(cloneData(dataTree, 0))
    },
    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() //得到年份
      var month = now.getMonth() //得到月份
      var date = now.getDate() //得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}-${date}`
      this.detailedlist.date = defaultDate
    }
  }
}
</script>

<style>
.el-tabs {
  background: rgb(216, 215, 213);
}
</style>
