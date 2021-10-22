<template>
<v-content>
  {{env}}
  <v-container
    style="margin-top: 60px; border-radius: 40px "
  >
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-col cols="12" md="6" class="container-banner">
          <div class="banner-imgPrincipal">
            <img :src="require('@/assets/encuesta/IMG-principal.png')" class="tamañoIMG"  />
          </div>
        </v-col>
      </v-col>
      <v-col cols="12" md="6">
        <form @submit.prevent="sumitPreEvaluation" >
          <v-row no-gutters class="border-container container-banner2">
            <v-col cols="12" class="text-center">
              <v-card class="pa-2 from-title">Datos del cliente</v-card>
            </v-col>
            <v-col cols="12" class="my-5 px-5">
              <h5> 
                Para poder responder la encuesta, necesitamos primero que nos
                brindes tus datos.
              </h5>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                :color= "colorInput"
                background-color="white"
                placeholder="Tipo Documento"
                :items="listadoTipoDocumento"
                v-model="formPreEvaluation.tipo_documento"
                :error-messages="errorTipoDocumento"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                @input="$v.formPreEvaluation.tipo_documento.$touch()"
                @blur="$v.formPreEvaluation.tipo_documento.$touch()"
              ></v-select>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="formPreEvaluation.documento"
                :color= "colorInput"
                background-color="white"
                :error-messages="errorDocumento"
                :maxlength="validarTipoDocumento.max"
                v-mask="'############'"
                placeholder="Documento"
                outlined
                dense
                @input="$v.formPreEvaluation.documento.$touch()"
                @blur="$v.formPreEvaluation.documento.$touch()"
              ></v-text-field>
            </v-col>
                <v-col cols="12" class="px-5">
              <v-text-field
                v-model="formPreEvaluation.telefono"
                :error-messages="errorTelefono"
                v-mask="'### ### ###'"
                placeholder ="Número celular"
                :color= "colorInput"
                background-color="white"
                outlined
                dense
                @input="$v.formPreEvaluation.telefono.$touch()"
                @blur="$v.formPreEvaluation.telefono.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="formPreEvaluation.correo"
                :error-messages="errorCorreo"
                placeholder="Correo"
                :color= "colorInput"
                background-color="white"
                outlined
                dense
                @input="$v.formPreEvaluation.correo.$touch()"
                @blur="$v.formPreEvaluation.correo.$touch()"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" class="px-5">
              <v-select
                placeholder="Estado Civil"
                :items="listaEstadoCivil"
                v-model="formPreEvaluation.estado_civil"
                :error-messages="errorEstadoCivil"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                :color= "colorInput"
                background-color="white"
                item-color="orange"
                @input="$v.formPreEvaluation.estado_civil.$touch()"
                @blur="$v.formPreEvaluation.estado_civil.$touch()"
              ></v-select>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                placeholder="Número de hijos"
                :items="listaDeHijos"
                v-model="formPreEvaluation.numero_hijos"
                :error-messages="errorNumeroHijos"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                :color= "colorInput"
                background-color="white"
                item-color="orange"
                hint="Menores de 25 años"
                persistent-hint
                @input="$v.formPreEvaluation.numero_hijos.$touch()"
                @blur="$v.formPreEvaluation.numero_hijos.$touch()"
              ></v-select>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="formPreEvaluation.placa"
                :error-messages="errorPlaca"
                placeholder="Placa"
                :color= "colorInput"
                background-color="white"
                data-vv-as="placa"
                data-vv-name="placa"
                v-mask="'AXX-XXX'"
                onkeyup="this.value = this.value.toUpperCase();"
                outlined
                dense
                @input="$v.formPreEvaluation.placa.$touch()"
                @blur="$v.formPreEvaluation.placa.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="formPreEvaluation.marca"
                :error-messages="errorMarca"
          
                placeholder="Marca"
                :color= "colorInput"
                background-color="white" 
                outlined
                dense
                @input="$v.formPreEvaluation.marca.$touch()"
                @blur="$v.formPreEvaluation.marca.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                placeholder="Ingrese año fabricacion"
                :items="listYear"
                v-model="formPreEvaluation.year_fabricacion"
                :error-messages="errorYearFabricacion"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                :color= "colorInput"
                background-color="white"
                item-color="orange"
                @input="$v.formPreEvaluation.year_fabricacion.$touch()"
                @blur="$v.formPreEvaluation.year_fabricacion.$touch()"
              ></v-select>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-checkbox
                v-model="formPreEvaluation.accept_terms"
                color="orange"
                :error-messages="errorTerminos"
              >
                <template v-slot:label>
                  <small class="terminos" style="color: rgba(0, 0, 0, 0.6)">
                    Acepto los
                    <small @click="openTermsConditions()" class="terminos" style="color: black">
                      Términos y Condiciones y las Políticas de Privacidad de
                      Datos.
                    </small>
                  </small>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-btn
              class="mt-5 mx-auto from-title subtitle-1 font-weight-light"
              style="width: 60%"
              type="submit"
              >INICIAR ENCUESTA</v-btn
            >
          </v-row>
        </form>
      </v-col>
    </v-row>
    <TermsConditionsModal ref="termsConditionsModal" />
  </v-container>
