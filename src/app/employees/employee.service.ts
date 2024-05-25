// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Employee {
//     id: number;
//     username: string;
//     email: string;
//     status: 'active' | 'inactive';
// }

// @Injectable({
//     providedIn: 'root'
// })
// export class EmployeeService {
//     private apiUrl = 'http://localhost:3000/employees';

//     constructor(private http: HttpClient) { }

//     getEmployees(): Observable<Employee[]> {
//         return this.http.get<Employee[]>(this.apiUrl);
//     }

//     getEmployee(id: number): Observable<Employee> {
//         return this.http.get<Employee>(`${this.apiUrl}/${id}`);
//     }

//     addEmployee(employee: Employee): Observable<Employee> {
//         return this.http.post<Employee>(this.apiUrl, employee);
//     }

//     updateEmployee(id: number, employee: Employee): Observable<Employee> {
//         return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
//     }

//     deleteEmployee(id: number): Observable<void> {
//         return this.http.delete<void>(`${this.apiUrl}/${id}`);
//     }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   private apiUrl = 'https://angular-crud-app-ihkd.onrender.com/employees';
 

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
