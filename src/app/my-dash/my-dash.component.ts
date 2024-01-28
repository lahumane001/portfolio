import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../services/dataHandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-dash',
  templateUrl: './my-dash.component.html',
  styleUrls: ['./my-dash.component.css']
})
export class MyDashComponent implements OnInit{

  msgDetails:any;

  constructor(private dataServe : DataHandlerService, private router : Router){}

  ngOnInit(): void {
    this.dataServe.getData().subscribe((res: any)=>{
      console.log(res);
      
      this.msgDetails = res;
      console.log(this.msgDetails);
    })
  }
  logouticon(){
    this.dataServe.loggedOut();
    this.router.navigate(['/home'])
  }
}
