export const CONSTANTES = {
    EXP_CORREO: "^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]{3,5}$", 
    EXP_TEXTO_GENERAL: "^[^<>$]*$",  // se  priven  utilizar  <,>,$'
    EXP_TELEFONO: "^\d{8,13}$",  
    EXP_NUMEROS: "^[0-9]+$",
    EXP_CURP: "^[A-Z]{4}\d{6}[H,M][A-Z]{5}[0-9,A-Z]\d$",
    EXP_RFC: "^[A-Z]{4}\d{6}[A-Z0-9]{3}$",
    EXP_CONTRA: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$",
    EXP_USUARIO: "^[A-Za-z0-9@._-*:;]+$",  // texto numero  y algunos simbolos
  };

export const INTERNAL_CODES = {
  // Basic error codes
  SUCCESSFUL: '200',
  NO_CODE: '5000',
  // Validations error codes
  VALIDATION_ERROR_CODE: '1000',
  TOKEN_VALIDATION_ERROR_CODE: 'JWT00',
  // Internal error codes
  UNKNOWN_ERROR_CODE: '9000',
  ERROR_CODE: '9001',
};
