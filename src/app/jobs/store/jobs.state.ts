import { Job } from '../models/jobs.model';

export interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

export const initialJobsState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};
