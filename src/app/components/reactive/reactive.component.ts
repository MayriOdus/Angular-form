import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  loginForm:FormGroup
  login = new Account();
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'name' : new FormControl(this.login.name, [Validators.required, Validators.minLength(4)]),
      'password': new FormControl(this.login.password, [Validators.required, Validators.minLength(4)]),
      'phone': new FormControl(this.login.password, [Validators.required, Validators.minLength(10)])
    })
  }
  // provide property for validation in template
  get name() { return this.loginForm.get('name'); }
  get password () {return this.loginForm.get('password')} 
  get phone () {return this.loginForm.get('phone')} 
  onSubmit(value){
    console.log("submit");
    window.alert(JSON.stringify(value));
  }
}
export class Account{
  name:string;
  password:string;
  phone:string;
}
