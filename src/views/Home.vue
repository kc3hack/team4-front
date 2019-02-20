<template>
  <div class="home">
    <v-card-title class="headline font-weight-regular blue-grey white--text">
      SEITIMEGURI
      </v-card-title>
      <v-app id="inspire">
        <Selecter/>
        <Card/>
        <Board/>
      </v-app>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Selecter from '@/components/Selecter.vue';
import Card from '@/components/Card.vue';
import Board from '@/components/Board.vue';

@Component({
  components: {
    Selecter,
    Card,
    Board,
  },
})
export default class Home extends Vue {}
</script>

<style>
    .select {
      margin: 20px;
    }
</style>

