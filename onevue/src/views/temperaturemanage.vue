<template></template>

<script>
import {
  getDaysDiffBetweenDates,
  formatDuration,
  detectDeviceType
} from '@/util/one'
export default {
  name: 'temperaturemanage',
  data() {
    return {
      form: {
        username: 'user',
        password: '123456'
      }
    }
  },
  created() {
    this.testlist()
  },
  methods: {
    testlist() {
      console.log(
        getDaysDiffBetweenDates(new Date('2017-11-1'), new Date('2021-1-6'))
      )
      console.log(formatDuration(1001))
      console.log(detectDeviceType())
      let num = 15.01
      console.log(num.toString()) //数字转字符串
      console.log(num + '') //数字转字符串
      //删除重复项
      let array = [100, 23, 23, 23, 23, 67, 45]
      let outputArray = Array.from(new Set(array))
      console.log(outputArray)
      //数组到对象
      let arr = ['value1', 'value2', 'value3']
      let arrObject = { ...arr }
      console.log(arrObject)
      //对象到数组
      let number = {
        one: 1,
        two: 2
      }
      let key = Object.keys(number) // key = [ 'one', 'two' ]
      let value = Object.values(number) // value = [ 1, 2 ]
      let entry = Object.entries(number) // entry = [['one' : 1], ['two' : 2]]
      //对象遍历
      const age = {
        Rahul: 20,
        max: 16
      }

      // 方案1：先得 key 在遍历 key
      const keys = Object.keys(age)
      keys.forEach(key => age[key]++)

      console.log(age) // { Rahul: 21, max: 16 }

      // 方案2 - `for...in` 循环
      for (let key in age) {
        age[key]++
      }

      console.log(age) // { Rahul: 22, max: 18 }
    }
  }
}
</script>

<style>
</style>
