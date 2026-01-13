import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { jobsReducer } from './jobs/store/jobs.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ jobs: jobsReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
};
