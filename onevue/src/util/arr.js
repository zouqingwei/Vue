// 数组原型方法主要有以下这些
// join()：用指定的分隔符将数组每一项拼接为字符串
export function repeatString(str, n) {
      //一个长度为n+1的空数组用string去拼接成字符串,就成了n个string的重复
      return new Array(n + 1).join(str);
}
// push() ：向数组的末尾添加新元素

// pop()：删除数组的最后一项

// shift()：删除数组的第一项

// unshift()：向数组首位添加新元素

// slice()：按照条件查找出其中的部分元素

// splice()：对数组进行增删改

// fill(): 方法能使用特定值填充数组中的一个或多个元素

// filter():“过滤”功能

// concat()：用于连接两个或多个数组

// indexOf()：检测当前值在数组中第一次出现的位置索引

// lastIndexOf()：检测当前值在数组中最后一次出现的位置索引

// every()：判断数组中每一项都是否满足条件

// some()：判断数组中是否存在满足条件的项

// includes()：判断一个数组是否包含一个指定的值

// sort()：对数组的元素进行排序
export function compare(value1, value2) {    //完整的前后排序
      if (value1 < value2) {
       return -1;
      } else if (value1 > value2) {
       return 1;
      } else {
       return 0;
      }
  }
//   冒泡排序
  export function bubbleSort(arr) {
      var len = arr.length;
      for (var i = 0; i < len - 1; i++) { //比较的趟数,每次将最大值放到数组最后
          for (var j = 0; j < len - i - 1; j++) { //将相邻的两个元素,两两比较
               if (arr[j]>arr[j+1]) { //元素交换值
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
               }
          }
      }
      return arr;
  }
// reverse()：对数组进行倒序

// forEach()：ES5 及以下循环遍历数组每一项

// map()：ES6 循环遍历数组每一项

// copyWithin():用于从数组的指定位置拷贝元素到数组的另一个指定位置中

// find():返回匹配的值

// findIndex():返回匹配位置的索引

// toLocaleString()、toString():将数组转换为字符串

// flat()、flatMap()：扁平化数组

// entries() 、keys() 、values():遍历数组