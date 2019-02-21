<template>

    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="require('../assets/pic.png')"
          height="100px"
          aspect-ratio=""
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
                title
            </h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>
 
      </v-card>
    </v-flex>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

