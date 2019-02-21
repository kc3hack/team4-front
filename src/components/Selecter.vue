<template>
  <div class="Selecter">
    <span class="button">
        <v-btn color="warning" @click="showMap">マップ</v-btn>
        <v-btn color="warning" @click="showAnime">アニメ</v-btn>
    </span>
  </div>

</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';

@Component
export default class Selecter extends Vue {
  public showMap() {
    alert('showMap');
  }
  public showAnime() {
    alert('showAnime');
  }
}
</script>

<style >
  .title {
    cursor: pointer;
    padding-left: 50px;
    font-size: 50px;
    margin:20px;
    font-style: bold;
    color:rgb(227, 173, 92);
  }


</style>
