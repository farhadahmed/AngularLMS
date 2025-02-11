import { Component, Input } from '@angular/core';
import { CourseIcon } from '../course-icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-icon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="courseIcon.photo" alt="Exterior photo of {{courseIcon.name}}">
      <h2 class="listing-heading">{{ courseIcon.name }}</h2>
      <p class="listing-location">{{ courseIcon.city }}, {{ courseIcon.state }}</p>
      <a [routerLink]="['/details', courseIcon.id]">Learn More</a>
    </section>
  `,
  styleUrl: './course-icon.component.css'
})
export class CourseIconComponent {
  @Input() courseIcon!:CourseIcon;
}
