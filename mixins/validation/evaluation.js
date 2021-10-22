import { required, numeric, minLength, maxLength, email } from "vuelidate/lib/validators";
export default {
  validations() {
    return {
      formPreEvaluation: {
        tipo_documento: { required },
        telefono:{ required, 
          minLength:minLength (9) },
        correo: { required , email},
        documento: {
          required,
          numeric,
          minLength: minLength(this.validarTipoDocumento.min),
          maxLength: maxLength(this.validarTipoDocumento.max)
        },
        estado_civil: {
          required,
        },
        numero_hijos: {
          required,
        },
        placa: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(7)
        },
        year_fabricacion: { required },
        marca: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(20)
        },
        accept_terms: {
          required(val) {
            return val;
          },
        },
      }
    }
  },
  computed: {
    errorPlaca() {
      const errors = [];
      if (!this.$v.formPreEvaluation.placa.$dirty) return errors;
      !this.$v.formPreEvaluation.placa.required &&
        errors.push("El placa es requerido.");
      !this.$v.formPreEvaluation.placa.minLength &&
        errors.push("Ingrese su placa correctamente.");
      return errors;
    },
    errorYearFabricacion() {
      const errors = [];
      if (!this.$v.formPreEvaluation.year_fabricacion.$dirty) return errors;
      !this.$v.formPreEvaluation.year_fabricacion.required &&
        errors.push("El año es requerido.");
      return errors;
    },
    errorMarca() {
      const errors = [];
      if (!this.$v.formPreEvaluation.marca.$dirty) return errors;
      !this.$v.formPreEvaluation.marca.required &&
        errors.push("La marca es requerida.");
      !this.$v.formPreEvaluation.marca.minLength &&
        errors.push("Ingrese su marca correctamente ");
      !this.$v.formPreEvaluation.marca.maxLength &&
        errors.push("Ingrese su marca correctamente  ");
      return errors;
    },
    errorNumeroHijos() {
      const errors = [];
      if (!this.$v.formPreEvaluation.numero_hijos.$dirty) return errors;
      !this.$v.formPreEvaluation.numero_hijos.required &&
        errors.push("El número de hijos es requerido.");
      return errors;
    },
    errorEstadoCivil() {
      const errors = [];
      if (!this.$v.formPreEvaluation.estado_civil.$dirty) return errors;
      !this.$v.formPreEvaluation.estado_civil.required &&
        errors.push("El estado civil es requerido.");
      return errors;
    },
    errorTipoDocumento() {
      const errors = [];
      if (!this.$v.formPreEvaluation.tipo_documento.$dirty) return errors;
      !this.$v.formPreEvaluation.tipo_documento.required &&
        errors.push("El tipo documento es requerido.");
      return errors;
    },
    errorDocumento() {
      const errors = [];
      if (!this.$v.formPreEvaluation.documento.$dirty) return errors;
      !this.$v.formPreEvaluation.documento.required &&
        errors.push("El documento es requerido.");
      !this.$v.formPreEvaluation.documento.numeric && errors.push("Solo acepta números");
      !this.$v.formPreEvaluation.documento.minLength &&
        errors.push("Mínimo " + this.validarTipoDocumento.min + " números.");
      !this.$v.formPreEvaluation.documento.maxLength &&
        errors.push("Maximo " + this.validarTipoDocumento.max + " números.");
      return errors;
    },
    errorTelefono() {
      const errors = [];
      if (!this.$v.formPreEvaluation.telefono.$dirty) return errors;
      !this.$v.formPreEvaluation.telefono.required &&
        errors.push("El telefono es requerido.");
      !this.$v.formPreEvaluation.telefono.minLength &&
        errors.push("Mínimo 9 dígitos.");
      return errors;
    },
    errorCorreo() {
      const errors = [];
      if (!this.$v.formPreEvaluation.correo.$dirty) return errors;
      !this.$v.formPreEvaluation.correo.required &&
        errors.push("El correo es requerido.");
      !this.$v.formPreEvaluation.correo.email &&
        errors.push("Ingrese un correo válido.");
      return errors;
    },
    errorTerminos() {
      const errors = [];
      if (!this.$v.formPreEvaluation.accept_terms.$dirty) return errors;
      !this.$v.formPreEvaluation.accept_terms.required &&
        errors.push("Los terminos son requeridos.");
      return errors;
    },
    validarTipoDocumento() {
      const tipoDocumento = this.formPreEvaluation.tipo_documento
      const defaul = { min: 6, max: 12, }
      const carnet = {
        'dni': { min: 8, max: 8, },
        'ce': { min: 9, max: 9, },
        'pasaporte': { min: 6, max: 12, },
        'ptp': { min: 9, max: 9 },
      }
      const res = carnet[tipoDocumento] || defaul
      return res
    },

    listYear() {
      const data = []
      const year = new Date().getFullYear();
      for (let index = year; index > 1900; index--) {
        data.push(index)
      }
      return data
    }
  },
}
