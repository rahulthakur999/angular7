import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { ValueComponent } from './value/value.component';
import { VisionComponent } from './vision/vision.component';

const routes:Routes = [
  {
    path:'',  redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {path:'trackby',component:TrackbyComponent},
  {
    path:'aboutus', 
    children:[
      {path:'',component:AboutusComponent},
      {path:'our-vision',component:VisionComponent},
      {path:'our-value',component:ValueComponent},
    ]  
  },

  {
    path:'**', 
    component:HomeComponent
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })

export class RouteModule { }
