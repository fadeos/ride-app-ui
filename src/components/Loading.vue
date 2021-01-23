<template>

    <div v-if="$store.state.loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>