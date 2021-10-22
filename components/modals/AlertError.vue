<template>
  <v-dialog v-model="dialogVisible" persistent max-width="350">
    <v-card>
      <div style="padding-top: 10px">
        <template>
          <img
            :src="imgError"
            alt
            srcset
            max-width="24"
            style="display: block; margin: auto"
            class="my-4"
          />
        </template>
      </div>
      <v-card-title style="padding-top: 0px">
        <v-row class="d-flex flex-row justify-center text-center title justify">
          <b
            style="word-break: break-word; font-size: 28px !important"
            class="secondary--text justify"
            v-html="tituloModal"
          ></b>
        </v-row>
      </v-card-title>
      <v-card-text style="text-align: center">        
        <p style="font-size: 18px !important">
          {{ name }} -- {{ statusCode }}
        </p>
        <p style="font-size: 18px !important">
          {{ message }}
        </p>
      </v-card-text>
      <v-card-actions class="d-flex flex-row justify-center">
        <v-btn color="#005092" class="white--text" @click="close">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      imgError: require('@/assets/encuesta/fail.png'),
      dialogVisible: false,
      tituloModal: 'Error',
      name: '',
      statusCode: '',
      message: '',
    }
  },
  methods: {
    open({ name, statusCode, message='' }) {
      this.dialogVisible = true;
      this.name = name;
      this.statusCode = statusCode;
      this.message = message;
    },
    close() {////muchas acciones
      this.dialogVisible = false;
    },
  },
}
</script>
<style>
</style>
