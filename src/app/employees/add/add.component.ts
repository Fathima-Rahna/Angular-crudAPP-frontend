// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-add',
// //   templateUrl: './add.component.html',
// //   styleUrls: ['./add.component.css']
// // })
// // export class AddComponent {

// // }

// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { EmployeeService, Employee } from '../employee.service';

// // @Component({
// //     selector: 'app-add',
// //     templateUrl: './add.component.html',
// //     styleUrls: ['./add.component.css']
// // })
// // export class AddComponent {
// //     employee: Employee = { id: 0, username: '', email: '', status: 'active' };

// //     constructor(private employeeService: EmployeeService, private router: Router) { }

// //     onSubmit() {
// //         this.employeeService.addEmployee(this.employee).subscribe(() => {
// //             this.router.navigate(['/home']);
// //         });
// //     }
// // }


// import { Component } from '@angular/core';
// import { EmployeeService } from '../employee.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.css']
// })
// export class AddComponent {
//   employee = {
//     id:'',
//     username: '',
//     email: '',
//     status: 'active'
//   };

//   constructor(private employeeService: EmployeeService, private router: Router) {}

//   addEmployee(): void {
//     this.employeeService.addEmployee(this.employee).subscribe(() => {
//       alert('Employee added successfully');
//       // this.router.navigateByUrl('/home');
//       this.router.navigate(['/home']);

//     });
//   }


//   setStatus(status: string): void {
//     this.employee.status = status;
//   }
// }


import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  employee = {
    id: '',
    username: '',
    email: '',
    status: 'active'
  };

  constructor(private employeeService: EmployeeService, private router: Router) {}

  addEmployee(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      const existingEmployee = employees.find(emp => emp.id === this.employee.id);
      if (existingEmployee) {
        alert('Employee ID already exists! Please use a unique ID to add the employee.');
        return;
      }

      this.employeeService.addEmployee(this.employee).subscribe(() => {
        alert('Employee added successfully');
        this.router.navigate(['/home']);
      });
    });
  }

  setStatus(status: string): void {
    this.employee.status = status;
  }
}
