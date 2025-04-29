import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('reqres-free-v1');

  // Clone the request and add the authorization header
  const clonedRequest = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          // 'x-api-key': 'reqres-free-v1',
        },
      })
    : req;

  return next(clonedRequest);
};
