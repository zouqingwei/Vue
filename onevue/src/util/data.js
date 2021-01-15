export const dataTree = [
      {id: 1, name: '超级管理', parentId: 0},
      {id: 2, name: '用户管理', parentId: 1},
      {id: 3, name: '部门管理', parentId: 1},
      {id: 4, name: '日志管理', parentId: 1},
      {id: 5, name: '操作用户', parentId: 2},
      {id: 6, name: '查看用户', parentId: 2},
      {id: 7, name: '用户新增', parentId: 5},
      {id: 8, name: '用户删除', parentId: 5},
      {id: 9, name: '用户修改', parentId: 5},
      {id: 10, name: '操控部门', parentId: 3},
      {id: 11, name: '查看部门', parentId: 3},
      {id: 12, name: '部门新增', parentId: 10},
      {id: 13, name: '部门删除', parentId: 10},
      {id: 14, name: '部门修改', parentId: 10},
      {id: 15, name: '日志查看', parentId: 4},
      {id: 16, name: '日志导出', parentId: 4},
  ]
  export function cloneData(data, parentId = 0) {
      let tree = [];//新建空数组
      //遍历每条数据
      data.map((item) => {
          //每条数据中的和parentId和传入的相同
          if (item.parentId == parentId) {
              //就去找这个元素的子集去  找到元素中parentId==item.id 这样层层递归
              item.children = cloneData(data, item.id);
              tree.push(item);
          }
      })
      return tree
  }
  export const testData=[
	{
	    id:'1',
		name:"aa",
		desc:"这是一个描述",
		parentId:null,
	},{
		id:'11',
		name:"aa_sub1",
		desc:"这是一个描述_sub1",
		parentId:'1',
	},{
		id:'111',
		name:"aa_sub1_sub2",
		desc:"这是一个描述_sub1_sub2",
		parentId:'11',
	},
	{
		id:'2',
		name:"bb",
		desc:"这是一个描述",
		parentId:null,
	},
	{
		id:'22',
		name:"bb_sub1",
		desc:"这是一个描述_sub1",
		parentId:'2',
	},{
		id:'23',
		name:"bb_sub2",
		desc:"这是一个描述_sub2",
		parentId:'2',
	},{
		id:'233',
		name:"bb_sub2_sub2",
		desc:"这是一个描述_sub2_sub2",
		parentId:'23',
	},{
		id:'2333',
		name:"bb_sub2_sub2_sub2",
		desc:"这是一个描述_sub2_sub2_sub2",
		parentId:'233',
	},{
		id:'23333',
		name:"bb_sub2_sub2_sub23",
		desc:"这是一个描述_sub2_sub2_sub2",
		parentId:'233',
	},{
		id:'233333',
		name:"bb_sub2_sub2_sub233",
		desc:"这是一个描述_sub2_sub2_sub2",
		parentId:'233',
	},{
		id:'24',
		name:"bb_sub3",
		desc:"这是一个描述_sub3",
		parentId:'2',
	},
]
  export function cloneDataone(data,parentId) {
      data.forEach((item) => {
            delete item.children;
      })
      let map = {};
      data.forEach(function (item) {
            map[item.id] = item;
      });
      let result = [];
      data.forEach(function (item) {
            let parent = map[item[parentId]];
            if (parent) {
          // 获取全路径
                  item.allPath=parent.allPath+"-"+item.name;
                  (parent.children || (parent.children = [])).push(item);
            } else {
           // 获取全路径
                  item.allPath=item.name
                  result.push(item);
            }
      });
      return result
};
  export var menu_list = [{
      id: '1',
      menu_name: '设置',
      menu_url: 'setting',
      parent_id: 0
    }, {
      id: '1-1',
      menu_name: '权限设置',
      menu_url: 'setting.permission',
      parent_id: '1'
    }, {
      id: '1-1-1',
      menu_name: '用户管理列表',
      menu_url: 'setting.permission.user_list',
      parent_id: '1-1'
    }, {
      id: '1-1-2',
      menu_name: '用户管理新增',
      menu_url: 'setting.permission.user_add',
      parent_id: '1-1'
    }, {
      id: '1-1-3',
      menu_name: '角色管理列表',
      menu_url: 'setting.permission.role_list',
      parent_id: '1-1'
    }, {
      id: '1-2',
      menu_name: '菜单设置',
      menu_url: 'setting.menu',
      parent_id: '1'
    }, {
      id: '1-2-1',
      menu_name: '菜单列表',
      menu_url: 'setting.menu.menu_list',
      parent_id: '1-2'
    }, {
      id: '1-2-2',
      menu_name: '菜单添加',
      menu_url: 'setting.menu.menu_add',
      parent_id: '1-2'
    }, {
      id: '2',
      menu_name: '订单',
      menu_url: 'order',
      parent_id: 0
    }, {
      id: '2-1',
      menu_name: '报单审核',
      menu_url: 'order.orderreview',
      parent_id: '2'
    }, {
      id: '2-2',
      menu_name: '退款管理',
      menu_url: 'order.refundmanagement',
      parent_id: '2'
    }
]