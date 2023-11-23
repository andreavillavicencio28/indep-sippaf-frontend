export interface DatosSesion {
    idUsuario: number|null,
    nombreUsuario:string|null,
    nombre:string|null,
    rol: string|null,
    menu: menu[],
    token: string|null,
}

export interface menu {
    nombre: string,
    direccion:string,
    permisos: permisos[],
    subMenu?: subMenu[];
}

export interface subMenu {
    nombre: string,
    direccion:string,
    permisos: permisos[]
}

export interface permisos {
    consulta: boolean,
    alta: boolean,
    baja: boolean,
    cambios: boolean,
    reportes: boolean
}


