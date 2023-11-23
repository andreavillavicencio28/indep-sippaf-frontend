export const data = [
    {
        solicitud: '2023/1',
        solicitante: 'FISCALÍA GENERAL DE LA REPÚBLICA (FGR)',
        tipoBien: 'Vehículo',
        isSelected: false,
    },
    {
        solicitud: '2023/2',
        solicitante: 'SECRETARÍA DE MARINA (SEMAR)',
        tipoBien: 'Blindado',
        isSelected: false,
    },
    {
        solicitud: '2023/3',
        solicitante: 'SECRETARÍA DE LA DEFENSA NACIONAL (SEDENA)',
        tipoBien: 'Inmueble',
        isSelected: false,
    },
    {
        solicitud: '2023/4',
        solicitante: 'MUNICIPIO DE AMAXAC DE GUERRERO, TLAXCALA',
        tipoBien: 'Vehículo',
        isSelected: false,
    },
    {
        solicitud: '2023/5',
        solicitante: 'DIRECCIÓN EJECUTIVA DE RECURSOS MATERIALES DEL INDEP',
        tipoBien: 'Blindado',
        isSelected: false,
    }
];

export const etapas = [
    { id: 1, descripcion: 'Pre-validación' },
    { id: 2, descripcion: 'Propuesta bien' },
    { id: 3, descripcion: 'Validación' },
    { id: 4, descripcion: 'Opinión técnica' },
    { id: 5, descripcion: 'Aut. DEBI' },
    { id: 6, descripcion: 'Aut. DCB' },
    { id: 7, descripcion: 'Aut. DG' },
    { id: 8, descripcion: 'Nombramiento' },
    { id: 9, descripcion: 'Seguros' },
    { id: 10, descripcion: 'Entrega' },

];

export const dataInformesArray = [
    {
        id: 1,
        value: 'Informe mensual'
    },
    {
        id: 2,
        value: 'Contraprestación'
    },
    {
        id: 3,
        value: 'Pólizas de seguros'
    },
    {
        id: 4,
        value: 'Predial/Tenencia/Espacio áereo'
    },
    {
        id: 5,
        value: 'Agua'
    },
    {
        id: 6,
        value: 'Luz'
    },
    {
        id: 7,
        value: 'Otros'
    }
];

export const meses = [
    {
        id: 1,
        name: 'Enero',
        isSelected: false,
    },
    {
        id: 2,
        name: 'Febrero',
        isSelected: false,
    },
    {
        id: 3,
        name: 'Marzo',
        isSelected: false,
    },
    {
        id: 4,
        name: 'Abril',
        isSelected: false,
    },
    {
        id: 5,
        name: 'Mayo',
        isSelected: false,
    },
    {
        id: 6,
        name: 'Junio',
        isSelected: false,
    },
    {
        id: 7,
        name: 'Julio',
        isSelected: false,
    },
    {
        id: 8,
        name: 'Agosto',
        isSelected: false,
    },
    {
        id: 9,
        name: 'Septiembre',
        isSelected: false,
    },
    {
        id: 10,
        name: 'Octubre',
        isSelected: false,
    },
    {
        id: 11,
        name: 'Noviembre',
        isSelected: false,
    },
];


export const tipoBien = ['Mueble', 'Inmueble'];

export const subTipoInmueble = ['Inmueble'];
export const subTipoMueble = ['Aeronave', 'Blindado', 'Blindado Nuevos Lin', 'Embarcación', 'Semovientes', 'Vehículos'];

export const subSubtipoInmueble = ['Aeródromo', 'Bodega', 'Casa', 'Departamento', 'Inmueble', 'Local', 'Lote / Terreno', 'Nave Industrial', 'Terreno'];

export const subSubtipoMueble = ['Vehículo', 'Blindado'];

export const tipoSolicitante = ['Persona Física', 'Persona Moral', 'APF', 'Municipio' ];

export const tipoDepositaria = ['Productiva', 'Comodato', 'Gratuita'];

export const estatusSolicitud = ['En registro', 'En validación', 'Solicitud de Cambios', 'Selección del Bien', 'Selección del Tipo de Firma', 'Envío de póliza de seguro'];

export const etapa = ['Registro', 'Opinión Técnica', 'Nombramientos', 'Entrega del bien', 'Opinión Jurídica', 'Remoción'];

export const tipoDocumentoAutorizacion = ['Documento RFC', 'Documento CURP', 'Comprobante Domicilio', 'Última Declaración Anual', 'Instrumento Jurídico', 'Currículum Vitae', 'Acta Constitutiva', 'Poderes del Representante', 'Acreditación Legal'];

export const tipoDocumentoSeguimiento = ['Contraprestaciones', 'Informes Mensuales', 'Facturas de Pagos CFD', 'Agua', 'Luz','Gas', 'Póliza de Seguros'];