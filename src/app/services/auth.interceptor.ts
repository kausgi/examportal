import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private login: LoginService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authreq = req;
    const token = this.login.get_token();
    if(token != null){
      authreq = authreq.clone({
        setHeaders: {'Authorization': `Bearer ${token}`}
      });
    }
    return next.handle(authreq)
  }

}

export const authInterceptorproviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }

]
