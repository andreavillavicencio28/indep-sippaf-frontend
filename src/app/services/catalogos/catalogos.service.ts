import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catalogoEstado, respuestaEstados } from 'src/app/models/datosCatalogo.model';
import { backURLPaths, environment } from 'src/environments/environment';

const API_BACK_URL = `${environment.API_BACK_URL}`;

const API_URL_ESTADOS = `${API_BACK_URL}${backURLPaths.API_CAT_ENTIDADES}`;

@Injectable({
    providedIn: 'root',
})
export class CatalogosService {
    getDataList() {
        throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient) { }
    
    getEstados(page :number, take : number , order:string) {
        return this.http.get<respuestaEstados>(`${API_URL_ESTADOS}?page=${page}&take=${take}&order=${order}`);
    }

    // getEstadosByPage(page: number, limit: number) {
    //     return this.http.get(`${API_BACK_URL}${page}/${limit}`);
    // }

    // getEstadosByFilters(page: number, limit: number, datos: catalogoEstado) {
    //     return this.http.get(`${API_URL_ESTADOS}/${page}`);
    // }

    addEstado(estado: catalogoEstado): Observable<any> {
        console.log(estado);
        return this.http.post(`${API_URL_ESTADOS}`, estado);
    }

    updateEstado(id:number, estado: catalogoEstado) {
        console.log(estado);
        return this.http.patch<respuestaEstados>(`${API_URL_ESTADOS}/${id}`, estado);
    }

    deleteEstado(estadoId: number) {
        //Eliminar estado con fnclaveentidad
        return this.http.delete<respuestaEstados>(`${API_URL_ESTADOS}/${estadoId}`);
    }

    // handleError(error: any) {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //         errorMessage = `Error: ${error.error.message}`;
    //     } else {
    //         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     return throwError(errorMessage);
    // }

}