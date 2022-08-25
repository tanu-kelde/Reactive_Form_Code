import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  Form!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  locationId?: Number;
  locationDisplayName?: String;
  streetAddress?: String;
  cityAddress?: String;
  stateAddress?: String;
  countryAddress?: String;
  postalCodeAddress?: Number;
  locatinContactTitle?: String;
  locationContactName?: String;
  country_code?: Number;
  locationContactNumber?: Number;
  locationContactEmail?: String;
  action?: any;
  id?: String;
  displayedColumns: string[] = ['id', 'locationId', 'locationDisplayName', 'streetAddress',
    'cityAddress', 'stateAddress', 'countryAddress', 'postalCodeAddress', 'locatinContactTitle', 'locationContactName', 'country_code'
    , 'locationContactNumber', 'locationContactEmail', 'action'];
  dataSource!: MatTableDataSource<any>
  formdata: any = [];
  index: any = [];




  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.Form = this.fb.group({
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
    this.getData();
    console.log(this.index)

  }

  getData() {
    const value: any[] = JSON.parse(localStorage.getItem("data") || '[]');
    this.formdata = value;
    console.log(value);
    this.dataSource = new MatTableDataSource(value);
  }


  deleteData(row: any) {
    window.confirm("Are you sure ?")

    const index = this.formdata.indexOf(row);
    console.log(index);
    if (confirm() == true) {
      this.formdata.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(this.formdata));
      this.getData();
    }
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editData(row: any) {

    // console.log(index)
    this.dialog.open(ShowDataComponent, {

    })
  }


  edit(row: any) {
    this.index = this.formdata.indexOf(row);

    console.log(row)
    this.Form.controls['locationId'].setValue(row.locationId),
      this.Form.controls['locationDisplayName'].setValue(row.locationDisplayName),
      this.Form.controls['streetAddress'].setValue(row.streetAddress),
      this.Form.controls['cityAddress'].setValue(row.cityAddress),
      this.Form.controls['stateAddress'].setValue(row.stateAddress),
      this.Form.controls['countryAddress'].setValue(row.countryAddress),
      this.Form.controls['postalCodeAddress'].setValue(row.postalCodeAddress),
      this.Form.controls['locatinContactTitle'].setValue(row.locatinContactTitle),
      this.Form.controls['locationContactName'].setValue(row.locationContactName),
      this.Form.controls['country_code'].setValue(row.country_code),
      this.Form.controls['locationContactNumber'].setValue(row.locationContactNumber),
      this.Form.controls['locationContactEmail'].setValue(row.locationContactEmail)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  update() {
    for (let index = 0; index < this.dataSource.data.length; index++) {
      if (this.dataSource.data[index].locationId === this.Form.value.locationId) {
        this.dataSource.data[index].locationDisplayName = this.Form.value.locationDisplayName;
        this.dataSource.data[index].streetAddress = this.Form.value.streetAddress;
        this.dataSource.data[index].cityAddress = this.Form.value.cityAddress;
        this.dataSource.data[index].stateAddress = this.Form.value.stateAddress;
        this.dataSource.data[index].countryAddress = this.Form.value.countryAddress;
        this.dataSource.data[index].postalCodeAddress = this.Form.value.postalCodeAddress;
        this.dataSource.data[index].locatinContactTitle = this.Form.value.locatinContactTitle;
        this.dataSource.data[index].locationContactName = this.Form.value.locationContactName;
        this.dataSource.data[index].country_code = this.Form.value.country_code;
        this.dataSource.data[index].locationContactNumber = this.Form.value.locationContactNumber;
        this.dataSource.data[index].countrlocationContactEmaily_code = this.Form.value.locationContactEmail;
      
        localStorage.setItem("data", JSON.stringify(this.dataSource.data));
      }
    }
    this.getData();
  }
}


