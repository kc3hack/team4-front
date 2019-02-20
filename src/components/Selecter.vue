<template>
  <div class="Selecter">
    <span class="title" @click="showAnime">アニメ</span>
    <span class="title" @click="showMap">マップ</span>
  </div>

</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
