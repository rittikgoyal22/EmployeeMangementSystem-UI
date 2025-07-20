// jwt.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const JwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwtToken');

  // Don't add token for login or register requests
    if (
      req.url.endsWith('/login') ||
      req.url.endsWith('/register')
    ) {
      return next(req);
    }

    //  localStorage.removeItem('jwtToken');

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
    return next(cloned);
  }

  return next(req);
};
