import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ShowDataComponent } from './show-data.component';

const routes: Routes = [{
  path:"",
  component:ShowDataComponent
},
{
path:"edit",
component:EditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowDataRoutingModule { }
