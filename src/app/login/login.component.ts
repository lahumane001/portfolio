import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataHandlerService } from '../services/dataHandler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loggedDetails : any;
  errMsg : any;

  constructor( private router : Router, private dataServe : DataHandlerService){}
  ngOnInit(): void {
    this.loggedDetails = new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
  }

  login(){
    console.log(this.loggedDetails.value.username);
    if(this.loggedDetails.value.username === "Lahu123" && this.loggedDetails.value.password === "lahu123"){
      console.log('success');
      this.dataServe.loggedIn()
      this.router.navigate(['my-dashboard'])
    }else{
      // console.log('failed');
      this.errMsg = "Invalid Username and Password..!"
    }
  }

}
