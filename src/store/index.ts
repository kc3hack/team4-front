import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL: string = "https://localhost:8080";

export default {
  modules: {
    anime: {
      namespaced: true,
      state: {
        anime_id: 0,
        anmie_name: "",
        image: "",
        url: "",
        area_id: 0,
        area_name: ""
      }
    },
    animes: {
      namespaced: true,
      state: {
        list: []
      },
      mutations: {
        getList(state, payload) {
          state.list = payload.list;
        }
      },
      actions: {
        async getListAction(context) {
          const payload = {
            list: []
          };
          await axios.get(BASE_URL + "/animes").then(res => {
            payload.list = res.data;
          });
          context.commit("getList", payload);
        }
      }
    }
  }
};
