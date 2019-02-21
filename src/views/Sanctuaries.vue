<template>
  <div>{{param}}</div>
</template>

<script lang="ts">
import Selecter from "@/components/Selecter.vue";
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

const BASE_URL: string = "http://localhost:8080";

@Component({
  components: {
    // Card,
    // List,
    // Board,
  }
})

// import Vue from 'vue'
export default class Sanctuaries extends Vue {
  public param: string = "";
  // param = new URL(document.URL);
  constructor() {
    super();
    // this.param = new URL(document.URL);
    axios.interceptors.request.use(request => {
      console.log("Starting Request: ", request);
      return request;
    });

    axios.interceptors.response.use(response => {
      console.log("Response: ", response);
      return response;
    });

    axios
      .get(BASE_URL + "/sanctuaries")
      .then(response => (this.param = response.data));
  }
  public test() {
    alert(new URL(document.URL));
  }
}
</script>


