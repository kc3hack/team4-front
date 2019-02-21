<template>
    <ul style="list-style: none;">
        <li v-for="item in items" :key='item.anime_id'>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-title>
                        <div>
                            <span class="grey--text">
                                {{ item.title }}
                            </span>
                            <br>
                            <span>
                                {{ item.address }}
                            </span>
                            <br>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="orange">
                            <!-- <router-link v-bind:to="{ name : 'item', query : { anime_id: item.anime_id }}">Show</router-link> -->
                            <router-link v-bind:to="{ path : 'sanctuarie', query : { anime_id: item.anime_id }}">show</router-link>
                        </v-btn>
                        <!-- <v-btn flat color="orange">Explore</v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-flex>
        </li>
    </ul>
</template>

<script lang="ts">
// import Vue from 'vue'
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Card extends Vue{

    items = [
    {
      title: 'anime title 1',
      address: 'address 1',
      anime_id: 1
    },{
      title: 'anime title 2',
      address: 'address 2' ,
      anime_id: 2
    
    },{
      title: 'tanime itle 3',
      address: 'address 3',
      anime_id: 3
    },{
      title: 'anime title 4',
      address: 'address 4',
      anime_id: 4
    },
  ]
}
</script>

