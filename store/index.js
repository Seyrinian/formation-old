export const state = () => ({
  pages:[]
})

export const mutations = {
  setPages(state, pages) {
    state.pages = pages
  }
}

export const actions = {
  setPages(context,pages){
    context.commit('setPages',pages)
  }
}

export const getters = {
  getPages(state){
    return state.pages
  }
}