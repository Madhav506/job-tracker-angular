import { Routes } from '@angular/router';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { provideState } from '@ngrx/store';
import { jobsReducer } from './store/jobs.reducer';

export const JOBS_ROUTES: Routes = [
  {
    path: '',
    component: JobsPageComponent,
    providers: [provideState('jobs', jobsReducer)],
  },
];
