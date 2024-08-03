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
      <h1>Farhad's Simple Online School</h1>
        <form>
          <input type="text" placeholder="Filter by course" #filter/>
          <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        </form>
    </section>
    <section class="results">
      <app-course-icon *ngFor="let courseIcon of filteredCourseList" [courseIcon]="courseIcon"></app-course-icon>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courseIconList: CourseIcon[] = [];
  coursesService: CoursesService = inject(CoursesService);
  filteredCourseList:CourseIcon[] = [];

  constructor() {
    this.coursesService.getAllCourses().then((courseIconList: CourseIcon[]) => {
      this.courseIconList = courseIconList;
      this.filteredCourseList = courseIconList;
    });
  }

  filterResults(text: string) {
    if (!text) this.filteredCourseList = this.courseIconList;

    this.filteredCourseList = this.courseIconList.filter(
      courseIcon => courseIcon?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
