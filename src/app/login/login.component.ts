import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(public srvc : LoginService,public rtr:Router){}
  
  ngOnInit(): void { 
  }
  loginform=new FormGroup({
    uname: new FormControl(),
    pwd:new FormControl()
  })
  checkuser(){
    
    var res= this.srvc.validateuser(this.loginform.value["uname"],this.loginform.value['pwd']);
    if(res){
    this.rtr.navigate(["home"]); 
    alert("login successful!");   
    }
    else{
      alert("invalid credantials");
    }
  
  
  }

}
