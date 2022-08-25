import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFromComponent } from './reactive-from.component';

const routes: Routes = [
   {
  path:"contact",
  component:ReactiveFromComponent
},{
  path:"",
  component:HomeComponent
}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFromRoutingModule { }
