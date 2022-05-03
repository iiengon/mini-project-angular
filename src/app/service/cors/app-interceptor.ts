import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AppInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const setHeaders: any = {
      'X-Transaction-Id': 'As9bheeA9nV',
      'X-Custom-Header': 'x-header-value',
    };
    //เปลี่ยนแปลงค่า โดยการ set header เข้าไปใหม่
    const requset = req.clone({ setHeaders });
    return next.handle(requset).pipe(map((event:HttpEvent<any>)=>{
      if (event instanceof HttpResponse) {
        console.log(`Response ${requset.method} and url ${event.url} => client`,event)
      }
      return event
    }),catchError((error:HttpErrorResponse)=>{
      console.error(`Response ${requset.method} and url ${requset.url}`, error);
      return throwError(error);
    })
    )}
  }
