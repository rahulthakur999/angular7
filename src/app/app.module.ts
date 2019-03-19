import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouteModule } from './route.module';
import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TrackbyComponent } from './trackby/trackby.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    TrackbyComponent
  ],
  imports: [
    BrowserModule, RouteModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
