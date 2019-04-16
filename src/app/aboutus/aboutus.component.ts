import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-aboutus',
  templateUrl:'./aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  providers:[UserService]
})
export class AboutusComponent implements OnInit {

  constructor(private _us: UserService) { }

  users;
  count:number=0;

  ngOnInit() {

    this.users=this._us.users;

  }
 
  showcount(){
    this.count = this._us.showcount(6,6,6,6,1);
  }

}
