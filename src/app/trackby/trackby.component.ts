import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {

  constructor() { }

  arr=['Rahul', 'Amit', 'Mohan'];
  arrnum=[3,5,1,6,8,7,9,23,12,6];
  know:number;

  data=[
    {id:5,name:'Rahul 5',email:'rahul.kumar@ordergenie.co.in'},
    {id:1,name:'Rahul 1',email:'rahul.kumar@ordergenie.co.in'},
    {id:2,name:'Rahul 2',email:'rahul.kumar@ordergenie.co.in'},
    {id:3,name:'Rahul 3',email:'rahul.kumar@ordergenie.co.in'},
    {id:4,name:'Rahul 4',email:'rahul.kumar@ordergenie.co.in'}, 
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
    // console.log(name.id);
     return name.id;
  }

  ngOnInit() {

    this.arr=this.arr.sort(); 
    console.log('arr.Sort(): ',this.arr);

    this.know = this.arrnum.find(function(e){
      return e > 6 && e < 12 ;
    })
    console.log('arr.find(): ',this.know);

  }

}
