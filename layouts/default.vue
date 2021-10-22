<template>
  <v-app class="mainLayout">
    <nuxt />
  </v-app>
</template>

<script>
import HomeToolbar from "~/components/shared/toolbar/HomeToolbar.vue";
export default {
  components: {
    HomeToolbar,
  },
  computed: {
    pathActual() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="sass" scoped>
.theme--light.v-application
  background: radial-gradient(ellipse at center, #3288be 0, #005e98 50%, #00436c 100%) !important
</style>
