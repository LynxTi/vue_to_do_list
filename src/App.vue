<template>
  <div class="wrapper">
    <TheHeader/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '@/assets/sass/index.sass'
import TheHeader from "@/components/TheHeader.vue";
import {mapState} from "vuex";

export default {
  name: 'App',
  components: {
    TheHeader
  },
  created() {
    console.log(this.tasck)
  },
  computed: {
    ...mapState(['tasck'])
  }
}
</script>

<style>

</style>
