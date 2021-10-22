<template>
  <v-container
    class="grey lighten-5"
    style="margin-top: 70px; border-radius: 40px; max-width: 550px"
  >
    <v-row class="justify-center">
      <v-col cols="12">
        <v-row no-gutters class="border-container" >
          <v-col cols="12" class="text-center" > 
            <v-card 
            class="pa-2 from-title2"          
            >     
                <h3 class="text-center">Registrate y completa la encuesta </h3>
                <h5 class="text-center">para ser uno de los 10 ganadores del gran sorteo</h5>
            </v-card>
          </v-col>
          <v-col class="px-4 pt-4" :class="[mb]" >
            <h5>1.- ¿Desde cuando realiza la actividad de Taxi?	</h5>	
          </v-col>
          <v-col cols="12" class="px-5">
              <v-select
                label="Mes"
                :items="listaDeMeses"
                v-model="encuestaForm.taxi_m"
                :error-messages="errorMesInicio"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.taxi_m.$touch()"
                @blur="$v.encuestaForm.taxi_m.$touch()"
              ></v-select>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                label="Año"
                :items="listaYears"
                v-model="encuestaForm.taxi_y"
                :error-messages="errorYearInicio"
                item-text="tipdoc"
                item-value="id"
                color="orange"
                outlined
                dense
                item-color="orange"
                @input="$v.encuestaForm.taxi_y.$touch()"
                @blur="$v.encuestaForm.taxi_y.$touch()"
              ></v-select>
            </v-col>
            <v-col class="px-2" :class="[mb]">
            <h5>2.- ¿Cuántas horas al día realiza la actividad de Taxi, y cuántos días a la semana?</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                label="N° horas por día"
                :items="listaDeHoras"
                v-model="encuestaForm.horas_dia"
                :error-messages="errorListaHoras"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.horas_dia.$touch()"
                @blur="$v.encuestaForm.horas_dia.$touch()"
              ></v-select> 
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                label="N° días a la semana"
                :items="listaDeDias"
                v-model="encuestaForm.dias_semana"
                :error-messages="errorListaDias"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.dias_semana.$touch()"
                @blur="$v.encuestaForm.dias_semana.$touch()"
              ></v-select> 
            </v-col>
            <v-col class="px-2" :class="[mb]">
            <h5>3.- ¿Cuál es la principal zona donde realiza sus recorridos?			</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                label="Zona principal"
                :items="listaZonas"
                v-model="encuestaForm.zona"
                :error-messages="errorListaZona"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.zona.$touch()"
                @blur="$v.encuestaForm.zona.$touch()"
              ></v-select>
            </v-col>
            <v-col class="px-2" :class="[mb]">
            <h5>4.- ¿Cuánto es su ingreso diario por la actividad de taxi (SIN DESCONTAR GASTO EN COMBUSTIBLE U OTROS GASTOS)?	</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model.number="encuestaForm.ingreso_dia"
                :error-messages="errorIngresos"
                label="Ingreso diario (en soles)"
                color="orange"
                v-mask='"##########"'          
                outlined
                dense
                @input="$v.encuestaForm.ingreso_dia.$touch()"
                @blur="$v.encuestaForm.ingreso_dia.$touch()"
              ></v-text-field>
            </v-col>

            <v-col class="px-2" :class="[mb]">
                <h5>5.- ¿Cuántos kilómetros recorre al día?	</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.km_dia"
                :error-messages="errorKm"
                label="N° de kilómetros por día"
                color="orange"
                v-mask='"############"'
                outlined
                dense
                @input="$v.encuestaForm.km_dia.$touch()"
                @blur="$v.encuestaForm.km_dia.$touch()"
              ></v-text-field>
            </v-col>        

            <v-col class="px-2" :class="[mb]">
                <h5>6.- ¿Cuántas carreras realiza al día? 	</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.carreras_dia"
                :error-messages="errorCarreras"
                label="N° carreras por día"
                color="orange"
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.carreras_dia.$touch()"
                @blur="$v.encuestaForm.carreras_dia.$touch()"
              ></v-text-field>
            </v-col>

            <v-col class="px-2" :class="[mb]">
            <h5>7.- ¿Realiza la actividad de Taxi por aplicativo o servicio remise? Indicar nombre del principal aplicativo o empresa de servicio remisse con que trabaja		</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                label="Servicios"
                :items="listaServicios"
                v-model="encuestaForm.remise"
                :error-messages="errorRemise"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.remise.$touch()"
                @blur="$v.encuestaForm.remise.$touch()"
              ></v-select>
            </v-col>
            
            <div v-if="validarRemise">
            <v-col class="px-2">
            <h5>8.- ¿Realiza la actividad de Taxi por aplicativo o servicio remise a tiempo completo o tiempo parcial?</h5>	
            </v-col>
            
            <v-col cols="12" class="px-5" v-if="validarRemise">
              <v-select
                label="Jornada laboral"
                :items="listaTipoTiempo"
                v-model="encuestaForm.tiempo_remise"
                :error-messages="errorTiempoRemise"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.tiempo_remise.$touch()"
                @blur="$v.encuestaForm.tiempo_remise.$touch()"
              ></v-select>
            </v-col>
            </div>
            <v-col class="px-2" :class="[mb]">
                <h5>9.- ¿Cuánto gasta de combustible al día? Indicar tipo de combustible que usa y gasto al día.	</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                label="Tipo de combustible"
                :items="listaCombustible"
                v-model="encuestaForm.combustible"
                :error-messages="errorTipoCombustible"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.combustible.$touch()"
                @blur="$v.encuestaForm.combustible.$touch()"
              ></v-select>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_combustible"
                :error-messages="errorGastoCombustible"
                label="Gasto combustible por día (en soles)"
                color="orange"
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_combustible.$touch()"
                @blur="$v.encuestaForm.gasto_combustible.$touch()"
              ></v-text-field>
            </v-col>    
            <v-col class="px-2" :class="[mb]">
                <h5>10.- ¿Cuánto gasta en mantenimiento vehicular, revisión técnica vehicular, inspección técnica GNV/GLP, seguro vehicular y SOAT por año?  	</h5>	
            </v-col>
      
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_mantenimiento"
                :error-messages="errorMantenimiento"
                label="Gasto mantenimiento por año (en soles)"
                color="orange"              
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_mantenimiento.$touch()"
                @blur="$v.encuestaForm.gasto_mantenimiento.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5" v-if="validarGastoRtv">
              <v-text-field
                v-model="encuestaForm.gasto_rtv"
                :error-messages="errorRevisión"
                label="Gasto revisión técnica por año (en soles)"
                color="orange"                
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_rtv.$touch()"
                @blur="$v.encuestaForm.gasto_rtv.$touch()"
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_soat"
                :error-messages="errorSoat"
                label="Gasto por SOAT anual (en soles)"
                color="orange"               
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_soat.$touch()"
                @blur="$v.encuestaForm.gasto_soat.$touch()"
              ></v-text-field>
            </v-col>
             <v-col cols="12" class="px-5" v-if="validarGastoGnv">
              <v-text-field
                v-model="encuestaForm.gasto_gnv"
                :error-messages="errorGastoGNV"
                label="Gasto por inspección GNV anual (en soles)"
                color="orange"               
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_gnv.$touch()"
                @blur="$v.encuestaForm.gasto_gnv.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5" v-if="validarGastoGlp">
              <v-text-field
                v-model="encuestaForm.gasto_glp"
                :error-messages="errorGastoGLP"
                label="Gasto por inspección GLP anual (en soles)"
                color="orange"                
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_glp.$touch()"
                @blur="$v.encuestaForm.gasto_glp.$touch()"
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_seguro"
                :error-messages="errorSeguro"
                label="Gasto seguro vehicular por año (en soles)"
                color="orange"                
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_seguro.$touch()"
                @blur="$v.encuestaForm.gasto_seguro.$touch()"
              ></v-text-field>
            </v-col>

            <v-col class="px-2" :class="[mb]">
                <h5> 11.- ¿Percibe ingresos adicionales, distintos a la actividad de Taxi? Indicar tipo de actividad, formalidad y nivel de ingresos mensuales.</h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-select
                label="Actividades"
                :items="listaActividades"
                v-model="encuestaForm.actividad"
                :error-messages="errorActividades"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.actividad.$touch()"
                @blur="$v.encuestaForm.actividad.$touch()"
              ></v-select>
            </v-col>
                <v-col cols="12" class="px-5" v-if="validarFormalidad">
              <v-select
                label="Tipo formalidad"
                :items="listaFormalidad"
                v-model="encuestaForm.formalidad"
                :error-messages="errorFormalidad"
                item-text="tipdoc"
                item-value="id"
                dense
                outlined
                color="orange"
                item-color="orange"
                @input="$v.encuestaForm.formalidad.$touch()"
                @blur="$v.encuestaForm.formalidad.$touch()"
              ></v-select>
            </v-col>
              <v-col cols="12" class="px-5" v-if="validarFormalidad">
              <v-text-field
                v-model="encuestaForm.ingreso_adicional"
                :error-messages="errorIngresoAdicional"
                label="Ingresos adicionales por mes (en soles)"
                color="orange"
                outlined  
                v-mask='"############"'             
                dense
                @input="$v.encuestaForm.ingreso_adicional.$touch()"
                @blur="$v.encuestaForm.ingreso_adicional.$touch()"
              ></v-text-field>
            </v-col>
            <v-col class="px-2" :class="[mb]">
                <h5>12.- ¿Cuánto estima su nivel de gastos familiares al mes (alimentación, servicios, alquiler, educación, salud, otros)? </h5>	
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_alimentacion"
                :error-messages="errorGastoAlimentacion"
                label="Gasto alimentación por mes (en soles)"
                color="orange"                
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_alimentacion.$touch()"
                @blur="$v.encuestaForm.gasto_alimentacion.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_servicios"
                :error-messages="errorGastoServicios"
                label="Gastos (agua, luz, internet, etc) por mes (en soles)"
                color="orange"                
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_servicios.$touch()"
                @blur="$v.encuestaForm.gasto_servicios.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_alquiler"
                :error-messages="errorGastoAlquiler"
                label="Gasto alquiler por mes (en soles)"
                color="orange"               
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_alquiler.$touch()"
                @blur="$v.encuestaForm.gasto_alquiler.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_educacion"
                :error-messages="errorGastoEducacion"
                label="Gasto educación por mes (en soles)"
                color="orange"               
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_educacion.$touch()"
                @blur="$v.encuestaForm.gasto_educacion.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5">
              <v-text-field
                v-model="encuestaForm.gasto_salud"
                :error-messages="errorGastoSalud"
                label="Gasto salud por mes (en soles)"
                color="orange"                
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_salud.$touch()"
                @blur="$v.encuestaForm.gasto_salud.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-5" >
              <v-text-field
                v-model="encuestaForm.gasto_otros"
                :error-messages="errorGastoOtros"               
                label="Otros gastos por mes (en soles)"
                color="orange"
                outlined
                v-mask='"############"'
                dense
                @input="$v.encuestaForm.gasto_otros.$touch()"
                @blur="$v.encuestaForm.gasto_otros.$touch()"
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row no-gutters>
          <v-btn
            class="mt-5 mx-auto from-title subtitle-1 font-weight-light"
            style="width: 60%"
            @click="sumitEvaluation()"
            >ENVIAR ENCUESTA
            </v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import nextPage from "@/mixins/nextPage";
