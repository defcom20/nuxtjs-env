
export const codPage = {
  EVALUATION: 1,
  ENCUESTA: 2,
  FINAL_EVALUATION: 3,
}

export const EncuestaStatuses = {
  NUEVO_USUARIO: 0,
  USUARIO_ENCUESTADO: '01',
  //PROSPECTO_DESACTIVADO: -3
}


export const actionsByProspectCodeEncuesta = {
  [codPage.EVALUATION]: [
    {
      prospectStatus: EncuestaStatuses.NUEVO_USUARIO, //0
      shouldGoNextPage: true,
      nextPage: codPage.ENCUESTA,
    },
    {
      prospectStatus:
        EncuestaStatuses.USUARIO_ENCUESTADO, //24
      shouldShowModal: true,
      img: 'success',
      titulo: 'Estimado Cliente',
      message: 'Ya realizo la encuesta',
      //reset: 'encuesta',
      reload: true,
      //push: '/'
    },
    /*{
      prospectStatus: EncuestaStatuses.PROSPECTO_DESACTIVADO,
      shouldShowModal: true,
      titulo: 'Estimado Cliente',
      message: 'No sé atenderán nuevas solicitudes hasta nuevo aviso. Gracias por su comprensión. Acceso',
    }*/
  ],
  [codPage.ENCUESTA]: [
    {
      prospectStatus: EncuestaStatuses.NUEVO_USUARIO, //0
      shouldGoNextPage: true,
      nextPage: codPage.FINAL_EVALUATION,
    },
    {
      prospectStatus: EncuestaStatuses.NUEVO_USUARIO, //24
      shouldShowModal: true,
      img: 'success',
      titulo: 'Estimado Cliente',
      message: 'Genail por su encuesta',
    },
  ]

}


