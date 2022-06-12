import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTitle() }}<h2>
    <ul>
      <li *ngFor="let course of courses">
          {{ course }}
      </li>
    </ul>
    `,
  styleUrls: ['./courses.component.scss']
})
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
