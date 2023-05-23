import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';
import { ProfileComponent } from './profile/profile.component';
import {AboutComponent} from "../about/about.component";
import {AppModule} from "../app.module";
import {HomeComponent} from "./home.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ImagesService} from "./images.service";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
  ],
    imports: [
        RouterModule.forChild(homeRoutes),
        CommonModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        NgOptimizedImage
    ],
  exports:[
    ProfileComponent
  ]
})
export class HomeModule { }
