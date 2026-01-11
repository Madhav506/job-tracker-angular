import { Injectable } from '@angular/core';
import { Job } from '../models/jobs.model';

@Injectable({
  providedIn: 'root',
})
export class JobsLocalService {
  private jobs: Job[] = [];

  getJobs(): Job[] {
    return this.jobs;
  }

  addJob(job: Job): void {
    this.jobs = [...this.jobs, job];
  }
  //update job
  updateJob(updatedJob: Job): void {
    this.jobs = this.jobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );
  }
  // remove job by id
  deleteJob(id: number): void {
    this.jobs = this.jobs.filter((job) => job.id !== id);
  }
}
