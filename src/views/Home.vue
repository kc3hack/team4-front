<template>
  <div class="home">
    <v-card-title class="headline font-weight-regular blue-grey white--text">
      SEITIMEGURI
      </v-card-title>
      <v-app id="inspire">
        <Selecter class="select center"/>
        <Card/>
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
  public items = [
    {
      title: 'title 1',
      address: 'address 1'
    },{
      title: 'title 2',
      address: 'address 2'
    },{
      title: 'title 3',
      address: 'address 3'
    },{
      title: 'title 4',
      address: 'address '
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

