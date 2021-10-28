export const state = () => ({
  module:'',
  pages:[]
})

export const mutations = {
  setModule(state, module) {
    state.module = module
  },
  setPages(state, pages) {
    state.pages = pages
  }
}

export const actions = {
  setModule(context,module){
    context.commit('setModule',module)
  },
  setPages(context,pages){
    context.commit('setPages',pages)
  }
}

export const getters = {
  getModule(state){
    return state.module
  },
  getPages(state){
    return state.pages
  }
}