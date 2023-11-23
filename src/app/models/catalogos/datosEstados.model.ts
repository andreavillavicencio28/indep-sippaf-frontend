

export interface respuestaEstados {
   code: string,
   data: data,
   message: string
}

export interface data {
   hasNextPage: boolean,
   hasPreviousPage: boolean,
   innerExceptionMessage: string,
   itemsCount: number,
   message: string,
   page: string,
   pageCount: number,
   result: catalogoEstado[],
   success: boolean
}

export interface catalogoEstado {
   fnclaveentidad:number,
   fsdescripcion:string
}

