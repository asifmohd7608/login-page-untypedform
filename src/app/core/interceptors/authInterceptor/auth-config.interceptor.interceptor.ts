import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../../services/userAuth/user-auth.service'; 


@Injectable()
export class AuthConfigInterceptor implements HttpInterceptor {

  constructor(private authService : UserAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('success')
    let token=this.authService.getToken()
    console.log(token)
    request=request.clone({setHeaders: {
                Authorization: "Bearer " + token
            }})
    return next.handle(request);
  }
}
