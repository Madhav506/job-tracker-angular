import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/jobs.model';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
})
export class JobFormComponent {
  @Input() jobToEdit?: Job;
  @Output() jobSaved = new EventEmitter<Job>();
  today = new Date().toISOString().split('T')[0];

  jobForm = this.fb.nonNullable.group({
    title: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z\s]+$/),
      ],
    ],
    company: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z\s]+$/),
      ],
    ],
    location: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-Z\s]+$/),
      ],
    ],
    dateApplied: [
      '',
      [Validators.required, this.noFutureDateValidator()], // custom validator
    ],
    status: ['applied', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    if (this.jobToEdit) {
      this.jobForm.patchValue({
        ...this.jobToEdit,
        status: this.jobToEdit.status,
      });
    }
  }
  submit() {
    if (this.jobForm.invalid) return;

    const newJob: Job = {
      id: this.jobToEdit?.id ?? Date.now(),
      ...this.jobForm.getRawValue(),
      status: this.jobForm.getRawValue().status as Job['status'],
    };

    this.jobSaved.emit(newJob);
    this.jobForm.reset({ status: 'applied' });
    this.jobToEdit = undefined;
  }

  noFutureDateValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) return null;

      const selectedDate = new Date(control.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return selectedDate > today ? { futureDate: true } : null;
    };
  }
}
