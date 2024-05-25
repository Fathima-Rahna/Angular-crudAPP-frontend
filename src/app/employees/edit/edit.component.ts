// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { EmployeeService, Employee } from '../employee.service';

// @Component({
//     selector: 'app-edit',
//     templateUrl: './edit.component.html',
//     styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {
    

//     constructor(
//         private route: ActivatedRoute,
//         private employeeService: EmployeeService,
//         private router: Router
//     ) { }

//     ngOnInit(): void {
//         const id = +this.route.snapshot.paramMap.get('id')!;
//         this.employeeService.getEmployee(id).subscribe((data: Employee) => {
//             this.employee = data;
//         });
//     }

//     onSubmit() {
//         this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
//             this.router.navigate(['/home']);
//         });
//     }
// }

// employee: Employee = { id: 0, username: '', email: '', status: 'active' };


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
//  import { EmployeeService, Employee } from '../employee.service';


// @Component({
//   selector: 'app-edit-user',
//   templateUrl: './edit-user.component.html',
//   styleUrls: ['./edit-user.component.css']
// })
// export class EditUserComponent implements OnInit {
//   employee: Employee = { id: 0, username: '', email: '', status: 'active' };
// constructor(private route:ActivatedRoute,private api:ApiService,private router:Router){}
// ngOnInit():void {
//   this.route.params.subscribe((result:any)=>{
//     console.log(result);
//     const {id}=result
//     console.log(id);
//     this.getUserDetails(id)
    
    
//   })
// }


// getUserDetails(id:any){
//   this.api.getAUserAPI(id).subscribe((result:any)=>{
//     this.user=result
//     console.log(this.user);
    

//   })
// }

// cancel(id:any){
//   this.getUserDetails(id)
// }

// updateUser(){
//   this.api.updateUserAPI(this.user).subscribe((result:any)=>{
//     alert("User update successfully")
//     this.router.navigateByUrl('/users')
//   })
// }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee: any = {
    id:'',
    username: '',
    email: '',
    status: 'active'
  };

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getEmployeeDetails(id);
    });
  }

  getEmployeeDetails(id: number): void {
    this.employeeService.getEmployee(id).subscribe(employee => {
      this.employee = employee;
    });
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      alert('Employee updated successfully');
      this.router.navigateByUrl('/home');
    });
  }
}
