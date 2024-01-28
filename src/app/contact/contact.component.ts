import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../services/dataHandler.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formData : any;
  constructor(private httpServ : DataHandlerService){}
  
  ngOnInit(): void {
    this.formData = new FormGroup({
      Name : new FormControl('' , Validators.required),
      email : new FormControl('' , [Validators.required , Validators.email]),
      contact : new FormControl('' , [Validators.required , Validators.minLength(10), Validators.maxLength(10)]),
      message : new FormControl('' , Validators.required)
    })
    console.log(this.formData)
  }
  DataSubmit(){
    console.log(this.formData.value)
    this.httpServ.postData(this.formData.value).subscribe((res : any)=>{
      console.log(res)
    })
    this.formData.reset()
  }
}
