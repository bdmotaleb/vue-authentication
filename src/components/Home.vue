<template>
  <div class="mt-3">
    <h3>Hi {{ user.name }}</h3>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Home",
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>