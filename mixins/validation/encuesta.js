import { integer,minValue,between,required, numeric,maxValue  } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  validations() {
    return {
      encuestaForm: {
        taxi_m: { required },
        taxi_y: { required,},
        horas_dia:{ required },
        dias_semana: {required},
        remise:{ required },
        zona:{required},
        combustible:{required},
        actividad:{ required },
        formalidad: this.validarFormalidad?{required}:{},
        tiempo_remise: this.validarRemise ? {required}: {},
        ingreso_adicional:this.validarFormalidad?{
            required,
            numeric,
          minValue: minValue(100),
          integer,
        }:{},
        gasto_rtv: this.validarGastoRtv ? {
          required,
          numeric,
          minValue: minValue(60),
          integer,
        }: {
        },
        gasto_gnv: this.validarGastoGnv?{
          required,
          numeric,
          minValue: minValue(50),
          integer,
        }:{},
        gasto_glp:this.validarGastoGlp? {
          required,
          numeric,
          minValue: minValue(50),
          integer,
        }:{},
        ingreso_dia: {
          required,
          numeric,
          minValue: minValue(30),
          integer,
              
        },
        km_dia: {
          required,
          numeric,
          between: between(30,1200), 
          integer,       
        },
        carreras_dia:{
          required,
          numeric,
          minValue: minValue(1), 
          integer,
        },
        gasto_combustible:{
          required,
          numeric,
          minValue: minValue(3), 
          integer,
        },
        gasto_mantenimiento:{
            required,
          numeric,
          minValue: minValue(100),
          integer,
        },
        gasto_soat:{
          required,
          numeric,
          minValue: minValue(50),
          integer,
        },
        gasto_seguro:this.validarSeguro?{
          numeric,
          minValue: minValue(0),
          maxValue: maxValue(0  ),
          integer,
        }:{
          numeric,
          minValue: minValue(500),
          integer,
        },
        gasto_alimentacion:{
          required,
          numeric,
          minValue: minValue(150),
          integer,
        },
        gasto_servicios:{
          required,
          numeric,
          minValue: minValue(30),
          integer,
        },
        gasto_alquiler:{
          required,
          numeric,
          minValue: minValue(0),
          integer,
        },
        gasto_educacion:{
          required,
          numeric,
          minValue: minValue(0),
          integer,
        },
        gasto_salud:{
          required,
          numeric,
          minValue: minValue(0),
          integer,
        },
        gasto_otros:{
          numeric,
          minValue: minValue(0),
          integer,
        },
      }
    }
  },

   computed: {
    ...mapGetters("encuesta", ["fechaFabricacion"]),
    errorMesInicio() {
      const errors = [];
      if (!this.$v.encuestaForm.taxi_m.$dirty) return errors;
      !this.$v.encuestaForm.taxi_m.required &&
        errors.push("El mes es requerido.");
      return errors;
    },
    errorYearInicio() {
      const errors = [];
      if (!this.$v.encuestaForm.taxi_y.$dirty) return errors;
      !this.$v.encuestaForm.taxi_y.required &&
        errors.push("El año es requerido.");
      return errors;
    },
    errorListaHoras(){
        const errors = [];
        if (!this.$v.encuestaForm.horas_dia.$dirty) return errors;
      !this.$v.encuestaForm.horas_dia.required &&
        errors.push("El número de horas es requerido.");
      return errors;
    },
    errorListaDias(){
        const errors = [];
        if (!this.$v.encuestaForm.dias_semana.$dirty) return errors;
      !this.$v.encuestaForm.dias_semana.required &&
        errors.push("El número de días es requerido.");
      return errors;
    },
    errorListaZona(){
        const errors = [];
        if (!this.$v.encuestaForm.zona.$dirty) return errors;
      !this.$v.encuestaForm.zona.required &&
        errors.push("La zona es requerida.");
      return errors;
    },
    errorIngresos(){
      const errors = [];
     if (!this.$v.encuestaForm.ingreso_dia.$dirty) return errors;
      !this.$v.encuestaForm.ingreso_dia.required &&
        errors.push("Su ingreso es requerido.");
      !this.$v.encuestaForm.ingreso_dia.numeric && errors.push("Solo acepta números enteros");
        !this.$v.encuestaForm.ingreso_dia.integer && errors.push("Ingrese valores enteros");
      !this.$v.encuestaForm.ingreso_dia.minValue && errors.push("Ingreso mínimo 30");
      return errors;
    },
    errorKm(){
      const errors = [];
     if (!this.$v.encuestaForm.km_dia.$dirty) return errors;
      !this.$v.encuestaForm.km_dia.required &&
        errors.push("El número de Km es requerido.");
      !this.$v.encuestaForm.km_dia.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.km_dia.integer && errors.push("Ingrese valores enteros");
      !this.$v.encuestaForm.km_dia.between && errors.push("Km mínimo 30 y máximo 1200");
      return errors;
    },
    errorCarreras(){
      const errors = [];
     if (!this.$v.encuestaForm.carreras_dia.$dirty) return errors;
      !this.$v.encuestaForm.carreras_dia.required &&
        errors.push("El número de carreras es requerido.");
      !this.$v.encuestaForm.carreras_dia.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.carreras_dia.minValue && errors.push("Ingreso mínimo 1");
        !this.$v.encuestaForm.carreras_dia.integer && errors.push("Ingrese valores enteros");

      return errors;
    },
    errorRemise(){
      const errors = [];
      if (!this.$v.encuestaForm.remise.$dirty) return errors;
      !this.$v.encuestaForm.remise.required &&
        errors.push("Este campo es requerido.");
      return errors;
    },
       errorTiempoRemise(){
      const errors = [];
      if (!this.$v.encuestaForm.tiempo_remise.$dirty) return errors;
      !this.$v.encuestaForm.tiempo_remise.required &&
        errors.push("Este campo es requerido.");
      return errors;
    },

    errorTipoCombustible(){
        const errors = [];
      if (!this.$v.encuestaForm.combustible.$dirty) return errors;
      !this.$v.encuestaForm.combustible.required &&
        errors.push("El tipo de combustible es requerido.");
      return errors;
    },
    errorGastoCombustible(){
         const errors = [];
     if (!this.$v.encuestaForm.gasto_combustible.$dirty) return errors;
      !this.$v.encuestaForm.gasto_combustible.required &&
        errors.push("Su gasto por día es requerido.");
      !this.$v.encuestaForm.gasto_combustible.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_combustible.minValue && errors.push("Gasto mínimo 3"); //soles o asi nomas
        !this.$v.encuestaForm.gasto_combustible.integer && errors.push("Ingrese valores enteros");

      return errors;
    },
    errorMantenimiento(){
         const errors = [];
     if (!this.$v.encuestaForm.gasto_mantenimiento.$dirty) return errors;
      !this.$v.encuestaForm.gasto_mantenimiento.required &&
        errors.push("Su gasto por mantenimiento es requerido.");
      !this.$v.encuestaForm.gasto_mantenimiento.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_mantenimiento.minValue && errors.push("Gasto minimo 100");
        !this.$v.encuestaForm.gasto_mantenimiento.integer && errors.push("Ingrese valores enteros");

      return errors;
    },
    errorRevisión(){
            const errors = [];
      if (!this.$v.encuestaForm.gasto_rtv.$dirty) return errors;
      !this.$v.encuestaForm.gasto_rtv.required &&
        errors.push("Su gasto por revisión técnica es requerido.");
      !this.$v.encuestaForm.gasto_rtv.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_rtv.minValue && errors.push("Gasto mínimo 60");
      !this.$v.encuestaForm.gasto_rtv.integer && errors.push("Ingrese valores enteros");
      return errors;

    },
    errorSoat(){
         const errors = [];
     if (!this.$v.encuestaForm.gasto_soat.$dirty) return errors;
      !this.$v.encuestaForm.gasto_soat.required &&
        errors.push("Su gasto por SOAT es requerido.");
      !this.$v.encuestaForm.gasto_soat.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_soat.minValue && errors.push("Gasto mínimo 50");
      !this.$v.encuestaForm.gasto_soat.integer && errors.push("Ingrese valores enteros");
      return errors;
    },
        errorGastoGLP(){
            const errors = [];
     if (!this.$v.encuestaForm.gasto_glp.$dirty) return errors;
      !this.$v.encuestaForm.gasto_glp.required &&
        errors.push("Su gasto por inspección es requerido.");
      !this.$v.encuestaForm.gasto_glp.numeric && errors.push("Solo acepta números enteros");
        !this.$v.encuestaForm.gasto_glp.integer && errors.push("Ingrese valores enteros");
      !this.$v.encuestaForm.gasto_glp.minValue && errors.push("Gasto mínimo 50");
      return errors;
    },
    errorGastoGNV(){
      const errors = [];
     if (!this.$v.encuestaForm.gasto_gnv.$dirty) return errors;
      !this.$v.encuestaForm.gasto_gnv.required &&
        errors.push("Su gasto por inspección es requerido.");
      !this.$v.encuestaForm.gasto_gnv.numeric && errors.push("Solo acepta números enteros");
        !this.$v.encuestaForm.gasto_gnv.integer && errors.push("Ingrese valores enteros");
      !this.$v.encuestaForm.gasto_gnv.minValue && errors.push("Gasto mínimo 50");
      return errors;
    },
 
    errorSeguro(){
         const errors = [];
     if (!this.$v.encuestaForm.gasto_seguro.$dirty) return errors;
      !this.$v.encuestaForm.gasto_seguro.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_seguro.minValue && errors.push("Gasto mínimo 500");
    !this.$v.encuestaForm.gasto_seguro.integer && errors.push("Ingrese valores enteros");

      return errors;
    },
    errorActividades(){
         const errors = [];
     if (!this.$v.encuestaForm.actividad.$dirty) return errors;
      !this.$v.encuestaForm.actividad.required &&
        errors.push("La actividad extra es requerida.");
        return errors;
    },
     errorFormalidad(){
            const errors = [];
      if (!this.$v.encuestaForm.formalidad.$dirty) return errors;
      !this.$v.encuestaForm.formalidad.required &&
        errors.push("La formalidad es requerida.");
      return errors;
    },
        errorIngresoAdicional(){
        const errors = [];
     if (!this.$v.encuestaForm.ingreso_adicional.$dirty) return errors;
      !this.$v.encuestaForm.ingreso_adicional.required &&
        errors.push("El ingreso adicional es requerido.");
      !this.$v.encuestaForm.ingreso_adicional.numeric && errors.push("Solo acepta números enteros");
        !this.$v.encuestaForm.ingreso_adicional.integer && errors.push("Ingrese valores enteros");
      !this.$v.encuestaForm.ingreso_adicional.minValue && errors.push("Ingreso mínimo 100");
      return errors;
    },
    errorGastoAlimentacion(){
                 const errors = [];
     if (!this.$v.encuestaForm.gasto_alimentacion.$dirty) return errors;
      !this.$v.encuestaForm.gasto_alimentacion.required &&
        errors.push("El gasto por alimentación es requerido.");
      !this.$v.encuestaForm.gasto_alimentacion.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_alimentacion.minValue && errors.push("Gasto mínimo 150");
        !this.$v.encuestaForm.gasto_alimentacion.integer && errors.push("Ingrese valores enteros");

      return errors;
    },
    errorGastoServicios(){
                 const errors = [];
     if (!this.$v.encuestaForm.gasto_servicios.$dirty) return errors;
      !this.$v.encuestaForm.gasto_servicios.required &&
        errors.push("El gasto por servicios es requerido.");
      !this.$v.encuestaForm.gasto_servicios.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_servicios.minValue && errors.push("Gasto mínimo 30");
      !this.$v.encuestaForm.gasto_servicios.integer && errors.push("Ingrese valores enteros");
      return errors;
    },
    errorGastoAlquiler(){
        const errors = [];
     if (!this.$v.encuestaForm.gasto_alquiler.$dirty) return errors;
      !this.$v.encuestaForm.gasto_alquiler.required &&
        errors.push("El gasto por alquiler es requerido.");
      !this.$v.encuestaForm.gasto_alquiler.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_alquiler.minValue && errors.push("Gasto mínimo 0");
      !this.$v.encuestaForm.gasto_alquiler.integer && errors.push("Ingrese valores enteros");
      return errors;
    },
    errorGastoEducacion(){
     const errors = [];
     if (!this.$v.encuestaForm.gasto_educacion.$dirty) return errors;
      !this.$v.encuestaForm.gasto_educacion.required &&
        errors.push("El gasto por educación es requerido.");
      !this.$v.encuestaForm.gasto_educacion.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_educacion.minValue && errors.push("Gasto mínimo 0");
      !this.$v.encuestaForm.gasto_educacion.integer && errors.push("Ingrese valores enteros");

      return errors;
    },
    errorGastoSalud(){
                 const errors = [];
     if (!this.$v.encuestaForm.gasto_salud.$dirty) return errors;
      !this.$v.encuestaForm.gasto_salud.required &&
        errors.push("El gasto por salud es requerido.");
      !this.$v.encuestaForm.gasto_salud.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_salud.minValue && errors.push("Gasto mínimo 0");
      !this.$v.encuestaForm.gasto_salud.integer && errors.push("Ingrese valores enteros");

      return errors;
    },
    errorGastoOtros(){
                 const errors = [];
     if (!this.$v.encuestaForm.gasto_otros.$dirty) return errors;
      !this.$v.encuestaForm.gasto_otros.numeric && errors.push("Solo acepta números enteros");
      !this.$v.encuestaForm.gasto_otros.minValue && errors.push("Ingreso mínimo 0");
      !this.$v.encuestaForm.gasto_otros.integer && errors.push("Ingrese valores enteros");
      return errors;
    },

    listaYears(){
      const data = []
      const year = new Date().getFullYear();
        for (let index = year; index > 1900; index--) {
          data.push(index)        
        }
      return data 
    },
    fechaLimite(){
      const year = new Date().getFullYear()-4;
      return year 
    },

    

    validarRemise(){
        return this.encuestaForm.remise!='no trabajo con aplicativo ni servicio remise'?true:false
    },
    validarGastoRtv(){
        return this.fechaFabricacion.year_fabricacion<this.fechaLimite?true:false
    },
    validarGastoGnv(){
        return this.encuestaForm.combustible=='gnv'?true:false
    },
    validarGastoGlp(){
        return this.encuestaForm.combustible=='glp'?true:false
    },
    validarFormalidad(){
        return this.encuestaForm.actividad!='no realizo otra actividad distinta a la de taxi'?true:false
    },
    validarSeguro(){
      return this.encuestaForm.gasto_seguro=='0'?true:this.encuestaForm.gasto_seguro=='00'?true:false
    }
      },
}
