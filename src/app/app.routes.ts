import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.routes').then((m) => m.JOBS_ROUTES),
  },
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full',
  },
];
