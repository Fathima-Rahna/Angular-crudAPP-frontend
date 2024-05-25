// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';

// // @NgModule({
// //   declarations: [
// //     AppComponent
// //   ],
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule
// //   ],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// // export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { HomeComponent } from './employees/home/home.component';
// import { AddComponent } from './employees/add/add.component';
// import { EditComponent } from './employees/edit/edit.component';

// @NgModule({
//     declarations: [
//         AppComponent,
//         HomeComponent,
//         AddComponent,
//         EditComponent
//     ],
//     imports: [
//         BrowserModule,
//         AppRoutingModule,
//         HttpClientModule,
//         FormsModule
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './employees/home/home.component';
 import { AddComponent } from './employees/add/add.component';
 import { EditComponent } from './employees/edit/edit.component';
// import { HomeComponent } from './home/home.component';
// import { AddComponent } from './add/add.component';
// import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
