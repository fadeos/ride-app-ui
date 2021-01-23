<template>

<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-4">
      <ul class="list-group">
        <Ride v-for="ride in rides" :key="ride.id" @click-event="showModal($event)" :id="ride.id" :miles="ride.distance"/>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row justify-content-md-center">
    <div class="col col-lg-1">
      <Loading/>
    </div>
  </div>
</div>
    
</template>

<script>
import Ride from './Ride.vue';
import Loading from './Loading.vue';
export default {
  components: {
      Ride,Loading,
  },
  computed: {
    rides(){
      return this.$store.getters.rides
    }
  },
  created() {
    this.$store.dispatch('getRides');
  },
  methods: {
    showModal(id){
      this.$store.commit('showModal');
      this.$store.commit('setRide', id);
    }
  }
    
}
</script>

<style>

.container {
  margin-top: 100px;
}

</style>