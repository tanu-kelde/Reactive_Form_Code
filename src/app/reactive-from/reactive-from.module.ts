import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFromRoutingModule } from './reactive-from-routing.module';
import { ReactiveFromComponent } from './reactive-from.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ReactiveFromComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFromRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFromModule { }
