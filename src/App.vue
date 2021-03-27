<template>
  <div id="app">
    <navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: 5rem auto 0;
}
</style>
