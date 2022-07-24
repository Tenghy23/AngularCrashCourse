import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

// @Component is called a decorator function
// component files are mainly used to display services
@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <!-- DOM refers to object/nodes that represent the page -->
      <!-- directives are used to manipulate the DOM -->
      <!-- when u modify the DOM w a directive, append * before the ng method -->
      <li *ngFor="let course of courses">
          <!-- string interpolation uses dbl curly bracket -->
          {{ course }}
      </li>
    </ul>
    `,
  styleUrls: ['./courses.component.scss']
})

// pascal Naming convention, this is how we declare a class
export class CoursesComponent {
    title = "List of courses";
    courses;

    // by passing in service, we apply dependency injection
    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
}
