import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA' },
    { id: 2, name: 'Mumi', country: 'India' },
    { id: 3, name: 'Hugo', country: 'Venezuela' },
  ];
}
