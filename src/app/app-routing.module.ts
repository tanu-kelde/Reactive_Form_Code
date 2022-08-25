import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:"",
  loadChildren:()=>import("../app/reactive-from/reactive-from.module").then(m=>m.ReactiveFromModule)
},
{
  path:"showData",
  loadChildren:()=>import("../app/show-data/show-data.module").then(m=>m.ShowDataModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
