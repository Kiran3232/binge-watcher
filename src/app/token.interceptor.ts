import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http"
import { Observable } from "rxjs"

export class TokenInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const cloneReq = req.clone({
            params: req.params.append(
                "api_key",
                "f3af3f451e1f2b29d36e87619b0650ce"
            ),
        })
        return next.handle(cloneReq)
    }
}