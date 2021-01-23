<template>

<div v-if="$store.state.displayModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Ride Info</h5>
              </div>
              <div class="modal-body">
                <p><b>Duration</b> : {{duration()}}</p>
                <p><b>End time of ride</b> : {{ endTime() }}</p>
              </div>
              <div class="modal-footer">
                <button type="button" @click="closeModal" class="btn btn-primary">Close</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
</div>
 
</template>

<script>
export default {

  methods: {
    closeModal(){
      this.$store.commit('closeModal');
    },
    endTime(){
      let startTime = new Date(this.$store.getters.getRide.startTime);
      let duration = this.$store.getters.getRide.duration;
      startTime.setSeconds(startTime.getSeconds() + duration);
      return new Date(startTime.getTime()).toJSON();
    },
    duration(){
      let duration = this.$store.getters.getRide.duration;
      let hours = Math.floor(duration / 3600);
      duration %= 3600;
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;

      return hours + ':' + minutes + ':' + seconds;

    }
  }
    
}
</script>

<style>

</style>