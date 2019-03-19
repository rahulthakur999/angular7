import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
 

@Component({
  selector: 'app-home',
  template: ` 

  <h3>jQuery Example</h3>

  <button id="action" style="margin:10px;">Action</button>

  <div id="selectjquery" style="width:100px; height:50px; text-align:center; background:#ccc; position:absolute;">jQuery</div>

  ` ,
  templateUrl:'home.component.html'
})
export class HomeComponent implements OnInit {

data:string="Rahul Thakur";

data1:string="Rahul"

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){ 
   
      $('#action').click(function(){
        $('#selectjquery').animate({left: '+=100'},500);
      });
   
    });
   
  }

}
