import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  constructor() { }

  users = [
    {name:'Rahul', password:'rahul@123'},
    {name:'Mohan', password:'rahul@123'},
    {name:'Pavan', password:'rahul@123'},
    {name:'Ram', password:'rahul@123'},
    {name:'Lalit', password:'rahul@123'},
  ]

showcount(...num){
let n=0;
for(let i=0; i<num.length; i++){
  n+=num[i];
}
return n;
}


}
