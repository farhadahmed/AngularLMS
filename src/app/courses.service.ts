import { Injectable } from '@angular/core';
import { CourseIcon } from './course-icon';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // url = 'http://localhost:3000/courses';
  url = 'https://api.jsonbin.io/v3/b/66abeb39e41b4d34e41a5f71';
  readOnlyAccessKey = '$2a$10$Zd9YIbBufChoPqkz8wiU9Of2zuyelyHxbX0B6isKdySGI3/QHxZPq';

  constructor() { }

  async getAllCourses() : Promise<CourseIcon[]> {
    try {
      const response = fetch(this.url, {
      method: "GET",
      headers: {
        'X-Access-Key': this.readOnlyAccessKey
      },
      redirect: "follow"
      });

      let data = (JSON.parse(await (await response).text())).record.courses;
      console.log(data);
      return data;
    }
    catch (error) {
      console.log('Error fetching courses: ', error);
      return [];
    }
  }

  // The below function works if we keep the array of courses in this service.
  // getAllCourses() : CourseIcon[] {
  //   return this.courseIconList;
  // }

  async getCourseById(id: Number): Promise<CourseIcon | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  // The below function works if we keep the array of courses in this service.
  // getCourseLocationById(id: Number): CourseIcon | undefined {
  //   return this.courseIconList.find(courseIcon => courseIcon.id === id);
  // }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
