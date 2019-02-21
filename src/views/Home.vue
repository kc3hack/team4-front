<template>
  <div class="home">
    <v-card-title class="headline font-weight-regular blue-grey white--text">
      SEITIMEGURI
      </v-card-title>
      <v-app id="inspire">
        <Selecter class="select center"/>
        <ul style="list-style: none;">
          <li v-for="item in items">
            <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="card-title">{{item.title}}</div>
                      <div class="card-addr">{{item.address}}</div>
                      <div class="card-homepage"></div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

          </li>
        </ul>
        <!-- <Card class="center"/> -->
        <!-- <List/> -->
        
      </v-app>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Selecter from '@/components/Selecter.vue';
import Card from '@/components/Card.vue';
import Board from '@/components/Board.vue';
import List from '@/components/List.vue';


@Component({
  components: {
    Selecter,
    Card,
    // List,
    // Board,
  },
})
export default class Home extends Vue {
  items = [
    {
      title: 'title 1',
      address: 'address 1'
    },{
      title: 'title 2',
      address: 'address 2'
    },{
      title: 'title 3',
      address: 'address 3'
    },
  ]
}
</script>

<style>
    .select {
      margin: 20px;
    }
    /* .board {
      position:absolute
    } */
    .center {
      text-align:center;
    }
</style>

