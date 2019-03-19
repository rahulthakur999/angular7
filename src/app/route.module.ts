import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TrackbyComponent } from './trackby/trackby.component';

const routes:Routes = [
  {
    path:'home', 
    component:HomeComponent
  },
  {path:'trackby',component:TrackbyComponent},
  {
    path:'aboutus', 
    component:AboutusComponent
  },
  {
    path:'**', 
    component:HomeComponent
  },
  {
    path:'',  redirectTo:'home', pathMatch:'full'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })

export class RouteModule { }
