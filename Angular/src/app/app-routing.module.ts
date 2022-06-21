import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {Comp1Component} from './comp1/comp1.component'
import {Comp2Component} from './comp2/comp2.component'
import {Comp3Component} from './comp3/comp3.component'

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'comp1',component: Comp1Component},
  {path: 'comp2',component: Comp2Component},
  {path: 'comp3',component: Comp3Component},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
