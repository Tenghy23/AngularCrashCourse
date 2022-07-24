import { Component, OnInit } from '@angular/core';

/* @Component is called a decorator function */
@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTitle() }}<h2>
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

/* pascal Naming convention, this is how we declare
a class */
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "List of Courses";
  courses = ["course1", "course2", "course3"];

  getTitle() {
    return this.title;
  }
}
