import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('full-token');
    console.log("interceptor");
    const headers = new HttpHeaders({
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Headers": "Access-Control-Allow-Origin, Content-Type, Accept, Access-Control-Request-Methods",
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
      // "authorization": "bearer"
    });

  const repClone = req.clone({
     headers
  })

  return next.handle(repClone);
  }
}
