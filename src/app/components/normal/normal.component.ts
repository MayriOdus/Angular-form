import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit {

  mRegister:RegisterModel= new RegisterModel();
  debug:string ="";
  constructor() { }
  onSubmit(){ 
    //window.alert(JSON.stringify(this.mRegister));   
    this.debug= JSON.stringify(this.mRegister);
    }
  
  // onSubmit(value){ onTest
  //   window.alert(JSON.stringify(value));

  // }
  ngOnInit() {
  }

}

class RegisterModel {
  firstname: string;
  lastname: string;
  email: string;
  password: string
}
