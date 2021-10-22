<template>
  <v-dialog v-model="dialogVisible" max-width="610.8pt !important" class="terms-conditions-modal">
    <v-card>
      <v-col cols="12" text-right pa-2 @click="close">
        <v-btn icon class="primary" dark>
          <v-icon>clear</v-icon>
        </v-btn>
      </v-col>
      <iframe
        id="documentoTC"
        style="height: 100vh; width: 100%; border: white;"
        src="https://acceso.com.pe/wp-content/uploads/2021/10/TyC_ENCUESTA_OCT.2021_VF-1-1.pdf">
      </iframe>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
  },
}
</script>
