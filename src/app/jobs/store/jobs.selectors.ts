import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobsState, jobsAdapter } from './jobs.reducer';

/* ------------------ Feature Selector ------------------ */
export const selectJobsState = createFeatureSelector<JobsState>('jobs');

/* ------------------ Entity Selectors ------------------ */
export const {
  selectAll: selectAllJobs,
  selectEntities: selectJobEntities,
  selectIds: selectJobIds,
  selectTotal: selectJobsTotal,
} = jobsAdapter.getSelectors(selectJobsState);

/* ------------------ Extra Selectors ------------------ */
export const selectJobsLoading = createSelector(
  selectJobsState,
  (state) => state.loading
);

/* ------------------ Derived Selector Example ------------------ */
export const selectAppliedJobs = createSelector(selectAllJobs, (jobs) =>
  jobs.filter((job) => job.status === 'applied')
);
