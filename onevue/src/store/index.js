import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    count:1,
    shoppingCart: [
      {
        name: 'Jumbo Box of Teabags',
        quantity: 1,
        price: 350
      },
      {
        name: 'Packet of Fancy Biscuits',
        quantity: 1,
        price: 199
      },
    ]
  },
  getters:{
    cartItemCount: state => state.shoppingCart.length
  },
  mutations: {
    increment (state,n) {
      // 变更状态
      state.count+=n
    },
    setCustomerName(state, name) {
      console.log(state)
      state.count = name;
    }
  },
  actions: {
 
  }
})　　