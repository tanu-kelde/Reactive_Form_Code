import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Form!:FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      locationId: [''],
      locationDisplayName: [''],
      streetAddress: [''],
      cityAddress: [''],
      stateAddress: [''],
      countryAddress: [''],
      postalCodeAddress: [''],
      locatinContactTitle: [''],
      locationContactName: [''],
      country_code: [''],
      locationContactNumber: [''],
      locationContactEmail: ['']
    })
  
  }

  // edit(row:any){
  //   console.log(row)
  //  this.Form.controls['locationId'].setValue(row.locationId),
  //  this.Form.controls['locationDisplayName'].setValue(row.locationDisplayName),
  //  this.Form.controls['streetAddress'].setValue(row.streetAddress),
  //  this.Form.controls['cityAddress'].setValue(row.cityAddress),
  //  this.Form.controls['stateAddress'].setValue(row.stateAddress),
  //  this.Form.controls['countryAddress'].setValue(row.countryAddress),
  //  this.Form.controls['postalCodeAddress'].setValue(row.postalCodeAddress),
  //  this.Form.controls['locatinContactTitle'].setValue(row.locatinContactTitle),
  //  this.Form.controls['locationContactName'].setValue(row.locationContactName),
  //  this.Form.controls['country_code'].setValue(row.country_code),
  //  this.Form.controls['locationContactEmail'].setValue(row.locationContactEmail)
  // }

}
