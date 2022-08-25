import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDataRoutingModule } from './show-data-routing.module';
import { ShowDataComponent } from './show-data.component';
import {MatTableModule} from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './edit/edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ShowDataComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ShowDataRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class ShowDataModule { }
