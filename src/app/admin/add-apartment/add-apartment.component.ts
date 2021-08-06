import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private router : Router
  ) { }

  apartment: any = FormGroup;

  ngOnInit(): void {

    this.apartment = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['',[Validators.required]],
      location: ['', [Validators.required]],
      owner: ['',[Validators.required]],
      contact: ['', [Validators.required]],
      number_of_rooms: ['',[Validators.required]],
      map: ['', [Validators.required]],
      room1: ['',[Validators.required]],
      room2: ['', [Validators.required]],
      cr: ['',[Validators.required]],
      price: ['', [Validators.required]]
    });

  }


  url = "http://127.0.0.1:8000/api/apartment/add";


  addApartment(){
    console.log(this.apartment.value);

    this.http.post(this.url, this.apartment.value).subscribe(response=>{
        console.log(response);
        alert("Successfully  Added");
        this.router.navigate(['/apartment-list']);
    },
    errors=>{
      console.log(errors);
      alert("Something went wrong");
    });

  }
}
