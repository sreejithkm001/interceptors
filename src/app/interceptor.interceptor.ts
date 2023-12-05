import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  showProgressBar: boolean = false;
  progress: number = 0;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showProgressBar = true;

    const started = Date.now();

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
        }
      }),
      tap(() => {
        this.progress += 20; 
        if (this.progress >= 100) {
          this.progress = 0;
          this.showProgressBar = false;
        }
      })
    );
  }
}
