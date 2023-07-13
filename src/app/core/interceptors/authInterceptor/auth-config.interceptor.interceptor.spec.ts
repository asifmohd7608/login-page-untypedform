import { TestBed } from '@angular/core/testing';

import { AuthConfigInterceptor } from './auth-config.interceptor.interceptor';

describe('AuthConfigInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthConfigInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthConfigInterceptor = TestBed.inject(AuthConfigInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