</v-content>
</template>
<script>
import TermsConditionsModal from '@/components/modals/ModalTermsConditions'
import nextPage from '@/mixins/nextPage'
import validateEvaluation from '@/mixins/validation/evaluation'
export default {
  components: {
    TermsConditionsModal,
  },
  mixins: [nextPage, validateEvaluation],
  props: ['currentComponent'],

  data() {
    return {
      colorInput: "black",
      menuFechaNacimiento: false,
      formPreEvaluation: {
        tipo_documento: '',
        documento: '',
        telefono:'',
        estado_civil: '',
        numero_hijos: '',
        correo:'',
        placa: '',
        marca: '',
        year_fabricacion: '',
        accept_terms: false,
      }
    }
  },
  created() {
    //this.$store.commit('ISLOADING_PAGE', true)
  },
  computed: {
    env() {
      return process.env.NUXT_ENTORNO
    },
    listadoTipoDocumento() {
      return this.currentComponent.catalogs.listaTiposDocumentos
    },
    listaEstadoCivil() {
      return this.currentComponent.catalogs.listaEstadoCivil
    },
    listaDeHijos() {
      return this.currentComponent.catalogs.listaDeHijos
    },
    states(){
      return this.currentComponent.catalogs.states
    }
  },

  methods: {
  
    openTermsConditions(event) {
      this.$refs.termsConditionsModal.open()
    },
    async sumitPreEvaluation() {
      this.$v.$touch()
      if (this.$v.$invalid) {
      } else {
        this.formPreEvaluation.placa = this.formPreEvaluation.placa.replace('-','')
        this.formPreEvaluation.telefono=this.formPreEvaluation.telefono.replaceAll(' ','')
        try {
          await this.$store.dispatch('encuesta/evaluacionCliente', this.formPreEvaluation)
          await this.analyzeProspectStatus()
        } catch (error) {
          this.$showError(error)
        }
        
      }
    },
  },
}
</script>
<style scoped>
.container-banner {
  max-width: 500px;
}
.container-banner div img {
  width: 100%;
}
@media screen and (min-width: 960px) {
  .container-banner {
    max-width: 1000px;
    max-height: 1000px;
  }
  .tamañoIMG{
    width:900px ;
    
  }

}
@media screen and (max-width: 960px) {
  .container-banner2 {
    max-width: 1000px;
    max-height: 1000px;
    background: #fffffff0;
  }
  .tamañoIMG{
    width:450px ;
    height:450px ;
    margin:0px auto;
	  text-align:center;
  }
  .container-banner {
  max-width: 600px;
}


}

@media screen and (max-width: 480px) {
  .container-banner2 {
    max-width: 1000px;
    max-height: 1000px;
    background: #fffffff0;
  }
  .tamañoIMG{
    width:200px ;
    height:300px ;
    margin:0px auto;
	  text-align:center;
  }
  .container-banner {
    max-width: 450px;
}


}

</style>
