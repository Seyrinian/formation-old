export const state = () => ({
  module:'',
  pages:[],
  isNavOpen:true
})

export const mutations = {
  setModule(state, module) {
    state.module = module
  },
  setPages(state, pages) {
    state.pages = pages
  },
  setIsNavOpen(state, isNavOpen){
    state.isNavOpen = isNavOpen
  }
}

export const actions = {
  setModule(context,module){
    context.commit('setModule',module)
  },
  setPages(context,pages){
    context.commit('setPages',pages)
  },
  setIsNavOpen(context,isNavOpen){
    context.commit('setIsNavOpen',isNavOpen)
  }
}

export const getters = {
  getModule(state){
    return state.module
  },
  getPages(state){
    return state.pages
  },
  getIsNavOpen(state){
    return state.isNavOpen
  }
}