export const pagesEncuesta = [
  {
    step: codPage.EVALUATION, //1
    name: 'evaluation',
    nameSpace: 'encuesta',
    catalogs: {
      listaTiposDocumentos: [
        { id: 'dni', tipdoc: 'DNI' },
        { id: 'ce', tipdoc: 'CE' },
        { id: 'pasaporte', tipdoc: 'PASAPORTE' },
        { id: 'ptp', tipdoc: 'PTP' },
      ],
      listaEstadoCivil: [
        { id: 'casado', tipdoc: 'Casado' },
        { id: 'conviviente', tipdoc: 'Conviviente' },
        { id: 'divorciado', tipdoc: 'Divorciado' },
        { id: 'soltero', tipdoc: 'Soltero' },
        { id: 'viudo', tipdoc: 'Viudo' },
      ],     
       listaDeHijos: [
        { id: '0', tipdoc: '0' },
        { id: '1', tipdoc: '1' },
        { id: '2', tipdoc: '2' },
        { id: '3', tipdoc: '3' },
        { id: '4', tipdoc: '4' },
        { id: '5', tipdoc: '5' },
        { id: 'mas de 5', tipdoc: 'más de 5' },
      ],
    }
  },
  {
    step: codPage.ENCUESTA, //2
    name: 'encuesta',
    nameSpace: 'encuesta',
    catalogs: {
      listaDeMeses: [
        { id: 'enero', tipdoc: 'Enero' },
        { id: 'febrero', tipdoc: 'Febrero' },
        { id: 'marzo', tipdoc: 'Marzo' },
        { id: 'abril', tipdoc: 'Abril' },
        { id: 'mayo', tipdoc: 'Mayo' },
        { id: 'junio', tipdoc: 'Junio' },
        { id: 'julio', tipdoc: 'Julio' },
        { id: 'agosto', tipdoc: 'Agosto' },
        { id: 'septiembre', tipdoc: 'Septiembre' },
        { id: 'octubre', tipdoc: 'Octubre' },
        { id: 'noviembre', tipdoc: 'Noviembre' },
        { id: 'diciembre', tipdoc: 'Diciembre' },

      ],
      
   

            listaZonas: [
        { id: 'lima centro', tipdoc: 'Lima Centro' },
        { id: 'lima norte', tipdoc: 'Lima Norte' },
        { id: 'lima sur', tipdoc: 'Lima Sur' },
        { id: 'lima este', tipdoc: 'Lima Este' },
        { id: 'callao', tipdoc: 'Callao' },
        { id: 'provincia', tipdoc: 'Provincia' },
      ],
            listaServicios: [
        { id: 'no trabajo con aplicativo ni servicio remise', tipdoc: 'No trabajo con aplicativo ni servicio remise' },
        { id: 'beat', tipdoc: 'Beat' },
        { id: 'easy taxi', tipdoc: 'Easy Taxi' },
        { id: 'cabify', tipdoc: 'Cabify' },
        { id: 'uber', tipdoc: 'Uber' },
        { id: 'didi', tipdoc: 'DiDi' },
        { id: 'taxi satelital', tipdoc: 'Taxi Satelital' },
        { id: 'taxi green', tipdoc: 'Taxi Green' },
        { id: 'taxi seguro', tipdoc: 'Taxi Seguro' },
        { id: 'taxi directo', tipdoc: 'Taxi Directo' },
        { id: 'iza taxi', tipdoc: 'Iza Taxi' },
        { id: 'indriver', tipdoc: 'InDriver' },
        { id: 'taxi aeropuerto', tipdoc: 'Taxi Aeropuerto' },
        { id: 'otros', tipdoc: 'Otros' },
      ],
      listaTipoTiempo: [
        { id: 'tiempo completo', tipdoc: 'Tiempo completo' },
        { id: 'tiempo parcial', tipdoc: 'Tiempo parcial' },
      ],
      listaCombustible: [
        { id: 'gnv', tipdoc: 'GNV' },
        { id: 'glp', tipdoc: 'GLP' },
        { id: 'gasolina', tipdoc: 'Gasolina' },
        { id: 'diesel', tipdoc: 'Diesel' },
      ],

      listaActividades:[
        { id: 'no realizo otra actividad distinta a la de taxi', tipdoc: 'No realizo otra actividad distinta a la de Taxi' },
        { id: 'agricultura, caza, silvicultura y pesca', tipdoc: 'Agricultura, Caza, Silvicultura y Pesca' },
        { id: 'mineria y canteras', tipdoc: 'Minería y canteras' },
        { id: 'fabricacion', tipdoc: 'Fabricación' },
        { id: 'electricidad, gas y agua', tipdoc: 'Electricidad, gas y agua' },
        { id: 'construccion', tipdoc: 'Construcción' },
        { id: 'comercio al por mayor y al por menor', tipdoc: 'Comercio al por mayor y al por menor' },
        { id: 'reparacion de vehiculos, articulos personales y uso domestico', tipdoc: 'Reparación de vehículos, artículos personales y uso doméstico' },
        { id: 'restaurantes y hoteles', tipdoc: 'Restaurantes y hoteles' },
        { id: 'transporte, almacenamiento y comunicacion', tipdoc: 'Transporte, almacenamiento y comunicación' },
        { id: 'servicios financieros, de seguros y pensiones', tipdoc: 'Servicios financieros, de seguros y pensiones' },
        { id: 'actividades inmobiliarias, alquiler y de negocios', tipdoc: 'Actividades inmobiliarias, alquiler y de negocios' },
        { id: 'administración publica y defensa, educacion, salud y trabajo social', tipdoc: 'Administración pública y defensa, educación, salud y trabajo social' },
        { id: 'otros', tipdoc: 'Otros' },
      ],
      listaFormalidad:[
        { id: 'dependiente formal', tipdoc: 'Dependiente Formal' },
        { id: 'independiente formal', tipdoc: 'Independiente Formal' },
        { id: 'independiente informal', tipdoc: 'Independiente Informal' },
      ],
      listaDeHoras:[
        { id: '1', tipdoc: '1' },
        { id: '2', tipdoc: '2' },
        { id: '3', tipdoc: '3' },
        { id: '4', tipdoc: '4' },
        { id: '5', tipdoc: '5' },
        { id: '6', tipdoc: '6' },
        { id: '7', tipdoc: '7' },
        { id: '8', tipdoc: '8' },
        { id: '9', tipdoc: '9' },
        { id: '10', tipdoc: '10' },
        { id: '11', tipdoc: '11' },
        { id: '12', tipdoc: '12' },
        { id: '13', tipdoc: '13' },
        { id: '14', tipdoc: '14' },
        { id: '15', tipdoc: '15' },
        { id: '16', tipdoc: '16' },

        
      ],
        listaDeDias:[
        { id: '1', tipdoc: '1' },
        { id: '2', tipdoc: '2' },
        { id: '3', tipdoc: '3' },
        { id: '4', tipdoc: '4' },
        { id: '5', tipdoc: '5' },
        { id: '6', tipdoc: '6' },
        { id: '7', tipdoc: '7' },
        ]
    
  }
  },
  {
    step: codPage.FINAL_EVALUATION, //3
    name: 'evaluationCompleted',
    nameSpace: 'encuesta',
    catalogs: []
  },
]
