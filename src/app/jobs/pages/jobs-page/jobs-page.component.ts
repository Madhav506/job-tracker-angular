import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Job } from '../../models/jobs.model';
import { JobsListComponent } from '../../components/jobs-list/jobs-list.component';
import { JobFormComponent } from '../../components/job-form/job-form.component';
import * as JobsSelectors from '../../store/jobs.selectors';
import * as JobsActions from '../../store/jobs.actions';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [JobsListComponent, JobFormComponent, AsyncPipe],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss',
})
export class JobsPageComponent {
  // jobs: Job[] = [];
  jobs$ = this.store.select(JobsSelectors.selectAllJobs);
  jobBeingEdited?: Job;

  constructor(private store: Store) {}

  saveJob(job: Job) {
    if (this.jobBeingEdited) {
      this.store.dispatch(JobsActions.updateJob({ job }));
    } else {
      this.store.dispatch(JobsActions.addJob({ job }));
    }

    this.jobBeingEdited = undefined;
  }

  editJob(job: Job) {
    this.jobBeingEdited = job;
  }
  // called when child emits delete event
  deleteJob(id: number) {
    this.store.dispatch(JobsActions.deleteJob({ id }));
  }
}
