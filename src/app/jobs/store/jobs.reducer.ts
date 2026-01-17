import { createReducer, on } from '@ngrx/store';
import * as JobsActions from './jobs.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Job } from '../models/jobs.model';

export const jobsAdapter: EntityAdapter<Job> = createEntityAdapter<Job>({
  selectId: (job) => job.id,
  sortComparer: false,
});

export interface JobsState extends EntityState<Job> {
  loading: boolean;
}

export const initialJobsState: JobsState = jobsAdapter.getInitialState({
  loading: false,
});

export const jobsReducer = createReducer(
  initialJobsState,
  on(JobsActions.loadJobs, (state) => ({
    ...state,
    loading: true,
  })),
  on(JobsActions.addJob, (state, { job }) => jobsAdapter.addOne(job, state)),

  on(JobsActions.updateJob, (state, { job }) =>
    jobsAdapter.updateOne({ id: job.id, changes: job }, state)
  ),

  on(JobsActions.deleteJob, (state, { id }) =>
    jobsAdapter.removeOne(id, state)
  ),

  on(JobsActions.loadJobsSuccess, (state, { jobs }) =>
    jobsAdapter.setAll(jobs, {
      ...state,
      loading: false,
    })
  )
);
