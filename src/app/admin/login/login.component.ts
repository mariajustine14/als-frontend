import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpClient,
    private formBuilder:FormBuilder,
    private router : Router
    ) { }


 user: any = FormGroup;

  ngOnInit(): void {

    this.user = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  url = 'http://127.0.0.1:8000/api/user/login';

  token: any;

  onLogin(){
    console.log(this.user.value);
    this.http.post(this.url, this.user.value).subscribe(response=>{
      console.log(response);
      this.token = response;
      window.localStorage.setItem('token', this.token.token);
      // redirect to admin page
     // this.router.navigate(['/account']);
    },
    errors=>{
      alert('invalid credential');
      console.log(errors);
    }
    );
  }
  

}
