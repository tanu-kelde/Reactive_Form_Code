import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css']
})
export class ReactiveFromComponent implements OnInit {
  reactiveForm: FormGroup | any;
  submitted: false | any;


  constructor(private formBuilder: FormBuilder, private router:Router) {
    console.log(" Reactive Form component ");
  }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      locationId: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{5}$")]],
      locationDisplayName: ['', [Validators.required, , Validators.pattern("[a-zA-Z ]*")]],
      streetAddress: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      cityAddress: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      stateAddress: ['', [Validators.required, , Validators.pattern("[a-zA-Z ]*")]],
      countryAddress: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      postalCodeAddress: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]],
      locatinContactTitle: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      locationContactName: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      country_code: ['', [Validators.required, Validators.minLength(2), Validators.minLength(10)]],
      locationContactNumber: ['', [Validators.required, , Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      locationContactEmail: ['', [Validators.required, Validators.email]]
    })
  }
  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }
    // console.log(data);

    const value = JSON.parse(localStorage.getItem("data") || '[]');
    value.push(this.reactiveForm.value);
    localStorage.setItem("data", JSON.stringify(value));
    this.router.navigate(['showData']);
  }

  onReset() {
    this.submitted = false;
    this.reactiveForm.reset();
  }
}
