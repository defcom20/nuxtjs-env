<template>
  <v-container
    class="grey lighten-4"
    style="margin-top: 150px; border-radius: 30px; max-width: 550px"
  >
    <v-row class="justify-center">
  
        <v-col cols="12" class="my-100 px-100">
            <h2 class="font-weight-medium subtitle text-center mb-6">
              ¡Gracias por culminar la encuesta, ahora ya estas participando por uno de los 10 pocket pro Vende Más!
            </h2>
            <center>
              <img :src="require('@/assets/encuesta/like.png') " >
              </center> 
            <h3 class="text-center">
              Fecha de Sorteo: 02 de noviembre del 2021
            </h3>

             <v-btn
              class="mt-5 mx-auto from-title subtitle-1 font-weight-light"
              style="width: 50%"
              type="submit"
              @click="finalizar()"
              >Salir</v-btn
            >                
        </v-col>
    
    </v-row>
    <!-- <TermsConditionsModal ref="termsConditionsModal" /> -->
  </v-container>
</template>
<script>

export default {

  methods: {  
    finalizar(){
      window.location.reload()
    }
  }
} 

</script>

