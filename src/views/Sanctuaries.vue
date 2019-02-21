<template>
  <div>
      {{param}}
  </div>

</template>

<script lang="ts">
import Selecter from '@/components/Selecter.vue';
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

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
    // param = new URL(document.URL);
    constructor (){
        super();
        // this.param = new URL(document.URL);
        axios.get(document.URL).then(response => (this.param = response.data))
    }
    public test() {
        alert(new URL(document.URL))
    }
}
</script>


