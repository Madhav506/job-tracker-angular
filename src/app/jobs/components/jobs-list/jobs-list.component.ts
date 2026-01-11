import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/jobs.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent {
  @Input() jobs: Job[] = [];

  @Output() edit = new EventEmitter<Job>();
  // send job id to parent when delete is clicked
  @Output() delete = new EventEmitter<number>();
}
