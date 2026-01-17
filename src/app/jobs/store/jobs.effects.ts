import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import * as JobsActions from './jobs.actions';
import { Job } from '../models/jobs.model';

@Injectable()
export class JobsEffects {
  constructor(private actions$: Actions) {}
  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.loadJobs),
      delay(1000), // simulate API delay
      map(() => {
        const mockJobs: Job[] = [
          {
            id: 1,
            title: 'Frontend Dev',
            company: 'ABC',
            status: 'applied',
            location: 'Toronto',
            dateApplied: '2026-01-10',
          },
          {
            id: 2,
            title: 'Angular Dev',
            company: 'XYZ',
            status: 'interviewing',
            location: 'Remote',
            dateApplied: '2026-01-12',
          },
        ];

        return JobsActions.loadJobsSuccess({ jobs: mockJobs });
      }),
      catchError(() =>
        of(JobsActions.loadJobsFailure({ error: 'Failed to load jobs' }))
      )
    )
  );
}
