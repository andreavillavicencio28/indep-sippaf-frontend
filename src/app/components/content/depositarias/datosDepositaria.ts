// export const datos = [
//     {
//         nombramiento: 'INDEP/DG/DCB/DEBI/125/2022',
//         solicitante: 'LIC. JUAN SÁNCHEZ CONTRERAS',
//         bienSolicitado: 'Vehículo',
//         tipoBien: 'Mueble',
//         informeTotal: 12,
//         informePendiente: 2,
//         informeRechazado: 2,
//         informeValidado: 3,
//         contraprestacion: '8/10',
//         polizaSeguros: 0,
//         predial: 'NA',
//         tenencia: '1/1',
//         espacio_aereo: 'NA',
//         agua: 'NA',
//         luz: 'NA',
//         mantenimiento: '1/1',
//         otros: 0,
//     },
//     {
//         nombramiento: 'DG/DEBI/BUS-INDEP/082/2022',
//         solicitante: 'DIRECCIÓN EJECUTIVA DE RECURSOS MATERIALES DEL INDEP',
//         bienSolicitado: 'Casa',
//         tipoBien: 'Inmueble',
//         informeTotal: 12,
//         informePendiente: 5,
//         informeRechazado: 4,
//         informeValidado: 3,        contraprestacion: '8/10',
//         polizaSeguros: 0,
//         predial: '1/1',
//         tenencia: 'NA',
//         espacio_aereo: 'NA',
//         agua: '6/12',
//         luz: '5/6',
//         mantenimiento: 'NA',
//         otros: 0,
//     }
// ]

export const datos = [
    {
        nombramiento: 'INDEP/DG/DCB/DEBI/125/2022',
        solicitante: 'LIC. JUAN SÁNCHEZ CONTRERAS',
        bienSolicitado: 'Vehículo',
        tipoBien: 'Mueble',
        informeMensualNoEnviado: 2,
        adeudoContraprestacion: 0,
        polizaSeguros: 'Vencida',
        adeudoPredial: 3,
        adeudoTenencia: 0,
        adeudoEspacioAereo: 0,
        adeudoAgua: 0,
        adeudoLuz: 0,
        adeudoMantenimiento: 0,
        otrosDocumentos: 1,
    },
    {
        nombramiento: 'DG/DEBI/BUS-INDEP/082/2022',
        solicitante: 'DIRECCIÓN EJECUTIVA DE RECURSOS MATERIALES DEL INDEP',
        bienSolicitado: 'Casa',
        tipoBien: 'Inmueble',
        informeMensualNoEnviado: 0,
        adeudoContraprestacion: 3,
        polizaSeguros: 'Vencida',
        adeudoPredial: 0,
        adeudoTenencia: 1,
        adeudoEspacioAereo: 0,
        adeudoAgua: 0,
        adeudoLuz: 0,
        adeudoMantenimiento: 0,
        otrosDocumentos: 1,
    }
]


export const informeMensualData = [
    {
        id: 1,
        mes: 'Enero',
        estatus: 'Validado',
        fh_envio: '3/01/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 2,
        mes: 'Febrero',
        estatus: 'Validado',
        fh_envio: '2/02/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 3,
        mes: 'Marzo',
        estatus: 'Validado',
        fh_envio: '3/03/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 4,
        mes: 'Abril',
        estatus: 'Validado',
        fh_envio: '3/04/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 5,
        mes: 'Mayo',
        estatus: 'Validado',
        fh_envio: '3/05/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 6,
        mes: 'Junio',
        estatus: 'Validado',
        fh_envio: '3/06/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 7,
        mes: 'Julio',
        estatus: 'Validado',
        fh_envio: '3/07/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 8,
        mes: 'Agosto',
        estatus: 'Validado',
        fh_envio: '3/08/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 9,
        mes: 'Septiembre',
        estatus: 'Validado',
        fh_envio: '3/09/2023',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 10,
        mes: 'Octubre',
        estatus: 'Pendiente',
        fh_envio: '3/10/2023',
        tipoInforme: 'Siniestro'
    },
];

export const informeMensualHistorico = [
    {
        id: 1,
        mes: 'Enero',
        estatus: 'Validado',
        fh_envio: '3/01/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 2,
        mes: 'Febrero',
        estatus: 'Validado',
        fh_envio: '2/02/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 3,
        mes: 'Marzo',
        estatus: 'Validado',
        fh_envio: '3/03/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 4,
        mes: 'Abril',
        estatus: 'Validado',
        fh_envio: '3/04/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 5,
        mes: 'Mayo',
        estatus: 'Validado',
        fh_envio: '3/05/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 6,
        mes: 'Junio',
        estatus: 'Validado',
        fh_envio: '3/06/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 7,
        mes: 'Julio',
        estatus: 'Validado',
        fh_envio: '3/07/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 8,
        mes: 'Agosto',
        estatus: 'Validado',
        fh_envio: '3/08/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 9,
        mes: 'Septiembre',
        estatus: 'Validado',
        fh_envio: '3/09/2022',
        tipoInforme: 'Informe Mensual'
    },
    {
        id: 10,
        mes: 'Octubre',
        estatus: 'Validado',
        fh_envio: '3/10/2022',
        tipoInforme: 'Siniestro'
    },
    {
        id: 11,
        mes: 'Noviembre',
        estatus: 'Validado',
        fh_envio: '3/11/2022',
        tipoInforme: 'Siniestro'
    },
    {
        id: 12,
        mes: 'Diciembre',
        estatus: 'Validado',
        fh_envio: '3/12/2022',
        tipoInforme: 'Siniestro'
    },
];

export const pagoAgua = [
  {
      id: 1,
      mes: 'Enero',
      estatus: 'Pagado',
      fh_envio: '3/01/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 2,
      mes: 'Febrero',
      estatus: 'Pagado',
      fh_envio: '2/02/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 3,
      mes: 'Marzo',
      estatus: 'Pagado',
      fh_envio: '3/03/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 4,
      mes: 'Abril',
      estatus: 'Pagado',
      fh_envio: '3/04/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 5,
      mes: 'Mayo',
      estatus: 'Pagado',
      fh_envio: '3/05/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 6,
      mes: 'Junio',
      estatus: 'Pagado',
      fh_envio: '3/06/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 7,
      mes: 'Julio',
      estatus: 'Pagado',
      fh_envio: '3/07/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 8,
      mes: 'Agosto',
      estatus: 'Pagado',
      fh_envio: '3/08/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 9,
      mes: 'Septiembre',
      estatus: 'Pagado',
      fh_envio: '3/09/2023',
      tipoInforme: 'Pago Mensual'
  },
  {
      id: 10,
      mes: 'Octubre',
      estatus: 'Pendiente',
      fh_envio: '3/10/2023',
      tipoInforme: 'Pendiente Pago'
  },
];

