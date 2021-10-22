<template>
  <v-row no-gutters>
    <v-col cols="12" class="d-flex justify-center mt-8 mb-8">
      <v-img :src="logo" class="imgPrincipal" alt="imgInfo" />
    </v-col>
    <v-col cols="12" align="center" class="d-flex flex-center justify-center">
      <v-img :src="nota" class="imgFooter" alt="imgFooter" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ["logo", "nota"],
  data() {
    return {
      //logoBim: require("@/assets/img/Bim/bimNavLogo.png"),
    };
  },
  methods: {
    /*onclickInfo() {
      this.$emit("onclickInfo");
    },*/
  },
};
</script>
<style scoped>
.imgPrincipal {
  max-width: 300px;
}
.imgFooter {
  max-width: 300px;
}
@media (min-width: 1024px) {
  .imgPrincipal {
    max-width: 450px;
  }
  .imgFooter {
    max-width: 400px;
  }
}
</style>
