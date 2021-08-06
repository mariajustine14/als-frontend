import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update-apartment',
  templateUrl: './update-apartment.component.html',
  styleUrls: ['./update-apartment.component.css']
})
export class UpdateApartmentComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateApart();
  }

  url = "http://127.0.0.1:8000/api/apartment/update/";
  
  updateApartment: any;

  updateApart() {
    console.log(this.router.snapshot.params.id);
    
    // this.http.get(this.url).subscribe((data:any)=>{
    //   console.log(data);
    //   this.updateApartment = data.apartment;
    // });
  }
}
