<template lang="pug">
ReposItem(
    v-for="repos in getReposSort" :key="repos.id"
    :repos="repos"
)
</template>
<script>
import { mapGetters } from "vuex";
import ReposItem from '@/components/ReposItem.vue'
export default {
    components: {
        ReposItem
    },
    computed: {
        ...mapGetters(['getReposSort'])
    },
}
</script>
<style lang="scss">
    
</style>