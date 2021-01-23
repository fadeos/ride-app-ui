<template>

    <li :class="checkMiles" v-on:click="checkClicked" @click="$emit('click-event', id)">
        <div><span class="badge bg-info text-dark rounded-pill">{{clicked}}</span> ID - <b> {{ id }} </b></div>
        <div>
            <span class="badge bg-success rounded-pill">{{ getPrice }} EUR </span>
        </div>
    </li>

</template>

<script>
export default {
    props: ['id', 'miles'],
    data() {
        return {
            clicked: '',
            style: 'list-group-item d-flex justify-content-between align-items-right',
            price: 0.0
        }
    },
    computed: {
        getPrice() {
            
            let ride = this.$store.getters.prices.filter(data => data.id == this.id);
            if(ride.length){
                return ride[0].price;
            }
            else{
                return this.price;
            }      
        },

        checkMiles(){
            return this.miles <= 2 ? this.style : this.style.concat(' bg-danger');     
        }

    },
    created() {
        this.$store.dispatch('getPrice', this.id);
    },
    methods: {
        checkClicked(){
            this.clicked = 'clicked';
        }
    }
}
</script>

<style>

</style>