<template>
  <v-container class="onboarding__container d-flex flex-column">
    <v-row class="d-flex flex-row">
      <v-col cols="12" class="d-flex flex-column justify-center">
        
        <component
          :is="currentComponent.name"
          :currentComponent="currentComponent"
          @open-modal-menssage-prospectus="openModalMenssageProspectus"
        />
        <ModalAlertGlobal ref="modalAlertGlobal" :currentComponent="currentComponent" />        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import evaluation from "~/components/encuesta/evaluation.vue";
import ModalAlertGlobal from "~/components/modals/ModalAlertGlobal.vue"

export default {
  layout: "defaultMain",
  
  components: {
    evaluation,
    ModalAlertGlobal,
    
    encuestaForm: () => import("~/components/encuesta/encuesta.vue"),
    evaluationCompleted: () => import("~/components/encuesta/evaluationCompleted.vue"),
  },
  computed: {
    ...mapGetters("encuesta", ["currentComponent"]),
  },
  mounted() {

  },
  methods: {
    openModalMenssageProspectus(data) {
      this.$refs.modalAlertGlobal.open(data);
    }
  }

};
</script>
<style>
.from-title {
  height: 52px;
  border-radius: 14px;
  font-weight: 700;
  background-image: linear-gradient(315deg, #ff4e00, #ec9f05 74%);
  color: #ffffff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-input .v-input__control .v-input__slot .v-input--radio-group__input {
  justify-content: space-evenly !important;
}
</style>
