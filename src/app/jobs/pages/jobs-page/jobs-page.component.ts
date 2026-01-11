import { Component } from '@angular/core';
import { Job } from '../../models/jobs.model';
import { JobsListComponent } from '../../components/jobs-list/jobs-list.component';
import { JobFormComponent } from '../../components/job-form/job-form.component';
import { JobsLocalService } from '../../services/jobs-local.service';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [JobsListComponent, JobFormComponent],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss',
})
export class JobsPageComponent {
  jobs: Job[] = [];
  jobBeingEdited?: Job;

  constructor(private jobsService: JobsLocalService) {
    this.jobs = this.jobsService.getJobs();
  }
  addJob(job: Job) {
    this.jobsService.addJob(job);
    // this.jobs = [...this.jobs, job];
    this.jobs = this.jobsService.getJobs();
  }

  saveJob(job: Job) {
    if (this.jobBeingEdited) {
      this.jobsService.updateJob(job);
    } else {
      this.jobsService.addJob(job);
    }

    this.jobBeingEdited = undefined;
    this.jobs = this.jobsService.getJobs();
  }

  editJob(job: Job) {
    this.jobBeingEdited = job;
  }
  // called when child emits delete event
  deleteJob(id: number) {
    this.jobsService.deleteJob(id);
    this.jobs = this.jobsService.getJobs();
  }
}
