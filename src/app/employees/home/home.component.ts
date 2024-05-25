// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {

// }


// import { Component, OnInit } from '@angular/core';
// import { EmployeeService, Employee } from '../employee.service';

// @Component({
//     selector: 'app-home',
//     templateUrl: './home.component.html',
//     styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//     employees: Employee[] = [];

//     constructor(private employeeService: EmployeeService) { }

//     ngOnInit(): void {
//         this.loadEmployees();
//     }

//     loadEmployees() {
//         this.employeeService.getEmployees().subscribe((data: Employee[]) => {
//             this.employees = data;
//         });
//     }

//     deleteEmployee(id: number) {
//         this.employeeService.deleteEmployee(id).subscribe(() => {
//             this.loadEmployees();
//         });
//     }
// }



import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  editEmployee(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  addEmployee(): void {
    this.router.navigate(['/add']);
  }
}
