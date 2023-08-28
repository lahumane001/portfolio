import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../services/dataHandler.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  msgDetails : any;

  constructor(private dataServe : DataHandlerService){}

  ngOnInit(): void {
    this.msgDetails = new FormGroup({
      fullName : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      contact : new FormControl('', Validators.required),
      msg : new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    console.log(this.msgDetails.value);
    this.dataServe.postDetails(this.msgDetails.value).subscribe();
    this.msgDetails.reset();
  }
}
