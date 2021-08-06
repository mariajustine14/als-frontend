import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


 

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {


  constructor( private http: HttpClient) { }

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


 
  onDelete(id:any){
    console.log(id);
    this.http.delete(`http://127.0.0.1:8000/api/apartment/destroy/${id}`)
             .subscribe(response=>{
                console.log(response);
              
    },errors=>{
      console.log(errors);
    });
    window.location.reload();
  }

  showUpdateForm = false;
  onUpdate(){
    this.showUpdateForm = true;
  }

  back(){
    this.apartmentDetails=false;
  }

}