import validationEncuesta from "~/mixins/validation/encuesta";
export default {
  data() {
    return {
      mb: 'mb-3',
      encuestaForm: {
        taxi_m: "",
        taxi_y: "",
        horas_dia: "",
        dias_semana: "",
        zona: "",
        ingreso_dia: "",
        km_dia: "",
        carreras_dia: "",
        remise: "",
        tiempo_remise: "",
        combustible: "",
        gasto_combustible: "",
        gasto_mantenimiento: "",
        gasto_rtv: "",
        gasto_soat: "",
        gasto_gnv: "",
        gasto_glp: "",
        gasto_seguro: "",
        actividad: "",
        formalidad: "",
        ingreso_adicional: "",
        gasto_alimentacion: "",
        gasto_servicios: "",
        gasto_alquiler: "",
        gasto_educacion: "",
        gasto_salud: "",
        gasto_otros: "",
        cliente: "",
      },
    };
  },
  mixins: [nextPage,validationEncuesta],  
  props: ["currentComponent"],
  methods: {
     async sumitEvaluation() {
      this.$v.$touch();
      if (this.$v.$invalid) {
      } else {
        if (this.encuestaForm.remise=="no trabajo con aplicativo ni servicio remise") {
          this.encuestaForm.tiempo_remise=""
        }

        if (this.encuestaForm.combustible=="gnv") {
          this.encuestaForm.gasto_glp=""
        }
          else if (this.encuestaForm.combustible=="glp") {
          this.encuestaForm.gasto_gnv=""
        }
        else{
            this.encuestaForm.gasto_gnv=""
            this.encuestaForm.gasto_glp=""
        }

         if (this.encuestaForm.actividad=="no realizo otra actividad distinta a la de taxi") {
          this.encuestaForm.formalidad=""
          this.encuestaForm.ingreso_adicional=""

        }

        try {
          await this.$store.dispatch("encuesta/evaluacionEncuesta", this.encuestaForm);
          await this.analyzeProspectStatus()
        } catch (error) {
          this.$showError(error)
        }
      }
    },
  },
  computed: {
    
    listaDeMeses() {
      return this.currentComponent.catalogs.listaDeMeses
    },
    listaZonas() {
      return this.currentComponent.catalogs.listaZonas
    },
    listaServicios() {
    return this.currentComponent.catalogs.listaServicios
    },
    listaCombustible() {
    return this.currentComponent.catalogs.listaCombustible
    },
    listaActividades() {
    return this.currentComponent.catalogs.listaActividades
    },
    listaFormalidad() {
    return this.currentComponent.catalogs.listaFormalidad
    },    
    listaDeHoras() {
    return this.currentComponent.catalogs.listaDeHoras
    },
    listaDeDias() {
    return this.currentComponent.catalogs.listaDeDias
    },
    listaTipoTiempo(){
    return this.currentComponent.catalogs.listaTipoTiempo

    }

  },
};
</script>

<style lang="sass">
.v-input--checkbox
  margin: 0 !important
  padding: 0 !important
  .v-input__control,
  .v-input__slot
    margin: 0 !important
.v-input__slot
  margin-bottom: 0 !important
.v-card__subtitle,
.v-card__text,
.v-card__title
  padding: 10px 0 0 0 !important
.v-application .text-h5
  line-height: 0rem !important
.v-list-item__content
  padding: 10px 0 0 0 !important
.v-label
  font-size: 13px !important

</style>
