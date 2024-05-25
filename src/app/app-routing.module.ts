
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './employees/home/home.component';
// import { AddComponent } from './employees/add/add.component';
// import { EditComponent } from './employees/edit/edit.component';

// const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     { path: 'home', component: HomeComponent },
//     { path: 'add', component: AddComponent },
//     { path: 'edit/:id', component: EditComponent }
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './employees/home/home.component';
 import { AddComponent } from './employees/add/add.component';
 import { EditComponent } from './employees/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
