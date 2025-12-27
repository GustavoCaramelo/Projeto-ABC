import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig = {
  // @ts-ignore
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
