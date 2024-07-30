import { Component } from '@angular/core';
import { CourseIconComponent } from "../course-icon/course-icon.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseIconComponent],
  template: `
    <section>
        <form>
          <input type="text" placeholder="Filter by city" #filter/>
          <button class="primary" type="button">Search</button>
        </form>
    </section>
    <section class="results">
      <app-course-icon></app-course-icon>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
