import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  constructor(private http: HttpClient
    
    
    ) { }

  ngOnInit(): void {
    this.viewApartment();
  }
  url = "http://127.0.0.1:8000/api/apartment/get_all";

  myApartment: any;

  viewApartment() {
    this.http.get(this.url).subscribe((data:any)=>{
      console.log(data);
      this.myApartment = data.apartment;
    });
  }

  apartmentDetails = false;
  displayDetails: any;

  showDetails (id:any){
    this.apartmentDetails=true;

    this.displayDetails = this.myApartment.filter((index:any) => {
       return index.id === id;
    });
    console.log(this.displayDetails);
    return this.displayDetails;
   
    
  }

  
  back(){
    this.apartmentDetails=false;
  }

}
