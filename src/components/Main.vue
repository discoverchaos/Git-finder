<template lang="pug">
main.main
    Search()
    h2.error(v-if="error") {{ error }}
    User()
    Repos()
</template>
<script>
import { mapState } from "vuex";
import Search from './Search.vue'
import User from './User.vue'
import Repos from './Repos.vue'
export default {
    components: { Search, User, Repos },
    computed: {
        ...mapState(['error'])
    },
}
</script>
<style lang="scss">
    .error{
        font-size: 23px;
        color: red;
        text-transform: uppercase;
        text-align: center;
        max-width: 600px;
        margin: 30px auto;
    }
</style>