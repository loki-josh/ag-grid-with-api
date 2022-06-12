import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api_data_binding';
 jsonData:any=[];

  constructor(private api:ApiService){
    
  }
  

  ngOnInit(){
   this.api.getData().subscribe((response:any)=>{
    this.jsonData = response.data
    // console.log(this.jsonData)
   })
  }

 
  
}
