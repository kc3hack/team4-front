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
  },
})

// import Vue from 'vue'
export default class Sanctuaries extends Vue {
    public param: string = "";
    public obj: any;
    // param = new URL(document.URL);
    constructor (){
        super();
        // this.param = new URL(document.URL);
        axios.get(document.URL).then(response => (this.param = response.data))
        this.obj = JSON.parse(this.param);
        // let json = '{"anime_id":1,"anime_name":"けいおん", "url":"http://www.tbs.co.jp/anime/k-on/k-on_tv/"}'
        // this.obj = JSON.parse(json);
    }
}
</script>


