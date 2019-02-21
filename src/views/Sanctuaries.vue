<template>
<div>
    <v-card-title class="headline font-weight-regular blue-grey white--text">
    SEITIMEGURI
    </v-card-title>

        <v-card>
            <v-card-title>
                <div>
                    <v-img
                    src="https://dic.nicovideo.jp/oekaki/445241.png"
                    height="125px"
                    contain
                  ></v-img>
                    <span class="grey--text">
                        {{ obj.anime_name }}
                    </span>
                    <br>
                    <span>
                        {{ obj.url }}
                    </span>
                    <br>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="orange">
                    <!-- <router-link v-bind:to="{ name : 'item', query : { anime_id: item.anime_id }}">Show</router-link> -->
                    <!-- <router-link v-bind:to="{ path : 'sanctuaries', query : { anime_id: item.anime_id }}">show</router-link> -->
                </v-btn>
                <!-- <v-btn flat color="orange">Explore</v-btn> -->
            </v-card-actions>
        </v-card>



      <!-- {{obj.anime_name}}
      {{obj.anime_id}}
      {{obj.url}} -->
  </div>

</template>

<script lang="ts">
import Selecter from '@/components/Selecter.vue';
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
// import parseJson from 'parse-json';

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


