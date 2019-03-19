import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {

  constructor() { }

  data=[
    {id:1,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
    {id:2,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
    {id:3,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
    {id:4,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
    {id:5,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
  ];

  addmore(){
    this.data=[
      {id:1,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
      {id:2,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
      {id:3,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
      {id:4,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
      {id:5,name:'Rahul',email:'rahul.kumar@ordergenie.co.in'},
      {id:6,name:'Mohal',email:'mohan.kumar@ordergenie.co.in'},
    ]; 
  }

  trackbyid(index:number,name:any):string{
     console.log(name.id);
     return name.id;
  }

  ngOnInit() {
  }

}
