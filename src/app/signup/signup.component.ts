import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup:FormGroup|any;
  signuser: any
  constructor(private _http:HttpClient, private _route:Router, private fb: FormBuilder) { }
  show = false;
  password: any;
  get f(){
    return this.signup.controls
  }
  ngOnInit(): void {
    this.signup = this.fb.group({
      'username': ["", [Validators.required]],
      'pw': ["", [Validators.required, Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')]],
      'email': ["", [Validators.required, Validators.email]],
      'phone':["", [Validators.required, Validators.maxLength(10)]]
  })
  }
  signupdata(signup:FormGroup){
    //console.log(this.singup.value);
    this.signuser = this.signup.value.username
    this._http.post<any>("http://localhost:3000/signupUser", this.signup.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.signup.reset();
      this._route.navigate(['login']);
    }, err=>{
      alert('Somthing went wrong');
    })


  }

  OnClick(){
    if(this.password === 'password'){
      this.password = 'text';
      this.show = true;
    }else{
      this.password = 'password';
      this.show = false
    }
  }

}
