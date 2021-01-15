/**
 * Created by liunannan on 2020/9/22.
 */

const state = {
  visitedRoutes: [],
  count:0,
}
const getters = {
  visitedRoutes: (state) => state.visitedRoutes
}
const mutations = {
  addVisitedRoute(state, route) {
    if (state.visitedRoutes.some((item) => item.path === route.path)) return
    state.visitedRoutes.push(Object.assign({}, route))
  },
  increment (state) {
    console.log(state+'----')
    state.count++
  }
}
const actions = {
  addVisitedRoute({ commit }, route) {
    commit('addVisitedRoute', route)
  },
  increment({ commit },count){
    commit('increment',count)
  }
}
export default { state, getters, mutations, actions }
