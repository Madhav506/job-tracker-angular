import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobsState } from './jobs.state';

export const selectJobsState = createFeatureSelector<JobsState>('jobs');

export const selectAllJobs = createSelector(
  selectJobsState,
  (state) => state.jobs
);
