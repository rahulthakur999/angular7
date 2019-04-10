import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-aboutus',
  template: ` 
  <h2>Calling data from UserService</h2>
  
<ul>
<li *ngFor="let user of users">{{user.name}}</li>
</ul>

<button (click)="showcount()">Show Count {{count}}</button>
  `,
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
