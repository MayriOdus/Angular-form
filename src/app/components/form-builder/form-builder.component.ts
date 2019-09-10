import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name : ['',[Validators.required, Validators.minLength(4)]],
      password : ['',[Validators.required, Validators.minLength(6)]],
    })
  }
  get name() { return this.loginForm.get('name'); }
  get password () {return this.loginForm.get('password')} 

  onSubmit(value){
    console.log("submit");
    window.alert(JSON.stringify(value));
  }


}
