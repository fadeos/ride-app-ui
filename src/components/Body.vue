<template>

    <div class="container-fluid">
      <Rides/>
      <RideModal/>
    </div>
    
</template>

<script>
import Rides from './Rides.vue';
import RideModal from './RideModal.vue';
export default {
    components: {
        Rides,RideModal,
    } 
}
</script>

<style>

</style>