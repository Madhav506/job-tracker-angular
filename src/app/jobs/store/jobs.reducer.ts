import { createReducer, on } from '@ngrx/store';
import { initialJobsState } from './jobs.state';
import * as JobsActions from './jobs.actions';

export const jobsReducer = createReducer(
  initialJobsState,
  on(JobsActions.loadJobs, (state) => ({
    ...state,
    loading: true,
  })),
  on(JobsActions.addJob, (state, { job }) => ({
    ...state,
    jobs: [...state.jobs, job],
  })),

  on(JobsActions.updateJob, (state, { job }) => ({
    ...state,
    jobs: state.jobs.map((j) => (j.id === job.id ? job : j)),
  })),

  on(JobsActions.deleteJob, (state, { id }) => ({
    ...state,
    jobs: state.jobs.filter((j) => j.id !== id),
  }))
);
