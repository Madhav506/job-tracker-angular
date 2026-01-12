import { Job } from '../models/jobs.model';

export interface JobsState {
  jobs: Job[];
}

export const initialJobsState: JobsState = {
  jobs: [],
};
