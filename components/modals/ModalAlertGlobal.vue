<template>
  <v-dialog v-model="dialogVisible" persistent :max-width="maxWidth">
    <v-card>
      <div style="padding-top: 10px" v-if="imgModal">
        <template v-if="imgModal == 'success'">
          <img
            :src="imgSuccess"
            alt
            srcset
            max-width="24"
            style="display: block; margin: auto"
            class="my-4"
          />
        </template>
        <template v-else-if="imgModal == 'warning'">
          <img
            :src="imgWarning"
            alt
            srcset
            max-width="24"
            style="display: block; margin: auto"
            class="my-4"
          />
        </template>
        <template v-else-if="imgModal == 'error'">
          <img
            :src="imgError"
            alt
            srcset
            max-width="24"
            style="display: block; margin: auto"
            class="my-4"
          />
        </template>
        <template v-else>
          <img
            :src="imgModal"
            alt
            srcset
            max-width="24"
            style="display: block; margin: auto"
            class="my-4"
          />
        </template>
      </div>
      <v-card-title v-if="tituloModal" style="padding-top: 0px">
        <v-row class="d-flex flex-row justify-center text-center title justify">
          <b
            style="word-break: break-word; font-size: 28px !important"
            class="secondary--text justify"
            v-html="tituloModal"
          ></b>
        </v-row>
      </v-card-title>
      <v-card-text v-if="msgModal" style="text-align: center">
        <p style="font-size: 18px !important" v-html="msgModal"></p>
      </v-card-text>
      <v-card-actions class="d-flex flex-row justify-center">
        <v-btn color="#005092" class="white--text" @click="close">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    currentComponent: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      imgSuccess: require('@/assets/encuesta/success.png'),
      imgWarning: require('@/assets/encuesta/warning.png'),
      imgError: require('@/assets/encuesta/fail.png'),
      dialogVisible: false,
      ////////////////////////
      imgModal: '',
      tituloModal: 'mensaje',
      msgModal: '',
      maxWidth: 350,
      reset: null,
      push: '',
      reload: false,
    }
  },
  methods: {
    open({ message = '', titulo = '', img = 'warning', push = null, reset = null, reload = false, }) {
      this.msgModal = message
      this.tituloModal = titulo
      this.imgModal = img
      this.dialogVisible = true
      this.push = push
      this.reset = reset;
      this.reload = reload;
    },
    close() {
      this.dialogVisible = false
      if (this.push) {
        this.$router.replace(this.push);
        this.$store.commit(`${this.currentComponent.nameSpace}/CLEAR_ALL_WITHOUT_STEP`);
      }
      if(this.reset) {
        this.$store.commit(`${this.reset}/CLEAR_ALL`)
      }
      if(this.reload) {
        this.$store.commit(`${this.currentComponent.nameSpace}/CLEAR_ALL`);
        window.location.reload()
      }
    },
  },
}
</script>
<style>
</style>
