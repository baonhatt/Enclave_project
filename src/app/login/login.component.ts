import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show = false;

  login:FormGroup|any;
  input: any;
  password: any;
  get f(){
    return this.login.controls
  }
  constructor(private _http:HttpClient, private _route:Router, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.login = this.fb.group({
      'username': ["", [Validators.required]],
      'pw':  ["", [Validators.required]],

    })

    this.password = "password";

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
  onSubmit(){
    console.log(this.login);
  }
  logindata(login:FormGroup){

    this._http.get<any>("http://localhost:3000/signupUser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.login.value.username && a.pw === this.login.value.pw
      });

      if(user){
        alert('You are successfully login');
        this.login.reset();
        this._route.navigate(['dashboard']);
      }else{
        alert('User Not Found');
        this._route.navigate(['login']);
      }

    }, err=>{
      alert('Something was wrong');
    })


  }



}

