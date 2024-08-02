import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';
import { CourseIcon } from '../course-icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
        <img class="listing-photo" [src]="courseIcon?.photo"/>
        <section class="listing-description">
          <h2 class="listing-heading">{{ courseIcon?.name }}</h2>
          <p class="listing-location">{{ courseIcon?.city }}, {{ courseIcon?.state }}</p>
        </section>
        <section class="listing-features">
          <h2 class="section-heading">About this Course</h2>
          <ul>
            <li>Seats available: {{courseIcon?.availableSeats}}</li>
            <li>Remote available: {{courseIcon?.remoteLearning}}</li>
          </ul>
        </section>
        <section class="listing-apply">
          <h2 class="section-heading">Apply now</h2>
          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" formControlName="firstName"/>

            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" formControlName="lastName"/>

            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email"/>

            <button type="submit" class="primary">Apply</button>
          </form>
        </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  coursesService = inject(CoursesService);
  courseIcon: CourseIcon | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
});

  constructor() {
    const courseIconId = Number(this.route.snapshot.params["id"]);
    this.coursesService.getCourseById(courseIconId).then(courseIcon => {
      this.courseIcon = courseIcon;
    });
    // this.courseIcon = this.coursesService.getCourseById(courseIconId);
  }

  submitApplication() {
    this.coursesService.submitApplication(
      this.applyForm.value.firstName ?? '', 
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
