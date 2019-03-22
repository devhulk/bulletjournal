import Vue from "vue";
import Vuex from "vuex";
import fb from "@/fbconfig.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deaTasks: [],
    mobileTasks: []
  },
  getters: {
    deaList: state => state.deaTasks
  },
  mutations: {
    commitDeaTasks(state, list) {
      state.deaTasks = list;
    },
    clearDeaTasks(state) {
      state.deaTasks = [];
    }
  },
  actions: {
    deaTasksAction({ commit }) {
      let db = fb.db;
      db.collection("deaList")
        .where("display", "==", true)
        .onSnapshot(function(deaTasks) {
          let arr = [];
          deaTasks.forEach(task => {
            console.log(task.id);
            let item = {
              id: task.id,
              name: task.data().name
            };
            arr.push(item);
          });
          commit("commitDeaTasks", arr);
        });
    }
  }
});
