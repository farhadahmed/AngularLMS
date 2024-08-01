import { Component, inject } from '@angular/core';
import { CourseIconComponent } from "../course-icon/course-icon.component";
import { CourseIcon } from '../course-icon';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CourseIconComponent],
  template: `
    <section>
        <form>
          <input type="text" placeholder="Filter by city" #filter/>
          <button class="primary" type="button">Search</button>
        </form>
    </section>
    <section class="results">
      <app-course-icon *ngFor="let courseIcon of courseIconList" [courseIcon] = "courseIcon"></app-course-icon>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courseIconList: CourseIcon[] = [];
  coursesService: CoursesService = inject(CoursesService);

  constructor() {
    this.courseIconList = this.coursesService.getAllCourses();
  }
}
