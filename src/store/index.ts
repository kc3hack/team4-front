import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL: string = "root:password@tcp(docker.for.mac.localhost:8080)";

export default {
  modules: {
    anime: {
      // animesのlist内の定義
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
    },
    sanctuary: {
      //sanctuariesのlist内の定義
      namespaced: true,
      state: {
        sanc_id: 0,
        sanc_name: "",
        anime_id: 0,
        anime_name: "",
        url: "",
        image: "",
        area_id: 0,
        area_name: ""
      }
    },
    sanctuaries: {
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
          await axios.get(BASE_URL + "/sanctuaries").then(res => {
            payload.list = res.data;
          });
          context.commit("getList", payload);
        }
      }
    },
    marker: {
      namespaced: true,
      state: {
        // mapsのmarker内の定義
        sanc_id: 0,
        sanc_name: "",
        anime_id: 0,
        anime_name: "",
        image: "",
        description: "",
        lat: 0,
        lng: 0
      }
    },
    maps: {
      namespaced: true,
      state: {
        lat: 0,
        lng: 0,
        markers: []
      },
      mutations: {
        getList(state, payload) {
          state.list = payload.list;
        }
      },
      actions: {
        async getSanctuaryMapAction(context) {
          const payload = {
            list: []
          };
          await axios.get(BASE_URL + "/maps").then(res => {
            payload.list = res.data;
          });
          context.commit("getList", payload);
        }
      }
    }
  }
};
