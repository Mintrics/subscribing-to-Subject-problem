import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';


const routes: Routes = [
  {path: '1', component: Comp1Component},
  {path: '2', component: Comp2Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 
}
//app.module.ts ==>> import { AppRoutingModule } from './app-routing.module'; + imports: [,AppRoutingModule]