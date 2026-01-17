import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { jobsReducer } from './jobs/store/jobs.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { JobsEffects } from './jobs/store/jobs.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ jobs: jobsReducer }),
    provideEffects([JobsEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
};
