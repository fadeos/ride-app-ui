import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    ride: {},
    prices:[],
    displayModal: false,
    loading: false
  },
  getters: {
    rides(state) {
      return state.data
    },
    getRide(state){
      return state.ride
    },
    prices(state) {
      return state.prices
    },
    loading(state) {
      return state.loading
    }
  },
  mutations: {
    setData(state, data){
      state.data = data
    },
    setPrice(state, payload){
      state.prices.push(payload);
    },
    showModal(state) {
      state.displayModal = true;
    },
    setRide(state, id){
      state.ride = state.data.filter(data => data.id == id)[0];
    },
    closeModal(state) {
     state.displayModal = false;
    },
    setLoading(state, value) {
      state.loading = value
    }
  },
  actions: {
    getRides(context) {
      context.commit('setLoading', true);
      fetch('http://127.0.0.1:8000/v1/rides',{
        method: 'GET',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res => res.json())
      .then(res => {
        context.commit('setLoading', false);
        context.commit('setData', res);
      });
    },
    getPrice(context, idRide) {
      context.commit('setLoading', true);
      fetch('http://127.0.0.1:8000/v1/calculation?id='+idRide,{
        method: 'GET'
      })
      .then(res => res.json())
      .then(res => {
        context.commit('setLoading', false);
        context.commit('setPrice', {id:idRide, price:res.price});
      });
    }
  },
  modules: {
  }
})
